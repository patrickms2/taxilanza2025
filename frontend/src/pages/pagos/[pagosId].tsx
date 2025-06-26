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

import { update, fetch } from '../../stores/pagos/pagosSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditPagos = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    id_pago: '',

    id_servicio: '',

    monto: '',

    estado_pago: '',

    fecha_pago: new Date(),

    metodo_pago: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { pagos } = useAppSelector((state) => state.pagos);

  const { pagosId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: pagosId }));
  }, [pagosId]);

  useEffect(() => {
    if (typeof pagos === 'object') {
      setInitialValues(pagos);
    }
  }, [pagos]);

  useEffect(() => {
    if (typeof pagos === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = pagos[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [pagos]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: pagosId, data }));
    await router.push('/pagos/pagos-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit pagos')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit pagos'}
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
              <FormField label='id_pago'>
                <Field name='id_pago' placeholder='id_pago' />
              </FormField>

              <FormField label='id_servicio'>
                <Field name='id_servicio' placeholder='id_servicio' />
              </FormField>

              <FormField label='monto'>
                <Field type='number' name='monto' placeholder='monto' />
              </FormField>

              <FormField label='estado_pago' labelFor='estado_pago'>
                <Field name='estado_pago' id='estado_pago' component='select'>
                  <option value='Pagado'>Pagado</option>

                  <option value='Pendiente'>Pendiente</option>

                  <option value='Depósito'>Depósito</option>
                </Field>
              </FormField>

              <FormField label='fecha_pago'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.fecha_pago
                      ? new Date(
                          dayjs(initialValues.fecha_pago).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, fecha_pago: date })
                  }
                />
              </FormField>

              <FormField label='metodo_pago' labelFor='metodo_pago'>
                <Field name='metodo_pago' id='metodo_pago' component='select'>
                  <option value='Tarjeta'>Tarjeta</option>

                  <option value='Transferencia'>Transferencia</option>

                  <option value='Efectivo'>Efectivo</option>
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
                  onClick={() => router.push('/pagos/pagos-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditPagos.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default EditPagos;
