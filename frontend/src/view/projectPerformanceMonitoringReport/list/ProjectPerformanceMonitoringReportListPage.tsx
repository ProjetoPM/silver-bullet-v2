import React from 'react';
import { i18n } from 'src/i18n';
import ProjectPerformanceMonitoringReportListFilter from 'src/view/projectPerformanceMonitoringReport/list/ProjectPerformanceMonitoringReportListFilter';
import ProjectPerformanceMonitoringReportListTable from 'src/view/projectPerformanceMonitoringReport/list/ProjectPerformanceMonitoringReportListTable';
import ProjectPerformanceMonitoringReportListToolbar from 'src/view/projectPerformanceMonitoringReport/list/ProjectPerformanceMonitoringReportListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProjectPerformanceMonitoringReportListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectPerformanceMonitoringReport.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.projectPerformanceMonitoringReport.list.title')}
        </h1>
        <ProjectPerformanceMonitoringReportListToolbar />
        <ProjectPerformanceMonitoringReportListFilter />
        <ProjectPerformanceMonitoringReportListTable />
      </div>
    </>
  );
}

export default ProjectPerformanceMonitoringReportListPage;
