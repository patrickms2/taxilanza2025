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

import { update, fetch } from '../../stores/citas/citasSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditCitas = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_cita: '',

    fecha: new Date(),

    hora: '',

    id_departamento: '',

    lugar: '',

    usuarios: '',

    taxistas: '',

    estado_cita: '',

    id_creador: '',

    f_creacion: new Date(),
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { citas } = useAppSelector((state) => state.citas);

  const { citasId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: citasId }));
  }, [citasId]);

  useEffect(() => {
    if (typeof citas === 'object') {
      setInitialValues(citas);
    }
  }, [citas]);

  useEffect(() => {
    if (typeof citas === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = citas[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [citas]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: citasId, data }));
    await router.push('/citas/citas-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit citas')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit citas'}
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
              <FormField label='id_cita'>
                <Field name='id_cita' placeholder='id_cita' />
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
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.f_creacion
                      ? new Date(
                          dayjs(initialValues.f_creacion).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, f_creacion: date })
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

EditCitas.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditCitas;
