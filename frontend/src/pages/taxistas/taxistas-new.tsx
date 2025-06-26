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

import { create } from '../../stores/taxistas/taxistasSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_taxista: '',

  id_user: '',

  licencia_conducir: '',

  apellidos: '',

  dni: '',

  tipo: 'Prop.',

  direccion: '',

  telefono: '',

  fecha_registro: '',

  estado: 'Activo',
};

const TaxistasNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/taxistas/taxistas-list');
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
              <FormField label='id_taxista'>
                <Field name='id_taxista' placeholder='id_taxista' />
              </FormField>

              <FormField label='id_user'>
                <Field name='id_user' placeholder='id_user' />
              </FormField>

              <FormField label='licencia_conducir'>
                <Field
                  name='licencia_conducir'
                  placeholder='licencia_conducir'
                />
              </FormField>

              <FormField label='apellidos'>
                <Field name='apellidos' placeholder='apellidos' />
              </FormField>

              <FormField label='dni'>
                <Field name='dni' placeholder='dni' />
              </FormField>

              <FormField label='tipo' labelFor='tipo'>
                <Field name='tipo' id='tipo' component='select'>
                  <option value='Prop.'>Prop.</option>

                  <option value='Cond.'>Cond.</option>
                </Field>
              </FormField>

              <FormField label='direccion'>
                <Field name='direccion' placeholder='direccion' />
              </FormField>

              <FormField label='telefono'>
                <Field name='telefono' placeholder='telefono' />
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
                  onClick={() => router.push('/taxistas/taxistas-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

TaxistasNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default TaxistasNew;
