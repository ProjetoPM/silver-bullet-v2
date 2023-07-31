import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectScopeStatement/view/projectScopeStatementViewActions';
import selectors from 'src/modules/projectScopeStatement/view/projectScopeStatementViewSelectors';
import ProjectScopeStatementView from 'src/view/projectScopeStatement/view/ProjectScopeStatementView';
import ProjectScopeStatementViewToolbar from 'src/view/projectScopeStatement/view/ProjectScopeStatementViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProjectScopeStatementPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectScopeStatement.menu'), '/project-scope-statement'],
          [i18n('entities.projectScopeStatement.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.projectScopeStatement.view.title')}
        </h1>

        <ProjectScopeStatementViewToolbar match={match} />

        <ProjectScopeStatementView loading={loading} record={record} />
      </div>
    </>
  );
}

export default ProjectScopeStatementPage;
