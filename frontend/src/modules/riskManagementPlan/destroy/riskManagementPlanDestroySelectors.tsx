import { createSelector } from 'reselect';

const selectRaw = (state) => state.riskManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const riskManagementPlanDestroySelectors = {
  selectLoading,
};

export default riskManagementPlanDestroySelectors;
