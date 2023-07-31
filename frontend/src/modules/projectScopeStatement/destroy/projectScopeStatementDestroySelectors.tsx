import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectScopeStatement.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectScopeStatementDestroySelectors = {
  selectLoading,
};

export default projectScopeStatementDestroySelectors;
