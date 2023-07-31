import { createSelector } from 'reselect';

const selectRaw = (state) => state.resourceRequirements.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const resourceRequirementsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default resourceRequirementsViewSelectors;
