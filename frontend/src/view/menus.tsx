import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';
import {
  faChevronRight,
  faCog,
  faCreditCard,
  faHistory,
  faThLarge,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: faCreditCard,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faUserPlus,
  },

  {
    path: '/audit-logs',
    icon: faHistory,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: faCog,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/project-charter',
    permissionRequired: permissions.projectCharterRead,
    icon: faChevronRight,
    label: i18n('entities.projectCharter.menu'),
  },

  {
    path: '/business-case',
    permissionRequired: permissions.businessCaseRead,
    icon: faChevronRight,
    label: i18n('entities.businessCase.menu'),
  },

  {
    path: '/benefits-management-plan',
    permissionRequired: permissions.benefitsManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.benefitsManagementPlan.menu'),
  },

  {
    path: '/assumption-log',
    permissionRequired: permissions.assumptionLogRead,
    icon: faChevronRight,
    label: i18n('entities.assumptionLog.menu'),
  },

  {
    path: '/stakeholder-registration',
    permissionRequired: permissions.stakeholderRegistrationRead,
    icon: faChevronRight,
    label: i18n('entities.stakeholderRegistration.menu'),
  },

  {
    path: '/project-management-plan',
    permissionRequired: permissions.projectManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.projectManagementPlan.menu'),
  },

  {
    path: '/requirements-management-plan',
    permissionRequired: permissions.requirementsManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.requirementsManagementPlan.menu'),
  },

  {
    path: '/requirement-documentation',
    permissionRequired: permissions.requirementDocumentationRead,
    icon: faChevronRight,
    label: i18n('entities.requirementDocumentation.menu'),
  },

  {
    path: '/scope-management-plan',
    permissionRequired: permissions.scopeManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.scopeManagementPlan.menu'),
  },

  {
    path: '/schedule-management-plan',
    permissionRequired: permissions.scheduleManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.scheduleManagementPlan.menu'),
  },

  {
    path: '/project-scope-statement',
    permissionRequired: permissions.projectScopeStatementRead,
    icon: faChevronRight,
    label: i18n('entities.projectScopeStatement.menu'),
  },

  {
    path: '/workbreakdown-structure',
    permissionRequired: permissions.workbreakdownStructureRead,
    icon: faChevronRight,
    label: i18n('entities.workbreakdownStructure.menu'),
  },

  {
    path: '/schedule-network-diagram',
    permissionRequired: permissions.scheduleNetworkDiagramRead,
    icon: faChevronRight,
    label: i18n('entities.scheduleNetworkDiagram.menu'),
  },

  {
    path: '/activity-list',
    permissionRequired: permissions.activityListRead,
    icon: faChevronRight,
    label: i18n('entities.activityList.menu'),
  },

  {
    path: '/resource',
    permissionRequired: permissions.resourceRead,
    icon: faChevronRight,
    label: i18n('entities.resource.menu'),
  },

  {
    path: '/resource-requirements',
    permissionRequired: permissions.resourceRequirementsRead,
    icon: faChevronRight,
    label: i18n('entities.resourceRequirements.menu'),
  },

  {
    path: '/activity-duration-estimates',
    permissionRequired: permissions.activityDurationEstimatesRead,
    icon: faChevronRight,
    label: i18n('entities.activityDurationEstimates.menu'),
  },

  {
    path: '/stakeholder-calendars',
    permissionRequired: permissions.stakeholderCalendarsRead,
    icon: faChevronRight,
    label: i18n('entities.stakeholderCalendars.menu'),
  },

  {
    path: '/cost-management-plan',
    permissionRequired: permissions.costManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.costManagementPlan.menu'),
  },

  {
    path: '/cost-estimates',
    permissionRequired: permissions.costEstimatesRead,
    icon: faChevronRight,
    label: i18n('entities.costEstimates.menu'),
  },

  {
    path: '/quality-management-plan',
    permissionRequired: permissions.qualityManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.qualityManagementPlan.menu'),
  },

  {
    path: '/resource-management-plan',
    permissionRequired: permissions.resourceManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.resourceManagementPlan.menu'),
  },

  {
    path: '/resource-breakdown-structure',
    permissionRequired: permissions.resourceBreakdownStructureRead,
    icon: faChevronRight,
    label: i18n('entities.resourceBreakdownStructure.menu'),
  },

  {
    path: '/communications-management-plan',
    permissionRequired: permissions.communicationsManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.communicationsManagementPlan.menu'),
  },

  {
    path: '/risk-management-plan',
    permissionRequired: permissions.riskManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.riskManagementPlan.menu'),
  },

  {
    path: '/risk-registration',
    permissionRequired: permissions.riskRegistrationRead,
    icon: faChevronRight,
    label: i18n('entities.riskRegistration.menu'),
  },

  {
    path: '/procurement-management-plan',
    permissionRequired: permissions.procurementManagementPlanRead,
    icon: faChevronRight,
    label: i18n('entities.procurementManagementPlan.menu'),
  },

  {
    path: '/procurement-statement-work-register',
    permissionRequired: permissions.procurementStatementWorkRegisterRead,
    icon: faChevronRight,
    label: i18n('entities.procurementStatementWorkRegister.menu'),
  },

  {
    path: '/project-performance-monitoring-report',
    permissionRequired: permissions.projectPerformanceMonitoringReportRead,
    icon: faChevronRight,
    label: i18n('entities.projectPerformanceMonitoringReport.menu'),
  },

  {
    path: '/work-performance-reports',
    permissionRequired: permissions.workPerformanceReportsRead,
    icon: faChevronRight,
    label: i18n('entities.workPerformanceReports.menu'),
  },

  {
    path: '/issue-log',
    permissionRequired: permissions.issueLogRead,
    icon: faChevronRight,
    label: i18n('entities.issueLog.menu'),
  },

  {
    path: '/lesson-learned-register',
    permissionRequired: permissions.lessonLearnedRegisterRead,
    icon: faChevronRight,
    label: i18n('entities.lessonLearnedRegister.menu'),
  },

  {
    path: '/quality-checklist',
    permissionRequired: permissions.qualityChecklistRead,
    icon: faChevronRight,
    label: i18n('entities.qualityChecklist.menu'),
  },

  {
    path: '/team-performance-evaluation',
    permissionRequired: permissions.teamPerformanceEvaluationRead,
    icon: faChevronRight,
    label: i18n('entities.teamPerformanceEvaluation.menu'),
  },

  {
    path: '/change-request',
    permissionRequired: permissions.changeRequestRead,
    icon: faChevronRight,
    label: i18n('entities.changeRequest.menu'),
  },

  {
    path: '/project-closure',
    permissionRequired: permissions.projectClosureRead,
    icon: faChevronRight,
    label: i18n('entities.projectClosure.menu'),
  },

  {
    path: '/closed-procurement-documentation',
    permissionRequired: permissions.closedProcurementDocumentationRead,
    icon: faChevronRight,
    label: i18n('entities.closedProcurementDocumentation.menu'),
  },

  {
    path: '/final-report',
    permissionRequired: permissions.finalReportRead,
    icon: faChevronRight,
    label: i18n('entities.finalReport.menu'),
  },  
].filter(Boolean);
