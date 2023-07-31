import { createSelector } from 'reselect';

const selectRaw = (state) => state.closedProcurementDocumentation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const closedProcurementDocumentationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default closedProcurementDocumentationViewSelectors;
