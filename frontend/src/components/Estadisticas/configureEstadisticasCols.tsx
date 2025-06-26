import React from 'react';
import BaseIcon from '../BaseIcon';
import { mdiEye, mdiTrashCan, mdiPencilOutline } from '@mdi/js';
import axios from 'axios';
import {
  GridActionsCellItem,
  GridRowParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import ImageField from '../ImageField';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import DataGridMultiSelect from '../DataGridMultiSelect';
import ListActionsPopover from '../ListActionsPopover';

type Params = (id: string) => void;

export const loadColumns = async (
  onDelete: Params,
  onView: Params,
  onEdit: Params,
  entityName: string,
) => {
  async function callOptionsApi(entityName: string) {
    try {
      const data = await axios(`/${entityName}/autocomplete?limit=100`);
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  return [
    {
      field: 'id_estadistica',
      headerName: 'id_estadistica',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: true,
    },

    {
      field: 'tipo_estadistica',
      headerName: 'tipo_estadistica',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: true,
    },

    {
      field: 'fecha',
      headerName: 'fecha',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: true,

      type: 'dateTime',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.fecha),
    },

    {
      field: 'id_usuario',
      headerName: 'id_usuario',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: true,
    },

    {
      field: 'id_departamento',
      headerName: 'id_departamento',
      flex: 1,
      minWidth: 120,
      filterable: false,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',

      editable: true,
    },

    {
      field: 'actions',
      type: 'actions',
      minWidth: 30,
      headerClassName: 'datagrid--header',
      cellClassName: 'datagrid--cell',
      getActions: (params: GridRowParams) => {
        return [
          <ListActionsPopover
            onDelete={onDelete}
            onView={onView}
            onEdit={onEdit}
            itemId={params?.row?.id}
            pathEdit={`/estadisticas/estadisticas-edit/?id=${params?.row?.id}`}
            pathView={`/estadisticas/estadisticas-view/?id=${params?.row?.id}`}
            key={1}
            hasUpdatePermission={true}
          />,
        ];
      },
    },
  ];
};
