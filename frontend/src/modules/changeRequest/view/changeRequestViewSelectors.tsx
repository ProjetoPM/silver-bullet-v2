import { createSelector } from 'reselect';

const selectRaw = (state) => state.changeRequest.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const changeRequestViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default changeRequestViewSelectors;
