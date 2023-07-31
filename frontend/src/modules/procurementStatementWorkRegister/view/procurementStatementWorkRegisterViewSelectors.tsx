import { createSelector } from 'reselect';

const selectRaw = (state) => state.procurementStatementWorkRegister.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const procurementStatementWorkRegisterViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default procurementStatementWorkRegisterViewSelectors;
