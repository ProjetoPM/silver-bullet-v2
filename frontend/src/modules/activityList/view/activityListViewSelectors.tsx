import { createSelector } from 'reselect';

const selectRaw = (state) => state.activityList.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const activityListViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default activityListViewSelectors;
