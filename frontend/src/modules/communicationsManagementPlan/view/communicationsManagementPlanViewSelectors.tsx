import { createSelector } from 'reselect';

const selectRaw = (state) => state.communicationsManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const communicationsManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default communicationsManagementPlanViewSelectors;
