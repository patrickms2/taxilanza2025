import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/taxistas/taxistasSlice';
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

const TaxistasView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { taxistas } = useAppSelector((state) => state.taxistas);

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
        <title>{getPageTitle('View taxistas')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View taxistas')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_taxista</p>
            <p>{taxistas?.id_taxista}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_user</p>
            <p>{taxistas?.id_user}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>licencia_conducir</p>
            <p>{taxistas?.licencia_conducir}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>apellidos</p>
            <p>{taxistas?.apellidos}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>dni</p>
            <p>{taxistas?.dni}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>tipo</p>
            <p>{taxistas?.tipo ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>direccion</p>
            <p>{taxistas?.direccion}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>telefono</p>
            <p>{taxistas?.telefono}</p>
          </div>

          <FormField label='fecha_registro'>
            {taxistas.fecha_registro ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  taxistas.fecha_registro
                    ? new Date(
                        dayjs(taxistas.fecha_registro).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha_registro</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>estado</p>
            <p>{taxistas?.estado ?? 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/taxistas/taxistas-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

TaxistasView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default TaxistasView;
