import { createSelector } from 'reselect';

const selectRaw = (state) => state.activityDurationEstimates.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const activityDurationEstimatesDestroySelectors = {
  selectLoading,
};

export default activityDurationEstimatesDestroySelectors;
