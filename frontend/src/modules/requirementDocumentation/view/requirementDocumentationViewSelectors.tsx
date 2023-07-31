import { createSelector } from 'reselect';

const selectRaw = (state) => state.requirementDocumentation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const requirementDocumentationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default requirementDocumentationViewSelectors;
