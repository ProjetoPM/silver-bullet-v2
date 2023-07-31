import { createSelector } from 'reselect';

const selectRaw = (state) => state.stakeholderCalendars.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stakeholderCalendarsDestroySelectors = {
  selectLoading,
};

export default stakeholderCalendarsDestroySelectors;
