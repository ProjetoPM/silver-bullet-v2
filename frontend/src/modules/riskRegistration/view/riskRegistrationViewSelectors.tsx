import { createSelector } from 'reselect';

const selectRaw = (state) => state.riskRegistration.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const riskRegistrationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default riskRegistrationViewSelectors;
