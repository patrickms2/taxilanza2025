import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/taxis/taxisSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const TaxisView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { taxis } = useAppSelector((state) => state.taxis);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View taxis')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View taxis')}
          main
        >
          <BaseButton
            color='info'
            label='Edit'
            href={`/taxis/taxis-edit/?id=${id}`}
          />
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>ownerid</p>

            <p>{taxis?.ownerid?.id ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>license_plate</p>
            <p>{taxis?.license_plate}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>brand</p>
            <p>{taxis?.brand}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>model</p>
            <p>{taxis?.model}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>year</p>
            <p>{taxis?.year || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>color</p>
            <p>{taxis?.color}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>taxi_status</p>
            <p>{taxis?.taxi_status ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Locations taxiid</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>latitude</th>

                      <th>longitude</th>

                      <th>last_update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxis.locations_taxiid &&
                      Array.isArray(taxis.locations_taxiid) &&
                      taxis.locations_taxiid.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/locations/locations-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='latitude'>{item.latitude}</td>

                          <td data-label='longitude'>{item.longitude}</td>

                          <td data-label='last_update'>
                            {dataFormatter.dateTimeFormatter(item.last_update)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!taxis?.locations_taxiid?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/taxis/taxis-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

TaxisView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_TAXIS'}>{page}</LayoutAuthenticated>
  );
};

export default TaxisView;
