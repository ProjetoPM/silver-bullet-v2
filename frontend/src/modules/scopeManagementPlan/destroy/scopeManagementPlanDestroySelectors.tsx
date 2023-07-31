import { createSelector } from 'reselect';

const selectRaw = (state) => state.scopeManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const scopeManagementPlanDestroySelectors = {
  selectLoading,
};

export default scopeManagementPlanDestroySelectors;
