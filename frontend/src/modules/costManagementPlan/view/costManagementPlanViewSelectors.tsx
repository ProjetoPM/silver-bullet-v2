import { createSelector } from 'reselect';

const selectRaw = (state) => state.costManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const costManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default costManagementPlanViewSelectors;
