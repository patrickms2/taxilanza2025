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

import { create } from '../../stores/carpetas/carpetasSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  id_doc: '',

  id_user: '',

  id_dep: '',

  privada: '',

  nombre: '',

  color: '',

  favorita: '',

  estado: 'Activo',
};

const CarpetasNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/carpetas/carpetas-list');
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
              <FormField label='id_doc'>
                <Field name='id_doc' placeholder='id_doc' />
              </FormField>

              <FormField label='id_user'>
                <Field name='id_user' placeholder='id_user' />
              </FormField>

              <FormField label='id_dep'>
                <Field name='id_dep' placeholder='id_dep' />
              </FormField>

              <FormField label='privada'>
                <Field type='number' name='privada' placeholder='privada' />
              </FormField>

              <FormField label='nombre'>
                <Field name='nombre' placeholder='nombre' />
              </FormField>

              <FormField label='color'>
                <Field name='color' placeholder='color' />
              </FormField>

              <FormField label='favorita'>
                <Field type='number' name='favorita' placeholder='favorita' />
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
                  onClick={() => router.push('/carpetas/carpetas-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

CarpetasNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default CarpetasNew;
