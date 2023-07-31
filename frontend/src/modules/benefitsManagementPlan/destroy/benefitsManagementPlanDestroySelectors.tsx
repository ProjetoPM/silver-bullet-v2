import { createSelector } from 'reselect';

const selectRaw = (state) => state.benefitsManagementPlan.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const benefitsManagementPlanDestroySelectors = {
  selectLoading,
};

export default benefitsManagementPlanDestroySelectors;
