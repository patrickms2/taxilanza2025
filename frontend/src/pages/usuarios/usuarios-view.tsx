import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/usuarios/usuariosSlice';
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

const UsuariosView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { usuarios } = useAppSelector((state) => state.usuarios);

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
        <title>{getPageTitle('View usuarios')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View usuarios')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_usuario</p>
            <p>{usuarios?.id_usuario}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>nombre</p>
            <p>{usuarios?.nombre}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>apellidos</p>
            <p>{usuarios?.apellidos}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>email</p>
            <p>{usuarios?.email}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>password</p>
            <p>{usuarios?.password}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>tipo_usuario</p>
            <p>{usuarios?.tipo_usuario ?? 'No data'}</p>
          </div>

          <FormField label='fecha_registro'>
            {usuarios.fecha_registro ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  usuarios.fecha_registro
                    ? new Date(
                        dayjs(usuarios.fecha_registro).format(
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
            <p>{usuarios?.estado ?? 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/usuarios/usuarios-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

UsuariosView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default UsuariosView;
