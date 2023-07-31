import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessCase.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessCaseDestroySelectors = {
  selectLoading,
};

export default businessCaseDestroySelectors;
