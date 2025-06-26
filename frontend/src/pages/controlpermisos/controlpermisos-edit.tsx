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

import {
  update,
  fetch,
} from '../../stores/controlpermisos/controlpermisosSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditControlpermisosPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_permiso: '',

    id_user: '',

    fecha_solicitud: new Date(),

    fecha_dia_libre: new Date(),

    estado: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { controlpermisos } = useAppSelector((state) => state.controlpermisos);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof controlpermisos === 'object') {
      setInitialValues(controlpermisos);
    }
  }, [controlpermisos]);

  useEffect(() => {
    if (typeof controlpermisos === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = controlpermisos[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [controlpermisos]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/controlpermisos/controlpermisos-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit controlpermisos')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit controlpermisos'}
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
              <FormField label='id_permiso'>
                <Field name='id_permiso' placeholder='id_permiso' />
              </FormField>

              <FormField label='id_user'>
                <Field name='id_user' placeholder='id_user' />
              </FormField>

              <FormField label='fecha_solicitud'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.fecha_solicitud
                      ? new Date(
                          dayjs(initialValues.fecha_solicitud).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({
                      ...initialValues,
                      fecha_solicitud: date,
                    })
                  }
                />
              </FormField>

              <FormField label='fecha_dia_libre'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.fecha_dia_libre
                      ? new Date(
                          dayjs(initialValues.fecha_dia_libre).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({
                      ...initialValues,
                      fecha_dia_libre: date,
                    })
                  }
                />
              </FormField>

              <FormField label='estado' labelFor='estado'>
                <Field name='estado' id='estado' component='select'>
                  <option value='Pendiente'>Pendiente</option>

                  <option value='Aprobado'>Aprobado</option>

                  <option value='Rechazado'>Rechazado</option>
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
                  onClick={() =>
                    router.push('/controlpermisos/controlpermisos-list')
                  }
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditControlpermisosPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditControlpermisosPage;
