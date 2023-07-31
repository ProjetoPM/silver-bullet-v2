import { createSelector } from 'reselect';

const selectRaw = (state) => state.changeRequest.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const changeRequestDestroySelectors = {
  selectLoading,
};

export default changeRequestDestroySelectors;
