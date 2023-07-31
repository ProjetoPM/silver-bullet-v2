import ClosedProcurementDocumentationService from 'src/modules/closedProcurementDocumentation/closedProcurementDocumentationService';
import selectors from 'src/modules/closedProcurementDocumentation/list/closedProcurementDocumentationListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/closedProcurementDocumentation/list/closedProcurementDocumentationListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'CLOSEDPROCUREMENTDOCUMENTATION_LIST';

const closedProcurementDocumentationListActions = {
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
      type: closedProcurementDocumentationListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: closedProcurementDocumentationListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: closedProcurementDocumentationListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: closedProcurementDocumentationListActions.RESETED,
    });

    dispatch(closedProcurementDocumentationListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: closedProcurementDocumentationListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await ClosedProcurementDocumentationService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.closedProcurementDocumentation.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: closedProcurementDocumentationListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: closedProcurementDocumentationListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: closedProcurementDocumentationListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(closedProcurementDocumentationListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: closedProcurementDocumentationListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(closedProcurementDocumentationListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(closedProcurementDocumentationListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: closedProcurementDocumentationListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await ClosedProcurementDocumentationService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: closedProcurementDocumentationListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: closedProcurementDocumentationListActions.FETCH_ERROR,
      });
    }
  },
};

export default closedProcurementDocumentationListActions;
