export default (app) => {
  app.post(
    `/tenant/:tenantId/risk-management-plan`,
    require('./riskManagementPlanCreate').default,
  );
  app.put(
    `/tenant/:tenantId/risk-management-plan/:id`,
    require('./riskManagementPlanUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/risk-management-plan/import`,
    require('./riskManagementPlanImport').default,
  );
  app.delete(
    `/tenant/:tenantId/risk-management-plan`,
    require('./riskManagementPlanDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/risk-management-plan/autocomplete`,
    require('./riskManagementPlanAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/risk-management-plan`,
    require('./riskManagementPlanList').default,
  );
  app.get(
    `/tenant/:tenantId/risk-management-plan/:id`,
    require('./riskManagementPlanFind').default,
  );
};
