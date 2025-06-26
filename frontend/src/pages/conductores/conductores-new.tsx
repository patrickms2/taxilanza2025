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

import { create } from '../../stores/conductores/conductoresSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_conductor: '',

  id_taxista: '',

  nombre: '',

  apellidos: '',

  tel: '',

  f_entrada: '',
  dateF_entrada: '',

  f_salida: '',
  dateF_salida: '',

  dni: '',

  fecha_nacimiento: '',
  dateFecha_nacimiento: '',

  licencia_conducir: '',
};

const ConductoresNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/conductores/conductores-list');
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
              <FormField label='id_conductor'>
                <Field name='id_conductor' placeholder='id_conductor' />
              </FormField>

              <FormField label='id_taxista'>
                <Field name='id_taxista' placeholder='id_taxista' />
              </FormField>

              <FormField label='nombre'>
                <Field name='nombre' placeholder='nombre' />
              </FormField>

              <FormField label='apellidos'>
                <Field name='apellidos' placeholder='apellidos' />
              </FormField>

              <FormField label='tel'>
                <Field name='tel' placeholder='tel' />
              </FormField>

              <FormField label='f_entrada'>
                <Field type='date' name='f_entrada' placeholder='f_entrada' />
              </FormField>

              <FormField label='f_salida'>
                <Field type='date' name='f_salida' placeholder='f_salida' />
              </FormField>

              <FormField label='dni'>
                <Field name='dni' placeholder='dni' />
              </FormField>

              <FormField label='fecha_nacimiento'>
                <Field
                  type='date'
                  name='fecha_nacimiento'
                  placeholder='fecha_nacimiento'
                />
              </FormField>

              <FormField label='licencia_conducir'>
                <Field
                  name='licencia_conducir'
                  placeholder='licencia_conducir'
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
                  onClick={() => router.push('/conductores/conductores-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

ConductoresNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default ConductoresNew;
