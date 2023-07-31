import { createSelector } from 'reselect';

const selectRaw = (state) => state.resourceManagementPlan.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceManagementPlanViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default resourceManagementPlanViewSelectors;
