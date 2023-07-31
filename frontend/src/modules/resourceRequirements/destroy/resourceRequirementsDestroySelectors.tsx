import { createSelector } from 'reselect';

const selectRaw = (state) => state.resourceRequirements.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceRequirementsDestroySelectors = {
  selectLoading,
};

export default resourceRequirementsDestroySelectors;
