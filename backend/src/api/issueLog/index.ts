export default (app) => {
  app.post(
    `/tenant/:tenantId/issue-log`,
    require('./issueLogCreate').default,
  );
  app.put(
    `/tenant/:tenantId/issue-log/:id`,
    require('./issueLogUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/issue-log/import`,
    require('./issueLogImport').default,
  );
  app.delete(
    `/tenant/:tenantId/issue-log`,
    require('./issueLogDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/issue-log/autocomplete`,
    require('./issueLogAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/issue-log`,
    require('./issueLogList').default,
  );
  app.get(
    `/tenant/:tenantId/issue-log/:id`,
    require('./issueLogFind').default,
  );
};
