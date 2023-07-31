import { createSelector } from 'reselect';

const selectRaw = (state) => state.lessonLearnedRegister.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const lessonLearnedRegisterDestroySelectors = {
  selectLoading,
};

export default lessonLearnedRegisterDestroySelectors;
