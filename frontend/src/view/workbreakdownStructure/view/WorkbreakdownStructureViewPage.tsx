import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/workbreakdownStructure/view/workbreakdownStructureViewActions';
import selectors from 'src/modules/workbreakdownStructure/view/workbreakdownStructureViewSelectors';
import WorkbreakdownStructureView from 'src/view/workbreakdownStructure/view/WorkbreakdownStructureView';
import WorkbreakdownStructureViewToolbar from 'src/view/workbreakdownStructure/view/WorkbreakdownStructureViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function WorkbreakdownStructurePage() {
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
          [i18n('entities.workbreakdownStructure.menu'), '/workbreakdown-structure'],
          [i18n('entities.workbreakdownStructure.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.workbreakdownStructure.view.title')}
        </h1>

        <WorkbreakdownStructureViewToolbar match={match} />

        <WorkbreakdownStructureView loading={loading} record={record} />
      </div>
    </>
  );
}

export default WorkbreakdownStructurePage;
