import { createSelector } from 'reselect';

const selectRaw = (state) => state.resourceBreakdownStructure.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceBreakdownStructureDestroySelectors = {
  selectLoading,
};

export default resourceBreakdownStructureDestroySelectors;
