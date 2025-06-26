import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/conductores/conductoresSlice';
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

const ConductoresView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { conductores } = useAppSelector((state) => state.conductores);

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
        <title>{getPageTitle('View conductores')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View conductores')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_conductor</p>
            <p>{conductores?.id_conductor}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_taxista</p>
            <p>{conductores?.id_taxista}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>nombre</p>
            <p>{conductores?.nombre}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>apellidos</p>
            <p>{conductores?.apellidos}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>tel</p>
            <p>{conductores?.tel}</p>
          </div>

          <FormField label='f_entrada'>
            {conductores.f_entrada ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  conductores.f_entrada
                    ? new Date(
                        dayjs(conductores.f_entrada).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No f_entrada</p>
            )}
          </FormField>

          <FormField label='f_salida'>
            {conductores.f_salida ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  conductores.f_salida
                    ? new Date(
                        dayjs(conductores.f_salida).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No f_salida</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>dni</p>
            <p>{conductores?.dni}</p>
          </div>

          <FormField label='fecha_nacimiento'>
            {conductores.fecha_nacimiento ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  conductores.fecha_nacimiento
                    ? new Date(
                        dayjs(conductores.fecha_nacimiento).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha_nacimiento</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>licencia_conducir</p>
            <p>{conductores?.licencia_conducir}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/conductores/conductores-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

ConductoresView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default ConductoresView;
