import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/controlfichaje/controlfichajeSlice';
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

const ControlfichajeView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { controlfichaje } = useAppSelector((state) => state.controlfichaje);

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
        <title>{getPageTitle('View controlfichaje')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View controlfichaje')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_asistencia</p>
            <p>{controlfichaje?.id_asistencia}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_usuario</p>
            <p>{controlfichaje?.id_usuario}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_taxi</p>
            <p>{controlfichaje?.id_taxi}</p>
          </div>

          <FormField label='fecha'>
            {controlfichaje.fecha ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  controlfichaje.fecha
                    ? new Date(
                        dayjs(controlfichaje.fecha).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>hora_inicio</p>
            <p>{controlfichaje?.hora_inicio}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>hora_fin</p>
            <p>{controlfichaje?.hora_fin}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>ubicacion_inicio</p>
            <p>{controlfichaje?.ubicacion_inicio || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>ubicacion_fin</p>
            <p>{controlfichaje?.ubicacion_fin || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>horas_trabajadas</p>
            <p>{controlfichaje?.horas_trabajadas || 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/controlfichaje/controlfichaje-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

ControlfichajeView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default ControlfichajeView;
