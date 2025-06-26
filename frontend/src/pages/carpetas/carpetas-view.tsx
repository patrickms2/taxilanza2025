import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/carpetas/carpetasSlice';
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

const CarpetasView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { carpetas } = useAppSelector((state) => state.carpetas);

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
        <title>{getPageTitle('View carpetas')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View carpetas')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_doc</p>
            <p>{carpetas?.id_doc}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_user</p>
            <p>{carpetas?.id_user}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>id_dep</p>
            <p>{carpetas?.id_dep}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>privada</p>
            <p>{carpetas?.privada || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>nombre</p>
            <p>{carpetas?.nombre}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>color</p>
            <p>{carpetas?.color}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>favorita</p>
            <p>{carpetas?.favorita || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>estado</p>
            <p>{carpetas?.estado ?? 'No data'}</p>
          </div>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/carpetas/carpetas-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

CarpetasView.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default CarpetasView;
