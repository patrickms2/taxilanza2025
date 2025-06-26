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

import { update, fetch } from '../../stores/mensajes/mensajesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditMensajesPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_mensaje: '',

    id_departamento: '',

    id_taxista: '',

    contenido: '',

    fecha_envio: new Date(),
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { mensajes } = useAppSelector((state) => state.mensajes);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof mensajes === 'object') {
      setInitialValues(mensajes);
    }
  }, [mensajes]);

  useEffect(() => {
    if (typeof mensajes === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = mensajes[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [mensajes]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/mensajes/mensajes-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit mensajes')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit mensajes'}
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
              <FormField label='id_mensaje'>
                <Field name='id_mensaje' placeholder='id_mensaje' />
              </FormField>

              <FormField label='id_departamento'>
                <Field name='id_departamento' placeholder='id_departamento' />
              </FormField>

              <FormField label='id_taxista'>
                <Field name='id_taxista' placeholder='id_taxista' />
              </FormField>

              <FormField label='contenido'>
                <Field name='contenido' placeholder='contenido' />
              </FormField>

              <FormField label='fecha_envio'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.fecha_envio
                      ? new Date(
                          dayjs(initialValues.fecha_envio).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, fecha_envio: date })
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
                  onClick={() => router.push('/mensajes/mensajes-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditMensajesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditMensajesPage;
