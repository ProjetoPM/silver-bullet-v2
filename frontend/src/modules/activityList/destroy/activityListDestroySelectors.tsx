import { createSelector } from 'reselect';

const selectRaw = (state) => state.activityList.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const activityListDestroySelectors = {
  selectLoading,
};

export default activityListDestroySelectors;
