import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectManagementPlanDestroySelectors = {
  selectLoading,
};

export default projectManagementPlanDestroySelectors;
