import ProcurementStatementWorkRegisterService from 'src/modules/procurementStatementWorkRegister/procurementStatementWorkRegisterService';
import selectors from 'src/modules/procurementStatementWorkRegister/list/procurementStatementWorkRegisterListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/procurementStatementWorkRegister/list/procurementStatementWorkRegisterListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'PROCUREMENTSTATEMENTWORKREGISTER_LIST';

const procurementStatementWorkRegisterListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doClearAllSelected() {
    return {
      type: procurementStatementWorkRegisterListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: procurementStatementWorkRegisterListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: procurementStatementWorkRegisterListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: procurementStatementWorkRegisterListActions.RESETED,
    });

    dispatch(procurementStatementWorkRegisterListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: procurementStatementWorkRegisterListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await ProcurementStatementWorkRegisterService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.procurementStatementWorkRegister.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: procurementStatementWorkRegisterListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementStatementWorkRegisterListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: procurementStatementWorkRegisterListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(procurementStatementWorkRegisterListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: procurementStatementWorkRegisterListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(procurementStatementWorkRegisterListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(procurementStatementWorkRegisterListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: procurementStatementWorkRegisterListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await ProcurementStatementWorkRegisterService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: procurementStatementWorkRegisterListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementStatementWorkRegisterListActions.FETCH_ERROR,
      });
    }
  },
};

export default procurementStatementWorkRegisterListActions;
