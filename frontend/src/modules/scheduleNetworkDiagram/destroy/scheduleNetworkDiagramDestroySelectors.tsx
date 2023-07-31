import { createSelector } from 'reselect';

const selectRaw = (state) => state.scheduleNetworkDiagram.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const scheduleNetworkDiagramDestroySelectors = {
  selectLoading,
};

export default scheduleNetworkDiagramDestroySelectors;
