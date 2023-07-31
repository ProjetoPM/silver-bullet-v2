import { createSelector } from 'reselect';

const selectRaw = (state) => state.stakeholderRegistration.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stakeholderRegistrationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default stakeholderRegistrationViewSelectors;
