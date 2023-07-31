import { createSelector } from 'reselect';

const selectRaw = (state) => state.resourceManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceManagementPlanDestroySelectors = {
  selectLoading,
};

export default resourceManagementPlanDestroySelectors;
