import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/tipos_doc/tipos_docSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const Tipos_docView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { tipos_doc } = useAppSelector((state) => state.tipos_doc);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View tipos_doc')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View tipos_doc')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>nombre</p>
            <p>{tipos_doc?.nombre}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>category_id</p>
            <p>{tipos_doc?.category_id}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>color</p>
            <p>{tipos_doc?.color}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>patron</p>
            <p>{tipos_doc?.patron}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>estado</p>
            <p>{tipos_doc?.estado ?? 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/tipos_doc/tipos_doc-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

Tipos_docView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Tipos_docView;
