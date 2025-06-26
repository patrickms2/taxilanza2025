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
} from '../../stores/localizaciontaxis/localizaciontaxisSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditLocalizaciontaxis = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_localizacion: '',

    id_taxi: '',

    latitud: '',

    longitud: '',

    ultima_actualizacion: new Date(),
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { localizaciontaxis } = useAppSelector(
    (state) => state.localizaciontaxis,
  );

  const { localizaciontaxisId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: localizaciontaxisId }));
  }, [localizaciontaxisId]);

  useEffect(() => {
    if (typeof localizaciontaxis === 'object') {
      setInitialValues(localizaciontaxis);
    }
  }, [localizaciontaxis]);

  useEffect(() => {
    if (typeof localizaciontaxis === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = localizaciontaxis[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [localizaciontaxis]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: localizaciontaxisId, data }));
    await router.push('/localizaciontaxis/localizaciontaxis-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit localizaciontaxis')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit localizaciontaxis'}
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
              <FormField label='id_localizacion'>
                <Field name='id_localizacion' placeholder='id_localizacion' />
              </FormField>

              <FormField label='id_taxi'>
                <Field name='id_taxi' placeholder='id_taxi' />
              </FormField>

              <FormField label='latitud'>
                <Field name='latitud' placeholder='latitud' />
              </FormField>

              <FormField label='longitud'>
                <Field name='longitud' placeholder='longitud' />
              </FormField>

              <FormField label='ultima_actualizacion'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.ultima_actualizacion
                      ? new Date(
                          dayjs(initialValues.ultima_actualizacion).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({
                      ...initialValues,
                      ultima_actualizacion: date,
                    })
                  }
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
                    router.push('/localizaciontaxis/localizaciontaxis-list')
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

EditLocalizaciontaxis.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditLocalizaciontaxis;
