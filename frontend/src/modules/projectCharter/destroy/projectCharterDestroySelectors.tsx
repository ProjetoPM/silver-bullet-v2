import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectCharter.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectCharterDestroySelectors = {
  selectLoading,
};

export default projectCharterDestroySelectors;
