import { createSelector } from 'reselect';

const selectRaw = (state) => state.costManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const costManagementPlanDestroySelectors = {
  selectLoading,
};

export default costManagementPlanDestroySelectors;
