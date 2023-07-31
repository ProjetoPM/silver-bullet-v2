import { createSelector } from 'reselect';

const selectRaw = (state) => state.procurementManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const procurementManagementPlanDestroySelectors = {
  selectLoading,
};

export default procurementManagementPlanDestroySelectors;
