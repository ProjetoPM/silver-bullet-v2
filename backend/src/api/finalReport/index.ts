export default (app) => {
  app.post(
    `/tenant/:tenantId/final-report`,
    require('./finalReportCreate').default,
  );
  app.put(
    `/tenant/:tenantId/final-report/:id`,
    require('./finalReportUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/final-report/import`,
    require('./finalReportImport').default,
  );
  app.delete(
    `/tenant/:tenantId/final-report`,
    require('./finalReportDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/final-report/autocomplete`,
    require('./finalReportAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/final-report`,
    require('./finalReportList').default,
  );
  app.get(
    `/tenant/:tenantId/final-report/:id`,
    require('./finalReportFind').default,
  );
};