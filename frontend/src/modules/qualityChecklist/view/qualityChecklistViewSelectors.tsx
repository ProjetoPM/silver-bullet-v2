import { createSelector } from 'reselect';

const selectRaw = (state) => state.qualityChecklist.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const qualityChecklistViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default qualityChecklistViewSelectors;
