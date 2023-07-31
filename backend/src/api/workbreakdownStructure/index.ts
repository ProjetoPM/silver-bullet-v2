export default (app) => {
  app.post(
    `/tenant/:tenantId/workbreakdown-structure`,
    require('./workbreakdownStructureCreate').default,
  );
  app.put(
    `/tenant/:tenantId/workbreakdown-structure/:id`,
    require('./workbreakdownStructureUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/workbreakdown-structure/import`,
    require('./workbreakdownStructureImport').default,
  );
  app.delete(
    `/tenant/:tenantId/workbreakdown-structure`,
    require('./workbreakdownStructureDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/workbreakdown-structure/autocomplete`,
    require('./workbreakdownStructureAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/workbreakdown-structure`,
    require('./workbreakdownStructureList').default,
  );
  app.get(
    `/tenant/:tenantId/workbreakdown-structure/:id`,
    require('./workbreakdownStructureFind').default,
  );
};
