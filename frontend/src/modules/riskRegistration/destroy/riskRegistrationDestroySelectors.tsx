import { createSelector } from 'reselect';

const selectRaw = (state) => state.riskRegistration.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const riskRegistrationDestroySelectors = {
  selectLoading,
};

export default riskRegistrationDestroySelectors;
