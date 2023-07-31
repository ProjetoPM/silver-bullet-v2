import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectClosure.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectClosureDestroySelectors = {
  selectLoading,
};

export default projectClosureDestroySelectors;
