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

import { update, fetch } from '../../stores/taxistas/taxistasSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditTaxistas = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_taxista: '',

    id_user: '',

    licencia_conducir: '',

    apellidos: '',

    dni: '',

    tipo: '',

    direccion: '',

    telefono: '',

    fecha_registro: new Date(),

    estado: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { taxistas } = useAppSelector((state) => state.taxistas);

  const { taxistasId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: taxistasId }));
  }, [taxistasId]);

  useEffect(() => {
    if (typeof taxistas === 'object') {
      setInitialValues(taxistas);
    }
  }, [taxistas]);

  useEffect(() => {
    if (typeof taxistas === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = taxistas[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [taxistas]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: taxistasId, data }));
    await router.push('/taxistas/taxistas-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit taxistas')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit taxistas'}
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
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.fecha_registro
                      ? new Date(
                          dayjs(initialValues.fecha_registro).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, fecha_registro: date })
                  }
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

EditTaxistas.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditTaxistas;
