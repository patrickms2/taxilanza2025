import React from 'react';
import CardBox from '../CardBox';
import ImageField from '../ImageField';
import dataFormatter from '../../helpers/dataFormatter';
import { saveFile } from '../../helpers/fileSaver';
import ListActionsPopover from '../ListActionsPopover';
import { useAppSelector } from '../../stores/hooks';
import { Pagination } from '../Pagination';
import LoadingSpinner from '../LoadingSpinner';

type Props = {
  controlfichaje: any[];
  loading: boolean;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  currentPage: number;
  numPages: number;
  onPageChange: (page: number) => void;
};

const ListControlfichaje = ({
  controlfichaje,
  loading,
  onEdit,
  onView,
  onDelete,
  currentPage,
  numPages,
  onPageChange,
}: Props) => {
  const corners = useAppSelector((state) => state.style.corners);
  const bgColor = useAppSelector((state) => state.style.cardsColor);

  return (
    <>
      <div className='relative overflow-x-auto p-4 space-y-4'>
        {loading && <LoadingSpinner />}
        {!loading &&
          controlfichaje.map((item) => (
            <CardBox
              hasTable
              isList
              key={item.id}
              className={'rounded shadow-none'}
            >
              <div
                className={`flex rounded  dark:bg-dark-900  border  border-stone-300  items-center overflow-hidden`}
              >
                <div
                  className={
                    'flex-1 px-4 py-6 h-24 flex items-stretch divide-x-2  divide-stone-300   items-center overflow-hidden`}> dark:divide-dark-700 overflow-x-auto'
                  }
                  onClick={() => onView(item.id)}
                >
                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>id_asistencia</p>
                    <p className={'line-clamp-2'}>{item.id_asistencia}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>id_usuario</p>
                    <p className={'line-clamp-2'}>{item.id_usuario}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>id_taxi</p>
                    <p className={'line-clamp-2'}>{item.id_taxi}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>fecha</p>
                    <p className={'line-clamp-2'}>
                      {dataFormatter.dateFormatter(item.fecha)}
                    </p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>hora_inicio</p>
                    <p className={'line-clamp-2'}>{item.hora_inicio}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>hora_fin</p>
                    <p className={'line-clamp-2'}>{item.hora_fin}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>
                      ubicacion_inicio
                    </p>
                    <p className={'line-clamp-2'}>{item.ubicacion_inicio}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>ubicacion_fin</p>
                    <p className={'line-clamp-2'}>{item.ubicacion_fin}</p>
                  </div>

                  <div className={'flex-1 px-3'}>
                    <p className={'text-xs   text-gray-500 '}>
                      horas_trabajadas
                    </p>
                    <p className={'line-clamp-2'}>{item.horas_trabajadas}</p>
                  </div>
                </div>
                <ListActionsPopover
                  onDelete={onDelete}
                  onView={onView}
                  onEdit={onEdit}
                  itemId={item.id}
                  pathEdit={`/controlfichaje/controlfichaje-edit/?id=${item.id}`}
                  pathView={`/controlfichaje/controlfichaje-view/?id=${item.id}`}
                  hasUpdatePermission={true}
                />
              </div>
            </CardBox>
          ))}
        {!loading && controlfichaje.length === 0 && (
          <div className='col-span-full flex items-center justify-center h-40'>
            <p className=''>No data to display</p>
          </div>
        )}
      </div>
      <div className={'flex items-center justify-center my-6'}>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          setCurrentPage={onPageChange}
        />
      </div>
    </>
  );
};

export default ListControlfichaje;
