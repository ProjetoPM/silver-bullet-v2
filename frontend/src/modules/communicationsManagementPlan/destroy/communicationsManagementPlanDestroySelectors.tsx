import { createSelector } from 'reselect';

const selectRaw = (state) => state.communicationsManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const communicationsManagementPlanDestroySelectors = {
  selectLoading,
};

export default communicationsManagementPlanDestroySelectors;
