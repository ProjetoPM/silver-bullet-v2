import { createSelector } from 'reselect';

const selectRaw = (state) => state.scheduleManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const scheduleManagementPlanDestroySelectors = {
  selectLoading,
};

export default scheduleManagementPlanDestroySelectors;
