export default (app) => {
  app.post(
    `/tenant/:tenantId/resource-requirements`,
    require('./resourceRequirementsCreate').default,
  );
  app.put(
    `/tenant/:tenantId/resource-requirements/:id`,
    require('./resourceRequirementsUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/resource-requirements/import`,
    require('./resourceRequirementsImport').default,
  );
  app.delete(
    `/tenant/:tenantId/resource-requirements`,
    require('./resourceRequirementsDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/resource-requirements/autocomplete`,
    require('./resourceRequirementsAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/resource-requirements`,
    require('./resourceRequirementsList').default,
  );
  app.get(
    `/tenant/:tenantId/resource-requirements/:id`,
    require('./resourceRequirementsFind').default,
  );
};
