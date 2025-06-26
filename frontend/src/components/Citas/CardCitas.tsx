import React from 'react';
import ImageField from '../ImageField';
import ListActionsPopover from '../ListActionsPopover';
import { useAppSelector } from '../../stores/hooks';
import dataFormatter from '../../helpers/dataFormatter';
import { Pagination } from '../Pagination';
import { saveFile } from '../../helpers/fileSaver';
import LoadingSpinner from '../LoadingSpinner';

type Props = {
  citas: any[];
  loading: boolean;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  currentPage: number;
  numPages: number;
  onPageChange: (page: number) => void;
};

const CardUsers = ({
  citas,
  loading,
  onEdit,
  onView,
  onDelete,
  currentPage,
  numPages,
  onPageChange,
}: Props) => {
  const asideScrollbarsStyle = useAppSelector(
    (state) => state.style.asideScrollbarsStyle,
  );
  const bgColor = useAppSelector((state) => state.style.cardsColor);
  const darkMode = useAppSelector((state) => state.style.darkMode);
  const corners = useAppSelector((state) => state.style.corners);
  const focusRing = useAppSelector((state) => state.style.focusRingColor);

  return (
    <div className={'p-4'}>
      {loading && <LoadingSpinner />}
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8'
      >
        {!loading &&
          citas.map((item, index) => (
            <li
              key={item.id}
              className={`overflow-hidden ${
                corners !== 'rounded-full' ? corners : 'rounded-3xl'
              } border  ${focusRing} border-gray-200 dark:border-dark-700 ${
                darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle
              }`}
            >
              <div
                className={`flex items-center ${bgColor} p-6  gap-x-4 border-b border-gray-900/5 bg-gray-50 dark:bg-dark-800 relative`}
              >
                <button
                  className='text-lg font-bold leading-6 line-clamp-1'
                  onClick={() => onView(item.id)}
                >
                  {item.id}
                </button>

                <div className='ml-auto '>
                  <ListActionsPopover
                    onDelete={onDelete}
                    onView={onView}
                    onEdit={onEdit}
                    itemId={item.id}
                    pathEdit={`/citas/citas-edit/?id=${item.id}`}
                    pathView={`/citas/citas-view/?id=${item.id}`}
                    hasUpdatePermission={true}
                  />
                </div>
              </div>
              <dl className='divide-y  divide-stone-300   dark:divide-dark-700 px-6 py-4 text-sm leading-6 h-64 overflow-y-auto'>
                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    id_cita
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.id_cita}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>fecha</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {dataFormatter.dateFormatter(item.fecha)}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>hora</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>{item.hora}</div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    id_departamento
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.id_departamento}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>lugar</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>{item.lugar}</div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    usuarios
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.usuarios}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    taxistas
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.taxistas}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    estado_cita
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.estado_cita}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    id_creador
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {item.id_creador}
                    </div>
                  </dd>
                </div>

                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='  text-gray-500  dark:text-dark-600'>
                    f_creacion
                  </dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium line-clamp-4'>
                      {dataFormatter.dateTimeFormatter(item.f_creacion)}
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        {!loading && citas.length === 0 && (
          <div className='col-span-full flex items-center justify-center h-40'>
            <p className=''>No data to display</p>
          </div>
        )}
      </ul>
      <div className={'flex items-center justify-center my-6'}>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          setCurrentPage={onPageChange}
        />
      </div>
    </div>
  );
};

export default CardUsers;
