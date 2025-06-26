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

import { create } from '../../stores/pagos/pagosSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_pago: '',

  id_servicio: '',

  monto: '',

  estado_pago: 'Pagado',

  fecha_pago: '',

  metodo_pago: 'Tarjeta',
};

const PagosNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/pagos/pagos-list');
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
              <FormField label='id_pago'>
                <Field name='id_pago' placeholder='id_pago' />
              </FormField>

              <FormField label='id_servicio'>
                <Field name='id_servicio' placeholder='id_servicio' />
              </FormField>

              <FormField label='monto'>
                <Field type='number' name='monto' placeholder='monto' />
              </FormField>

              <FormField label='estado_pago' labelFor='estado_pago'>
                <Field name='estado_pago' id='estado_pago' component='select'>
                  <option value='Pagado'>Pagado</option>

                  <option value='Pendiente'>Pendiente</option>

                  <option value='Depósito'>Depósito</option>
                </Field>
              </FormField>

              <FormField label='fecha_pago'>
                <Field
                  type='datetime-local'
                  name='fecha_pago'
                  placeholder='fecha_pago'
                />
              </FormField>

              <FormField label='metodo_pago' labelFor='metodo_pago'>
                <Field name='metodo_pago' id='metodo_pago' component='select'>
                  <option value='Tarjeta'>Tarjeta</option>

                  <option value='Transferencia'>Transferencia</option>

                  <option value='Efectivo'>Efectivo</option>
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
                  onClick={() => router.push('/pagos/pagos-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

PagosNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default PagosNew;
