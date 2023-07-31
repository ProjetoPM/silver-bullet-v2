import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import projectCharter from 'src/modules/projectCharter/projectCharterReducers';
import businessCase from 'src/modules/businessCase/businessCaseReducers';
import benefitsManagementPlan from 'src/modules/benefitsManagementPlan/benefitsManagementPlanReducers';
import assumptionLog from 'src/modules/assumptionLog/assumptionLogReducers';
import stakeholderRegistration from 'src/modules/stakeholderRegistration/stakeholderRegistrationReducers';
import projectManagementPlan from 'src/modules/projectManagementPlan/projectManagementPlanReducers';
import requirementsManagementPlan from 'src/modules/requirementsManagementPlan/requirementsManagementPlanReducers';
import requirementDocumentation from 'src/modules/requirementDocumentation/requirementDocumentationReducers';
import scopeManagementPlan from 'src/modules/scopeManagementPlan/scopeManagementPlanReducers';
import scheduleManagementPlan from 'src/modules/scheduleManagementPlan/scheduleManagementPlanReducers';
import projectScopeStatement from 'src/modules/projectScopeStatement/projectScopeStatementReducers';
import workbreakdownStructure from 'src/modules/workbreakdownStructure/workbreakdownStructureReducers';
import scheduleNetworkDiagram from 'src/modules/scheduleNetworkDiagram/scheduleNetworkDiagramReducers';
import activityList from 'src/modules/activityList/activityListReducers';
import resource from 'src/modules/resource/resourceReducers';
import resourceRequirements from 'src/modules/resourceRequirements/resourceRequirementsReducers';
import activityDurationEstimates from 'src/modules/activityDurationEstimates/activityDurationEstimatesReducers';
import stakeholderCalendars from 'src/modules/stakeholderCalendars/stakeholderCalendarsReducers';
import costManagementPlan from 'src/modules/costManagementPlan/costManagementPlanReducers';
import costEstimates from 'src/modules/costEstimates/costEstimatesReducers';
import qualityManagementPlan from 'src/modules/qualityManagementPlan/qualityManagementPlanReducers';
import resourceManagementPlan from 'src/modules/resourceManagementPlan/resourceManagementPlanReducers';
import resourceBreakdownStructure from 'src/modules/resourceBreakdownStructure/resourceBreakdownStructureReducers';
import communicationsManagementPlan from 'src/modules/communicationsManagementPlan/communicationsManagementPlanReducers';
import riskManagementPlan from 'src/modules/riskManagementPlan/riskManagementPlanReducers';
import riskRegistration from 'src/modules/riskRegistration/riskRegistrationReducers';
import procurementManagementPlan from 'src/modules/procurementManagementPlan/procurementManagementPlanReducers';
import procurementStatementWorkRegister from 'src/modules/procurementStatementWorkRegister/procurementStatementWorkRegisterReducers';
import projectPerformanceMonitoringReport from 'src/modules/projectPerformanceMonitoringReport/projectPerformanceMonitoringReportReducers';
import workPerformanceReports from 'src/modules/workPerformanceReports/workPerformanceReportsReducers';
import issueLog from 'src/modules/issueLog/issueLogReducers';
import lessonLearnedRegister from 'src/modules/lessonLearnedRegister/lessonLearnedRegisterReducers';
import qualityChecklist from 'src/modules/qualityChecklist/qualityChecklistReducers';
import teamPerformanceEvaluation from 'src/modules/teamPerformanceEvaluation/teamPerformanceEvaluationReducers';
import changeRequest from 'src/modules/changeRequest/changeRequestReducers';
import projectClosure from 'src/modules/projectClosure/projectClosureReducers';
import closedProcurementDocumentation from 'src/modules/closedProcurementDocumentation/closedProcurementDocumentationReducers';
import finalReport from 'src/modules/finalReport/finalReportReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    projectCharter,
    businessCase,
    benefitsManagementPlan,
    assumptionLog,
    stakeholderRegistration,
    projectManagementPlan,
    requirementsManagementPlan,
    requirementDocumentation,
    scopeManagementPlan,
    scheduleManagementPlan,
    projectScopeStatement,
    workbreakdownStructure,
    scheduleNetworkDiagram,
    activityList,
    resource,
    resourceRequirements,
    activityDurationEstimates,
    stakeholderCalendars,
    costManagementPlan,
    costEstimates,
    qualityManagementPlan,
    resourceManagementPlan,
    resourceBreakdownStructure,
    communicationsManagementPlan,
    riskManagementPlan,
    riskRegistration,
    procurementManagementPlan,
    procurementStatementWorkRegister,
    projectPerformanceMonitoringReport,
    workPerformanceReports,
    issueLog,
    lessonLearnedRegister,
    qualityChecklist,
    teamPerformanceEvaluation,
    changeRequest,
    projectClosure,
    closedProcurementDocumentation,
    finalReport,
  });
