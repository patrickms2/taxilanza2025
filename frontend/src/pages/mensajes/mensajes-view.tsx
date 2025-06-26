import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/mensajes/mensajesSlice';
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

const MensajesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mensajes } = useAppSelector((state) => state.mensajes);

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
        <title>{getPageTitle('View mensajes')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View mensajes')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_mensaje</p>
            <p>{mensajes?.id_mensaje}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_departamento</p>
            <p>{mensajes?.id_departamento}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_taxista</p>
            <p>{mensajes?.id_taxista}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>contenido</p>
            <p>{mensajes?.contenido}</p>
          </div>

          <FormField label='fecha_envio'>
            {mensajes.fecha_envio ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  mensajes.fecha_envio
                    ? new Date(
                        dayjs(mensajes.fecha_envio).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No fecha_envio</p>
            )}
          </FormField>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/mensajes/mensajes-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

MensajesView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default MensajesView;
