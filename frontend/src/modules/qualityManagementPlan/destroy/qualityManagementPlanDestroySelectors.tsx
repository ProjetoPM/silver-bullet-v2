import { createSelector } from 'reselect';

const selectRaw = (state) => state.qualityManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const qualityManagementPlanDestroySelectors = {
  selectLoading,
};

export default qualityManagementPlanDestroySelectors;
