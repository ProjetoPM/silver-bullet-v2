import { createSelector } from 'reselect';

const selectRaw = (state) => state.qualityManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const qualityManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default qualityManagementPlanViewSelectors;
