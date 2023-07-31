import { createSelector } from 'reselect';

const selectRaw = (state) => state.resource.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default resourceViewSelectors;
