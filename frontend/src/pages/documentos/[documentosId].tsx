import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

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
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/documentos/documentosSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditDocumentos = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_documento: '',

    user_id: '',

    category_id: '',

    nif: '',

    year: '',

    mes: '',

    texto: '',

    file_name: '',

    file_path: '',

    estado: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { documentos } = useAppSelector((state) => state.documentos);

  const { documentosId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: documentosId }));
  }, [documentosId]);

  useEffect(() => {
    if (typeof documentos === 'object') {
      setInitialValues(documentos);
    }
  }, [documentos]);

  useEffect(() => {
    if (typeof documentos === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = documentos[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [documentos]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: documentosId, data }));
    await router.push('/documentos/documentos-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit documentos')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit documentos'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='id_documento'>
                <Field name='id_documento' placeholder='id_documento' />
              </FormField>

              <FormField label='user_id'>
                <Field name='user_id' placeholder='user_id' />
              </FormField>

              <FormField label='category_id'>
                <Field name='category_id' placeholder='category_id' />
              </FormField>

              <FormField label='nif'>
                <Field name='nif' placeholder='nif' />
              </FormField>

              <FormField label='year'>
                <Field type='number' name='year' placeholder='year' />
              </FormField>

              <FormField label='mes'>
                <Field type='number' name='mes' placeholder='mes' />
              </FormField>

              <FormField label='texto'>
                <Field name='texto' placeholder='texto' />
              </FormField>

              <FormField label='file_name'>
                <Field name='file_name' placeholder='file_name' />
              </FormField>

              <FormField label='file_path'>
                <Field name='file_path' placeholder='file_path' />
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
                  onClick={() => router.push('/documentos/documentos-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditDocumentos.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditDocumentos;
