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

import { create } from '../../stores/servicios/serviciosSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_servicio: '',

  tipo_servicio: 'Recogida Hotel',

  fecha_solicitud: '',

  fecha_reserva: '',

  estado_servicio: 'Pendiente',

  id_cliente: '',

  id_taxista: '',
};

const ServiciosNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/servicios/servicios-list');
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
              <FormField label='id_servicio'>
                <Field name='id_servicio' placeholder='id_servicio' />
              </FormField>

              <FormField label='tipo_servicio' labelFor='tipo_servicio'>
                <Field
                  name='tipo_servicio'
                  id='tipo_servicio'
                  component='select'
                >
                  <option value='Recogida Hotel'>Recogida Hotel</option>

                  <option value='Reserva con pago'>Reserva con pago</option>
                </Field>
              </FormField>

              <FormField label='fecha_solicitud'>
                <Field
                  type='datetime-local'
                  name='fecha_solicitud'
                  placeholder='fecha_solicitud'
                />
              </FormField>

              <FormField label='fecha_reserva'>
                <Field
                  type='datetime-local'
                  name='fecha_reserva'
                  placeholder='fecha_reserva'
                />
              </FormField>

              <FormField label='estado_servicio' labelFor='estado_servicio'>
                <Field
                  name='estado_servicio'
                  id='estado_servicio'
                  component='select'
                >
                  <option value='Pendiente'>Pendiente</option>

                  <option value='Confirmado'>Confirmado</option>

                  <option value='Cancelado'>Cancelado</option>
                </Field>
              </FormField>

              <FormField label='id_cliente'>
                <Field name='id_cliente' placeholder='id_cliente' />
              </FormField>

              <FormField label='id_taxista'>
                <Field name='id_taxista' placeholder='id_taxista' />
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
                  onClick={() => router.push('/servicios/servicios-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

ServiciosNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default ServiciosNew;
