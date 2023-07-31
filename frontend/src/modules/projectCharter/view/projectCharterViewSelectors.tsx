import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectCharter.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectCharterViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default projectCharterViewSelectors;
