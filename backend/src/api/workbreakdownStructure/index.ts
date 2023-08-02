export default (app) => {
  app.post(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure`,
    require('./workbreakdownStructureCreate').default,
  );
  app.put(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure/:id`,
    require('./workbreakdownStructureUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure/import`,
    require('./workbreakdownStructureImport').default,
  );
  app.delete(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure`,
    require('./workbreakdownStructureDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure/autocomplete`,
    require('./workbreakdownStructureAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure`,
    require('./workbreakdownStructureList').default,
  );
  app.get(
    `/tenant/:tenantId/project/:projectId/workbreakdown-structure/:id`,
    require('./workbreakdownStructureFind').default,
  );
};
