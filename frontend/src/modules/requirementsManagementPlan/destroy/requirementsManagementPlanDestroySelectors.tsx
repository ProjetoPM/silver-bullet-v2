import { createSelector } from 'reselect';

const selectRaw = (state) => state.requirementsManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const requirementsManagementPlanDestroySelectors = {
  selectLoading,
};

export default requirementsManagementPlanDestroySelectors;
