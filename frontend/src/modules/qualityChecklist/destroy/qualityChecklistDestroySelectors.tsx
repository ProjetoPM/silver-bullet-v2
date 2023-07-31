import { createSelector } from 'reselect';

const selectRaw = (state) => state.qualityChecklist.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const qualityChecklistDestroySelectors = {
  selectLoading,
};

export default qualityChecklistDestroySelectors;
