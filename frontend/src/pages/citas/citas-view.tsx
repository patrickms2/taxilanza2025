import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/citas/citasSlice';
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

const CitasView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { citas } = useAppSelector((state) => state.citas);

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
        <title>{getPageTitle('View citas')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View citas')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_cita</p>
            <p>{citas?.id_cita}</p>
          </div>

          <FormField label='fecha'>
            {citas.fecha ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  citas.fecha
                    ? new Date(dayjs(citas.fecha).format('YYYY-MM-DD hh:mm'))
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>hora</p>
            <p>{citas?.hora}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_departamento</p>
            <p>{citas?.id_departamento}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>lugar</p>
            <p>{citas?.lugar || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>usuarios</p>
            <p>{citas?.usuarios}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>taxistas</p>
            <p>{citas?.taxistas}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>estado_cita</p>
            <p>{citas?.estado_cita ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_creador</p>
            <p>{citas?.id_creador}</p>
          </div>

          <FormField label='f_creacion'>
            {citas.f_creacion ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  citas.f_creacion
                    ? new Date(
                        dayjs(citas.f_creacion).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No f_creacion</p>
            )}
          </FormField>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/citas/citas-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

CitasView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default CitasView;
