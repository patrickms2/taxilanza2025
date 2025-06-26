import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/servicios/serviciosSlice';
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

const ServiciosView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { servicios } = useAppSelector((state) => state.servicios);

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
        <title>{getPageTitle('View servicios')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View servicios')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_servicio</p>
            <p>{servicios?.id_servicio}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>tipo_servicio</p>
            <p>{servicios?.tipo_servicio ?? 'No data'}</p>
          </div>

          <FormField label='fecha_solicitud'>
            {servicios.fecha_solicitud ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  servicios.fecha_solicitud
                    ? new Date(
                        dayjs(servicios.fecha_solicitud).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha_solicitud</p>
            )}
          </FormField>

          <FormField label='fecha_reserva'>
            {servicios.fecha_reserva ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  servicios.fecha_reserva
                    ? new Date(
                        dayjs(servicios.fecha_reserva).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha_reserva</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>estado_servicio</p>
            <p>{servicios?.estado_servicio ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_cliente</p>
            <p>{servicios?.id_cliente}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_taxista</p>
            <p>{servicios?.id_taxista}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/servicios/servicios-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

ServiciosView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default ServiciosView;
