import { createSelector } from 'reselect';

const selectRaw = (state) => state.workbreakdownStructure.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const workbreakdownStructureDestroySelectors = {
  selectLoading,
};

export default workbreakdownStructureDestroySelectors;
