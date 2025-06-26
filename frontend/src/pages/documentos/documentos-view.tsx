import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/documentos/documentosSlice';
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

const DocumentosView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { documentos } = useAppSelector((state) => state.documentos);

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
        <title>{getPageTitle('View documentos')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View documentos')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_documento</p>
            <p>{documentos?.id_documento}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>user_id</p>
            <p>{documentos?.user_id}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>category_id</p>
            <p>{documentos?.category_id}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>nif</p>
            <p>{documentos?.nif}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>year</p>
            <p>{documentos?.year || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>mes</p>
            <p>{documentos?.mes || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>texto</p>
            <p>{documentos?.texto}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>file_name</p>
            <p>{documentos?.file_name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>file_path</p>
            <p>{documentos?.file_path}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>estado</p>
            <p>{documentos?.estado ?? 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/documentos/documentos-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

DocumentosView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default DocumentosView;
