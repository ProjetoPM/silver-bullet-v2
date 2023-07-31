import { createSelector } from 'reselect';

const selectRaw = (state) => state.stakeholderCalendars.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stakeholderCalendarsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default stakeholderCalendarsViewSelectors;
