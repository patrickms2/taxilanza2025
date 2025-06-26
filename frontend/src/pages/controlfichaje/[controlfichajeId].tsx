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

import { update, fetch } from '../../stores/controlfichaje/controlfichajeSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditControlfichaje = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_asistencia: '',

    id_usuario: '',

    id_taxi: '',

    fecha: new Date(),

    hora_inicio: '',

    hora_fin: '',

    ubicacion_inicio: '',

    ubicacion_fin: '',

    horas_trabajadas: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { controlfichaje } = useAppSelector((state) => state.controlfichaje);

  const { controlfichajeId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: controlfichajeId }));
  }, [controlfichajeId]);

  useEffect(() => {
    if (typeof controlfichaje === 'object') {
      setInitialValues(controlfichaje);
    }
  }, [controlfichaje]);

  useEffect(() => {
    if (typeof controlfichaje === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = controlfichaje[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [controlfichaje]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: controlfichajeId, data }));
    await router.push('/controlfichaje/controlfichaje-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit controlfichaje')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit controlfichaje'}
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
              <FormField label='id_asistencia'>
                <Field name='id_asistencia' placeholder='id_asistencia' />
              </FormField>

              <FormField label='id_usuario'>
                <Field name='id_usuario' placeholder='id_usuario' />
              </FormField>

              <FormField label='id_taxi'>
                <Field name='id_taxi' placeholder='id_taxi' />
              </FormField>

              <FormField label='fecha'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
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

              <FormField label='hora_inicio'>
                <Field name='hora_inicio' placeholder='hora_inicio' />
              </FormField>

              <FormField label='hora_fin'>
                <Field name='hora_fin' placeholder='hora_fin' />
              </FormField>

              <FormField label='ubicacion_inicio'>
                <Field
                  type='number'
                  name='ubicacion_inicio'
                  placeholder='ubicacion_inicio'
                />
              </FormField>

              <FormField label='ubicacion_fin'>
                <Field
                  type='number'
                  name='ubicacion_fin'
                  placeholder='ubicacion_fin'
                />
              </FormField>

              <FormField label='horas_trabajadas'>
                <Field
                  type='number'
                  name='horas_trabajadas'
                  placeholder='horas_trabajadas'
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
                  onClick={() =>
                    router.push('/controlfichaje/controlfichaje-list')
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

EditControlfichaje.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditControlfichaje;
