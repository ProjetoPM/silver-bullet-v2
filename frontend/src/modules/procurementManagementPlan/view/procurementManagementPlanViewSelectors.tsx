import { createSelector } from 'reselect';

const selectRaw = (state) => state.procurementManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const procurementManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default procurementManagementPlanViewSelectors;
