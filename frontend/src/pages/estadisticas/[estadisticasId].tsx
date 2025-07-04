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

import { update, fetch } from '../../stores/estadisticas/estadisticasSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditEstadisticas = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_estadistica: '',

    tipo_estadistica: '',

    fecha: new Date(),

    id_usuario: '',

    id_departamento: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { estadisticas } = useAppSelector((state) => state.estadisticas);

  const { estadisticasId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: estadisticasId }));
  }, [estadisticasId]);

  useEffect(() => {
    if (typeof estadisticas === 'object') {
      setInitialValues(estadisticas);
    }
  }, [estadisticas]);

  useEffect(() => {
    if (typeof estadisticas === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = estadisticas[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [estadisticas]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: estadisticasId, data }));
    await router.push('/estadisticas/estadisticas-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit estadisticas')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit estadisticas'}
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
              <FormField label='id_estadistica'>
                <Field name='id_estadistica' placeholder='id_estadistica' />
              </FormField>

              <FormField label='tipo_estadistica' labelFor='tipo_estadistica'>
                <Field
                  name='tipo_estadistica'
                  id='tipo_estadistica'
                  component='select'
                >
                  <option value='Servicios'>Servicios</option>

                  <option value='Documentos'>Documentos</option>

                  <option value='Otros'>Otros</option>
                </Field>
              </FormField>

              <FormField label='fecha'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.fecha
                      ? new Date(
                          dayjs(initialValues.fecha).format('YYYY-MM-DD hh:mm'),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, fecha: date })
                  }
                />
              </FormField>

              <FormField label='id_usuario'>
                <Field name='id_usuario' placeholder='id_usuario' />
              </FormField>

              <FormField label='id_departamento'>
                <Field name='id_departamento' placeholder='id_departamento' />
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
                  onClick={() => router.push('/estadisticas/estadisticas-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditEstadisticas.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditEstadisticas;
