import { createSelector } from 'reselect';

const selectRaw = (state) => state.costEstimates.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const costEstimatesDestroySelectors = {
  selectLoading,
};

export default costEstimatesDestroySelectors;
