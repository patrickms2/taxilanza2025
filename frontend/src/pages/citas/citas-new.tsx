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

import { create } from '../../stores/citas/citasSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_cita: '',

  fecha: '',
  dateFecha: '',

  hora: '',

  id_departamento: '',

  lugar: '',

  usuarios: '',

  taxistas: '',

  estado_cita: 'Pendiente',

  id_creador: '',

  f_creacion: '',
};

const CitasNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/citas/citas-list');
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
              <FormField label='id_cita'>
                <Field name='id_cita' placeholder='id_cita' />
              </FormField>

              <FormField label='fecha'>
                <Field type='date' name='fecha' placeholder='fecha' />
              </FormField>

              <FormField label='hora'>
                <Field name='hora' placeholder='hora' />
              </FormField>

              <FormField label='id_departamento'>
                <Field name='id_departamento' placeholder='id_departamento' />
              </FormField>

              <FormField label='lugar'>
                <Field type='number' name='lugar' placeholder='lugar' />
              </FormField>

              <FormField label='usuarios'>
                <Field name='usuarios' placeholder='usuarios' />
              </FormField>

              <FormField label='taxistas'>
                <Field name='taxistas' placeholder='taxistas' />
              </FormField>

              <FormField label='estado_cita' labelFor='estado_cita'>
                <Field name='estado_cita' id='estado_cita' component='select'>
                  <option value='Pendiente'>Pendiente</option>

                  <option value='Confirmada'>Confirmada</option>

                  <option value='Cancelada'>Cancelada</option>
                </Field>
              </FormField>

              <FormField label='id_creador'>
                <Field name='id_creador' placeholder='id_creador' />
              </FormField>

              <FormField label='f_creacion'>
                <Field
                  type='datetime-local'
                  name='f_creacion'
                  placeholder='f_creacion'
                />
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
                  onClick={() => router.push('/citas/citas-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

CitasNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default CitasNew;
