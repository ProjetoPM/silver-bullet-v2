import { createSelector } from 'reselect';

const selectRaw = (state) => state.scheduleManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const scheduleManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default scheduleManagementPlanViewSelectors;
