import { createSelector } from 'reselect';

const selectRaw = (state) => state.issueLog.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const issueLogDestroySelectors = {
  selectLoading,
};

export default issueLogDestroySelectors;
