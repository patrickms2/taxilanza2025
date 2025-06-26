import {
  mdiAccount,
  mdiChartTimelineVariant,
  mdiMail,
  mdiUpload,
} from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SwitchField } from '../../components/SwitchField';

import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { RichTextField } from '../../components/RichTextField';

import { create } from '../../stores/usuarios/usuariosSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_usuario: '',

  nombre: '',

  apellidos: '',

  email: '',

  password: '',

  tipo_usuario: 'Empleado',

  fecha_registro: '',

  estado: 'Activo',
};

const UsuariosNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/usuarios/usuarios-list');
  };
  return (
    <>
      <Head>
        <title>{getPageTitle('New Item')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title='New Item'
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='id_usuario'>
                <Field name='id_usuario' placeholder='id_usuario' />
              </FormField>

              <FormField label='nombre'>
                <Field name='nombre' placeholder='nombre' />
              </FormField>

              <FormField label='apellidos'>
                <Field name='apellidos' placeholder='apellidos' />
              </FormField>

              <FormField label='email'>
                <Field name='email' placeholder='email' />
              </FormField>

              <FormField label='password'>
                <Field name='password' placeholder='password' />
              </FormField>

              <FormField label='tipo_usuario' labelFor='tipo_usuario'>
                <Field name='tipo_usuario' id='tipo_usuario' component='select'>
                  <option value='Empleado'>Empleado</option>

                  <option value='Taxista'>Taxista</option>

                  <option value='Cliente'>Cliente</option>

                  <option value='Hotel'>Hotel</option>

                  <option value='Admin'>Admin</option>

                  <option value='Conductor'>Conductor</option>

                  <option value='Central'>Central</option>
                </Field>
              </FormField>

              <FormField label='fecha_registro'>
                <Field
                  type='datetime-local'
                  name='fecha_registro'
                  placeholder='fecha_registro'
                />
              </FormField>

              <FormField label='estado' labelFor='estado'>
                <Field name='estado' id='estado' component='select'>
                  <option value='Activo'>Activo</option>

                  <option value='Inactivo'>Inactivo</option>
                </Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/usuarios/usuarios-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

UsuariosNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default UsuariosNew;
