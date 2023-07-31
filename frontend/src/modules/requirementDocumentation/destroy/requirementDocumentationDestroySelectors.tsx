import { createSelector } from 'reselect';

const selectRaw = (state) => state.requirementDocumentation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const requirementDocumentationDestroySelectors = {
  selectLoading,
};

export default requirementDocumentationDestroySelectors;
