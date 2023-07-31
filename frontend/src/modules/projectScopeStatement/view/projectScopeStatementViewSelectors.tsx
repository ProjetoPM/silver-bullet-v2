import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectScopeStatement.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectScopeStatementViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default projectScopeStatementViewSelectors;
