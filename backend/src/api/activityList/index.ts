export default (app) => {
  app.post(
    `/tenant/:tenantId/activity-list`,
    require('./activityListCreate').default,
  );
  app.put(
    `/tenant/:tenantId/activity-list/:id`,
    require('./activityListUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/activity-list/import`,
    require('./activityListImport').default,
  );
  app.delete(
    `/tenant/:tenantId/activity-list`,
    require('./activityListDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/activity-list/autocomplete`,
    require('./activityListAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/activity-list`,
    require('./activityListList').default,
  );
  app.get(
    `/tenant/:tenantId/activity-list/:id`,
    require('./activityListFind').default,
  );
};
