import { createSelector } from 'reselect';

const selectRaw = (state) => state.assumptionLog.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assumptionLogDestroySelectors = {
  selectLoading,
};

export default assumptionLogDestroySelectors;
