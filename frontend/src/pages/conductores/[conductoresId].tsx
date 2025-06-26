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

import { update, fetch } from '../../stores/conductores/conductoresSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditConductores = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_conductor: '',

    id_taxista: '',

    nombre: '',

    apellidos: '',

    tel: '',

    f_entrada: new Date(),

    f_salida: new Date(),

    dni: '',

    fecha_nacimiento: new Date(),

    licencia_conducir: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { conductores } = useAppSelector((state) => state.conductores);

  const { conductoresId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: conductoresId }));
  }, [conductoresId]);

  useEffect(() => {
    if (typeof conductores === 'object') {
      setInitialValues(conductores);
    }
  }, [conductores]);

  useEffect(() => {
    if (typeof conductores === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = conductores[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [conductores]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: conductoresId, data }));
    await router.push('/conductores/conductores-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit conductores')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit conductores'}
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
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.f_entrada
                      ? new Date(
                          dayjs(initialValues.f_entrada).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, f_entrada: date })
                  }
                />
              </FormField>

              <FormField label='f_salida'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.f_salida
                      ? new Date(
                          dayjs(initialValues.f_salida).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, f_salida: date })
                  }
                />
              </FormField>

              <FormField label='dni'>
                <Field name='dni' placeholder='dni' />
              </FormField>

              <FormField label='fecha_nacimiento'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.fecha_nacimiento
                      ? new Date(
                          dayjs(initialValues.fecha_nacimiento).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({
                      ...initialValues,
                      fecha_nacimiento: date,
                    })
                  }
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

EditConductores.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditConductores;
