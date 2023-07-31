import { createSelector } from 'reselect';

const selectRaw = (state) => state.resource.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceDestroySelectors = {
  selectLoading,
};

export default resourceDestroySelectors;
