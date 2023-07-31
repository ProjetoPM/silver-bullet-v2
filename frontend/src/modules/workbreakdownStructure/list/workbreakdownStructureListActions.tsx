import WorkbreakdownStructureService from 'src/modules/workbreakdownStructure/workbreakdownStructureService';
import selectors from 'src/modules/workbreakdownStructure/list/workbreakdownStructureListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/workbreakdownStructure/list/workbreakdownStructureListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'WORKBREAKDOWNSTRUCTURE_LIST';

const workbreakdownStructureListActions = {
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
      type: workbreakdownStructureListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: workbreakdownStructureListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: workbreakdownStructureListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: workbreakdownStructureListActions.RESETED,
    });

    dispatch(workbreakdownStructureListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: workbreakdownStructureListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await WorkbreakdownStructureService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.workbreakdownStructure.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: workbreakdownStructureListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: workbreakdownStructureListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: workbreakdownStructureListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(workbreakdownStructureListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: workbreakdownStructureListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(workbreakdownStructureListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(workbreakdownStructureListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: workbreakdownStructureListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await WorkbreakdownStructureService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: workbreakdownStructureListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: workbreakdownStructureListActions.FETCH_ERROR,
      });
    }
  },
};

export default workbreakdownStructureListActions;
