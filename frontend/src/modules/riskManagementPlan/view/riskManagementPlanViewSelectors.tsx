import { createSelector } from 'reselect';

const selectRaw = (state) => state.riskManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const riskManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default riskManagementPlanViewSelectors;
