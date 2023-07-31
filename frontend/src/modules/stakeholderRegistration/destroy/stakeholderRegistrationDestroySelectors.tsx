import { createSelector } from 'reselect';

const selectRaw = (state) => state.stakeholderRegistration.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stakeholderRegistrationDestroySelectors = {
  selectLoading,
};

export default stakeholderRegistrationDestroySelectors;
