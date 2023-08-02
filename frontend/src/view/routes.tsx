import Permissions from 'src/security/permissions'
import config from 'src/config'

const permissions = Permissions.values

const privateRoutes = [
  {
    path: '/',
    loader: () => import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () => import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () => import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () => import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () => import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () => import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () => import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/project-charter',
    loader: () => import('src/view/projectCharter/list/ProjectCharterListPage'),
    permissionRequired: permissions.projectCharterRead,
    exact: true,
  },
  {
    path: '/project-charter/new',
    loader: () => import('src/view/projectCharter/form/ProjectCharterFormPage'),
    permissionRequired: permissions.projectCharterCreate,
    exact: true,
  },
  {
    path: '/project-charter/importer',
    loader: () =>
      import('src/view/projectCharter/importer/ProjectCharterImporterPage'),
    permissionRequired: permissions.projectCharterImport,
    exact: true,
  },
  {
    path: '/project-charter/:id/edit',
    loader: () => import('src/view/projectCharter/form/ProjectCharterFormPage'),
    permissionRequired: permissions.projectCharterEdit,
    exact: true,
  },
  {
    path: '/project-charter/:id',
    loader: () => import('src/view/projectCharter/view/ProjectCharterViewPage'),
    permissionRequired: permissions.projectCharterRead,
    exact: true,
  },

  {
    path: '/business-case',
    loader: () => import('src/view/businessCase/list/BusinessCaseListPage'),
    permissionRequired: permissions.businessCaseRead,
    exact: true,
  },
  {
    path: '/business-case/new',
    loader: () => import('src/view/businessCase/form/BusinessCaseFormPage'),
    permissionRequired: permissions.businessCaseCreate,
    exact: true,
  },
  {
    path: '/business-case/importer',
    loader: () =>
      import('src/view/businessCase/importer/BusinessCaseImporterPage'),
    permissionRequired: permissions.businessCaseImport,
    exact: true,
  },
  {
    path: '/business-case/:id/edit',
    loader: () => import('src/view/businessCase/form/BusinessCaseFormPage'),
    permissionRequired: permissions.businessCaseEdit,
    exact: true,
  },
  {
    path: '/business-case/:id',
    loader: () => import('src/view/businessCase/view/BusinessCaseViewPage'),
    permissionRequired: permissions.businessCaseRead,
    exact: true,
  },

  {
    path: '/benefits-management-plan',
    loader: () =>
      import(
        'src/view/benefitsManagementPlan/list/BenefitsManagementPlanListPage'
      ),
    permissionRequired: permissions.benefitsManagementPlanRead,
    exact: true,
  },
  {
    path: '/benefits-management-plan/new',
    loader: () =>
      import(
        'src/view/benefitsManagementPlan/form/BenefitsManagementPlanFormPage'
      ),
    permissionRequired: permissions.benefitsManagementPlanCreate,
    exact: true,
  },
  {
    path: '/benefits-management-plan/importer',
    loader: () =>
      import(
        'src/view/benefitsManagementPlan/importer/BenefitsManagementPlanImporterPage'
      ),
    permissionRequired: permissions.benefitsManagementPlanImport,
    exact: true,
  },
  {
    path: '/benefits-management-plan/:id/edit',
    loader: () =>
      import(
        'src/view/benefitsManagementPlan/form/BenefitsManagementPlanFormPage'
      ),
    permissionRequired: permissions.benefitsManagementPlanEdit,
    exact: true,
  },
  {
    path: '/benefits-management-plan/:id',
    loader: () =>
      import(
        'src/view/benefitsManagementPlan/view/BenefitsManagementPlanViewPage'
      ),
    permissionRequired: permissions.benefitsManagementPlanRead,
    exact: true,
  },

  {
    path: '/assumption-log',
    loader: () => import('src/view/assumptionLog/list/AssumptionLogListPage'),
    permissionRequired: permissions.assumptionLogRead,
    exact: true,
  },
  {
    path: '/assumption-log/new',
    loader: () => import('src/view/assumptionLog/form/AssumptionLogFormPage'),
    permissionRequired: permissions.assumptionLogCreate,
    exact: true,
  },
  {
    path: '/assumption-log/importer',
    loader: () =>
      import('src/view/assumptionLog/importer/AssumptionLogImporterPage'),
    permissionRequired: permissions.assumptionLogImport,
    exact: true,
  },
  {
    path: '/assumption-log/:id/edit',
    loader: () => import('src/view/assumptionLog/form/AssumptionLogFormPage'),
    permissionRequired: permissions.assumptionLogEdit,
    exact: true,
  },
  {
    path: '/assumption-log/:id',
    loader: () => import('src/view/assumptionLog/view/AssumptionLogViewPage'),
    permissionRequired: permissions.assumptionLogRead,
    exact: true,
  },

  {
    path: '/stakeholder-registration',
    loader: () =>
      import(
        'src/view/stakeholderRegistration/list/StakeholderRegistrationListPage'
      ),
    permissionRequired: permissions.stakeholderRegistrationRead,
    exact: true,
  },
  {
    path: '/stakeholder-registration/new',
    loader: () =>
      import(
        'src/view/stakeholderRegistration/form/StakeholderRegistrationFormPage'
      ),
    permissionRequired: permissions.stakeholderRegistrationCreate,
    exact: true,
  },
  {
    path: '/stakeholder-registration/importer',
    loader: () =>
      import(
        'src/view/stakeholderRegistration/importer/StakeholderRegistrationImporterPage'
      ),
    permissionRequired: permissions.stakeholderRegistrationImport,
    exact: true,
  },
  {
    path: '/stakeholder-registration/:id/edit',
    loader: () =>
      import(
        'src/view/stakeholderRegistration/form/StakeholderRegistrationFormPage'
      ),
    permissionRequired: permissions.stakeholderRegistrationEdit,
    exact: true,
  },
  {
    path: '/stakeholder-registration/:id',
    loader: () =>
      import(
        'src/view/stakeholderRegistration/view/StakeholderRegistrationViewPage'
      ),
    permissionRequired: permissions.stakeholderRegistrationRead,
    exact: true,
  },

  {
    path: '/project-management-plan',
    loader: () =>
      import(
        'src/view/projectManagementPlan/list/ProjectManagementPlanListPage'
      ),
    permissionRequired: permissions.projectManagementPlanRead,
    exact: true,
  },
  {
    path: '/project-management-plan/new',
    loader: () =>
      import(
        'src/view/projectManagementPlan/form/ProjectManagementPlanFormPage'
      ),
    permissionRequired: permissions.projectManagementPlanCreate,
    exact: true,
  },
  {
    path: '/project-management-plan/importer',
    loader: () =>
      import(
        'src/view/projectManagementPlan/importer/ProjectManagementPlanImporterPage'
      ),
    permissionRequired: permissions.projectManagementPlanImport,
    exact: true,
  },
  {
    path: '/project-management-plan/:id/edit',
    loader: () =>
      import(
        'src/view/projectManagementPlan/form/ProjectManagementPlanFormPage'
      ),
    permissionRequired: permissions.projectManagementPlanEdit,
    exact: true,
  },
  {
    path: '/project-management-plan/:id',
    loader: () =>
      import(
        'src/view/projectManagementPlan/view/ProjectManagementPlanViewPage'
      ),
    permissionRequired: permissions.projectManagementPlanRead,
    exact: true,
  },

  {
    path: '/requirements-management-plan',
    loader: () =>
      import(
        'src/view/requirementsManagementPlan/list/RequirementsManagementPlanListPage'
      ),
    permissionRequired: permissions.requirementsManagementPlanRead,
    exact: true,
  },
  {
    path: '/requirements-management-plan/new',
    loader: () =>
      import(
        'src/view/requirementsManagementPlan/form/RequirementsManagementPlanFormPage'
      ),
    permissionRequired: permissions.requirementsManagementPlanCreate,
    exact: true,
  },
  {
    path: '/requirements-management-plan/importer',
    loader: () =>
      import(
        'src/view/requirementsManagementPlan/importer/RequirementsManagementPlanImporterPage'
      ),
    permissionRequired: permissions.requirementsManagementPlanImport,
    exact: true,
  },
  {
    path: '/requirements-management-plan/:id/edit',
    loader: () =>
      import(
        'src/view/requirementsManagementPlan/form/RequirementsManagementPlanFormPage'
      ),
    permissionRequired: permissions.requirementsManagementPlanEdit,
    exact: true,
  },
  {
    path: '/requirements-management-plan/:id',
    loader: () =>
      import(
        'src/view/requirementsManagementPlan/view/RequirementsManagementPlanViewPage'
      ),
    permissionRequired: permissions.requirementsManagementPlanRead,
    exact: true,
  },

  {
    path: '/requirement-documentation',
    loader: () =>
      import(
        'src/view/requirementDocumentation/list/RequirementDocumentationListPage'
      ),
    permissionRequired: permissions.requirementDocumentationRead,
    exact: true,
  },
  {
    path: '/requirement-documentation/new',
    loader: () =>
      import(
        'src/view/requirementDocumentation/form/RequirementDocumentationFormPage'
      ),
    permissionRequired: permissions.requirementDocumentationCreate,
    exact: true,
  },
  {
    path: '/requirement-documentation/importer',
    loader: () =>
      import(
        'src/view/requirementDocumentation/importer/RequirementDocumentationImporterPage'
      ),
    permissionRequired: permissions.requirementDocumentationImport,
    exact: true,
  },
  {
    path: '/requirement-documentation/:id/edit',
    loader: () =>
      import(
        'src/view/requirementDocumentation/form/RequirementDocumentationFormPage'
      ),
    permissionRequired: permissions.requirementDocumentationEdit,
    exact: true,
  },
  {
    path: '/requirement-documentation/:id',
    loader: () =>
      import(
        'src/view/requirementDocumentation/view/RequirementDocumentationViewPage'
      ),
    permissionRequired: permissions.requirementDocumentationRead,
    exact: true,
  },

  {
    path: '/scope-management-plan',
    loader: () =>
      import('src/view/scopeManagementPlan/list/ScopeManagementPlanListPage'),
    permissionRequired: permissions.scopeManagementPlanRead,
    exact: true,
  },
  {
    path: '/scope-management-plan/new',
    loader: () =>
      import('src/view/scopeManagementPlan/form/ScopeManagementPlanFormPage'),
    permissionRequired: permissions.scopeManagementPlanCreate,
    exact: true,
  },
  {
    path: '/scope-management-plan/importer',
    loader: () =>
      import(
        'src/view/scopeManagementPlan/importer/ScopeManagementPlanImporterPage'
      ),
    permissionRequired: permissions.scopeManagementPlanImport,
    exact: true,
  },
  {
    path: '/scope-management-plan/:id/edit',
    loader: () =>
      import('src/view/scopeManagementPlan/form/ScopeManagementPlanFormPage'),
    permissionRequired: permissions.scopeManagementPlanEdit,
    exact: true,
  },
  {
    path: '/scope-management-plan/:id',
    loader: () =>
      import('src/view/scopeManagementPlan/view/ScopeManagementPlanViewPage'),
    permissionRequired: permissions.scopeManagementPlanRead,
    exact: true,
  },

  {
    path: '/schedule-management-plan',
    loader: () =>
      import(
        'src/view/scheduleManagementPlan/list/ScheduleManagementPlanListPage'
      ),
    permissionRequired: permissions.scheduleManagementPlanRead,
    exact: true,
  },
  {
    path: '/schedule-management-plan/new',
    loader: () =>
      import(
        'src/view/scheduleManagementPlan/form/ScheduleManagementPlanFormPage'
      ),
    permissionRequired: permissions.scheduleManagementPlanCreate,
    exact: true,
  },
  {
    path: '/schedule-management-plan/importer',
    loader: () =>
      import(
        'src/view/scheduleManagementPlan/importer/ScheduleManagementPlanImporterPage'
      ),
    permissionRequired: permissions.scheduleManagementPlanImport,
    exact: true,
  },
  {
    path: '/schedule-management-plan/:id/edit',
    loader: () =>
      import(
        'src/view/scheduleManagementPlan/form/ScheduleManagementPlanFormPage'
      ),
    permissionRequired: permissions.scheduleManagementPlanEdit,
    exact: true,
  },
  {
    path: '/schedule-management-plan/:id',
    loader: () =>
      import(
        'src/view/scheduleManagementPlan/view/ScheduleManagementPlanViewPage'
      ),
    permissionRequired: permissions.scheduleManagementPlanRead,
    exact: true,
  },

  {
    path: '/project-scope-statement',
    loader: () =>
      import(
        'src/view/projectScopeStatement/list/ProjectScopeStatementListPage'
      ),
    permissionRequired: permissions.projectScopeStatementRead,
    exact: true,
  },
  {
    path: '/project-scope-statement/new',
    loader: () =>
      import(
        'src/view/projectScopeStatement/form/ProjectScopeStatementFormPage'
      ),
    permissionRequired: permissions.projectScopeStatementCreate,
    exact: true,
  },
  {
    path: '/project-scope-statement/importer',
    loader: () =>
      import(
        'src/view/projectScopeStatement/importer/ProjectScopeStatementImporterPage'
      ),
    permissionRequired: permissions.projectScopeStatementImport,
    exact: true,
  },
  {
    path: '/project-scope-statement/:id/edit',
    loader: () =>
      import(
        'src/view/projectScopeStatement/form/ProjectScopeStatementFormPage'
      ),
    permissionRequired: permissions.projectScopeStatementEdit,
    exact: true,
  },
  {
    path: '/project-scope-statement/:id',
    loader: () =>
      import(
        'src/view/projectScopeStatement/view/ProjectScopeStatementViewPage'
      ),
    permissionRequired: permissions.projectScopeStatementRead,
    exact: true,
  },

  {
    path: '/workbreakdown-structure',
    loader: () =>
      import(
        'src/view/workbreakdownStructure/list/WorkbreakdownStructureListPage'
      ),
    permissionRequired: permissions.workbreakdownStructureRead,
    exact: true,
  },
  {
    path: '/workbreakdown-structure/new',
    loader: () =>
      import(
        'src/view/workbreakdownStructure/form/WorkbreakdownStructureFormPage'
      ),
    permissionRequired: permissions.workbreakdownStructureCreate,
    exact: true,
  },
  {
    path: '/workbreakdown-structure/importer',
    loader: () =>
      import(
        'src/view/workbreakdownStructure/importer/WorkbreakdownStructureImporterPage'
      ),
    permissionRequired: permissions.workbreakdownStructureImport,
    exact: true,
  },
  {
    path: '/workbreakdown-structure/:id/edit',
    loader: () =>
      import(
        'src/view/workbreakdownStructure/form/WorkbreakdownStructureFormPage'
      ),
    permissionRequired: permissions.workbreakdownStructureEdit,
    exact: true,
  },
  {
    path: '/workbreakdown-structure/:id',
    loader: () =>
      import(
        'src/view/workbreakdownStructure/view/WorkbreakdownStructureViewPage'
      ),
    permissionRequired: permissions.workbreakdownStructureRead,
    exact: true,
  },

  {
    path: '/schedule-network-diagram',
    loader: () =>
      import(
        'src/view/scheduleNetworkDiagram/list/ScheduleNetworkDiagramListPage'
      ),
    permissionRequired: permissions.scheduleNetworkDiagramRead,
    exact: true,
  },
  {
    path: '/schedule-network-diagram/new',
    loader: () =>
      import(
        'src/view/scheduleNetworkDiagram/form/ScheduleNetworkDiagramFormPage'
      ),
    permissionRequired: permissions.scheduleNetworkDiagramCreate,
    exact: true,
  },
  {
    path: '/schedule-network-diagram/importer',
    loader: () =>
      import(
        'src/view/scheduleNetworkDiagram/importer/ScheduleNetworkDiagramImporterPage'
      ),
    permissionRequired: permissions.scheduleNetworkDiagramImport,
    exact: true,
  },
  {
    path: '/schedule-network-diagram/:id/edit',
    loader: () =>
      import(
        'src/view/scheduleNetworkDiagram/form/ScheduleNetworkDiagramFormPage'
      ),
    permissionRequired: permissions.scheduleNetworkDiagramEdit,
    exact: true,
  },
  {
    path: '/schedule-network-diagram/:id',
    loader: () =>
      import(
        'src/view/scheduleNetworkDiagram/view/ScheduleNetworkDiagramViewPage'
      ),
    permissionRequired: permissions.scheduleNetworkDiagramRead,
    exact: true,
  },

  {
    path: '/activity-list',
    loader: () => import('src/view/activityList/list/ActivityListListPage'),
    permissionRequired: permissions.activityListRead,
    exact: true,
  },
  {
    path: '/activity-list/new',
    loader: () => import('src/view/activityList/form/ActivityListFormPage'),
    permissionRequired: permissions.activityListCreate,
    exact: true,
  },
  {
    path: '/activity-list/importer',
    loader: () =>
      import('src/view/activityList/importer/ActivityListImporterPage'),
    permissionRequired: permissions.activityListImport,
    exact: true,
  },
  {
    path: '/activity-list/:id/edit',
    loader: () => import('src/view/activityList/form/ActivityListFormPage'),
    permissionRequired: permissions.activityListEdit,
    exact: true,
  },
  {
    path: '/activity-list/:id',
    loader: () => import('src/view/activityList/view/ActivityListViewPage'),
    permissionRequired: permissions.activityListRead,
    exact: true,
  },

  {
    path: '/resource',
    loader: () => import('src/view/resource/list/ResourceListPage'),
    permissionRequired: permissions.resourceRead,
    exact: true,
  },
  {
    path: '/resource/new',
    loader: () => import('src/view/resource/form/ResourceFormPage'),
    permissionRequired: permissions.resourceCreate,
    exact: true,
  },
  {
    path: '/resource/importer',
    loader: () => import('src/view/resource/importer/ResourceImporterPage'),
    permissionRequired: permissions.resourceImport,
    exact: true,
  },
  {
    path: '/resource/:id/edit',
    loader: () => import('src/view/resource/form/ResourceFormPage'),
    permissionRequired: permissions.resourceEdit,
    exact: true,
  },
  {
    path: '/resource/:id',
    loader: () => import('src/view/resource/view/ResourceViewPage'),
    permissionRequired: permissions.resourceRead,
    exact: true,
  },

  {
    path: '/resource-requirements',
    loader: () =>
      import('src/view/resourceRequirements/list/ResourceRequirementsListPage'),
    permissionRequired: permissions.resourceRequirementsRead,
    exact: true,
  },
  {
    path: '/resource-requirements/new',
    loader: () =>
      import('src/view/resourceRequirements/form/ResourceRequirementsFormPage'),
    permissionRequired: permissions.resourceRequirementsCreate,
    exact: true,
  },
  {
    path: '/resource-requirements/importer',
    loader: () =>
      import(
        'src/view/resourceRequirements/importer/ResourceRequirementsImporterPage'
      ),
    permissionRequired: permissions.resourceRequirementsImport,
    exact: true,
  },
  {
    path: '/resource-requirements/:id/edit',
    loader: () =>
      import('src/view/resourceRequirements/form/ResourceRequirementsFormPage'),
    permissionRequired: permissions.resourceRequirementsEdit,
    exact: true,
  },
  {
    path: '/resource-requirements/:id',
    loader: () =>
      import('src/view/resourceRequirements/view/ResourceRequirementsViewPage'),
    permissionRequired: permissions.resourceRequirementsRead,
    exact: true,
  },

  {
    path: '/activity-duration-estimates',
    loader: () =>
      import(
        'src/view/activityDurationEstimates/list/ActivityDurationEstimatesListPage'
      ),
    permissionRequired: permissions.activityDurationEstimatesRead,
    exact: true,
  },
  {
    path: '/activity-duration-estimates/new',
    loader: () =>
      import(
        'src/view/activityDurationEstimates/form/ActivityDurationEstimatesFormPage'
      ),
    permissionRequired: permissions.activityDurationEstimatesCreate,
    exact: true,
  },
  {
    path: '/activity-duration-estimates/importer',
    loader: () =>
      import(
        'src/view/activityDurationEstimates/importer/ActivityDurationEstimatesImporterPage'
      ),
    permissionRequired: permissions.activityDurationEstimatesImport,
    exact: true,
  },
  {
    path: '/activity-duration-estimates/:id/edit',
    loader: () =>
      import(
        'src/view/activityDurationEstimates/form/ActivityDurationEstimatesFormPage'
      ),
    permissionRequired: permissions.activityDurationEstimatesEdit,
    exact: true,
  },
  {
    path: '/activity-duration-estimates/:id',
    loader: () =>
      import(
        'src/view/activityDurationEstimates/view/ActivityDurationEstimatesViewPage'
      ),
    permissionRequired: permissions.activityDurationEstimatesRead,
    exact: true,
  },

  {
    path: '/stakeholder-calendars',
    loader: () =>
      import('src/view/stakeholderCalendars/list/StakeholderCalendarsListPage'),
    permissionRequired: permissions.stakeholderCalendarsRead,
    exact: true,
  },
  {
    path: '/stakeholder-calendars/new',
    loader: () =>
      import('src/view/stakeholderCalendars/form/StakeholderCalendarsFormPage'),
    permissionRequired: permissions.stakeholderCalendarsCreate,
    exact: true,
  },
  {
    path: '/stakeholder-calendars/importer',
    loader: () =>
      import(
        'src/view/stakeholderCalendars/importer/StakeholderCalendarsImporterPage'
      ),
    permissionRequired: permissions.stakeholderCalendarsImport,
    exact: true,
  },
  {
    path: '/stakeholder-calendars/:id/edit',
    loader: () =>
      import('src/view/stakeholderCalendars/form/StakeholderCalendarsFormPage'),
    permissionRequired: permissions.stakeholderCalendarsEdit,
    exact: true,
  },
  {
    path: '/stakeholder-calendars/:id',
    loader: () =>
      import('src/view/stakeholderCalendars/view/StakeholderCalendarsViewPage'),
    permissionRequired: permissions.stakeholderCalendarsRead,
    exact: true,
  },

  {
    path: '/cost-management-plan',
    loader: () =>
      import('src/view/costManagementPlan/list/CostManagementPlanListPage'),
    permissionRequired: permissions.costManagementPlanRead,
    exact: true,
  },
  {
    path: '/cost-management-plan/new',
    loader: () =>
      import('src/view/costManagementPlan/form/CostManagementPlanFormPage'),
    permissionRequired: permissions.costManagementPlanCreate,
    exact: true,
  },
  {
    path: '/cost-management-plan/importer',
    loader: () =>
      import(
        'src/view/costManagementPlan/importer/CostManagementPlanImporterPage'
      ),
    permissionRequired: permissions.costManagementPlanImport,
    exact: true,
  },
  {
    path: '/cost-management-plan/:id/edit',
    loader: () =>
      import('src/view/costManagementPlan/form/CostManagementPlanFormPage'),
    permissionRequired: permissions.costManagementPlanEdit,
    exact: true,
  },
  {
    path: '/cost-management-plan/:id',
    loader: () =>
      import('src/view/costManagementPlan/view/CostManagementPlanViewPage'),
    permissionRequired: permissions.costManagementPlanRead,
    exact: true,
  },

  {
    path: '/cost-estimates',
    loader: () => import('src/view/costEstimates/list/CostEstimatesListPage'),
    permissionRequired: permissions.costEstimatesRead,
    exact: true,
  },
  {
    path: '/cost-estimates/new',
    loader: () => import('src/view/costEstimates/form/CostEstimatesFormPage'),
    permissionRequired: permissions.costEstimatesCreate,
    exact: true,
  },
  {
    path: '/cost-estimates/importer',
    loader: () =>
      import('src/view/costEstimates/importer/CostEstimatesImporterPage'),
    permissionRequired: permissions.costEstimatesImport,
    exact: true,
  },
  {
    path: '/cost-estimates/:id/edit',
    loader: () => import('src/view/costEstimates/form/CostEstimatesFormPage'),
    permissionRequired: permissions.costEstimatesEdit,
    exact: true,
  },
  {
    path: '/cost-estimates/:id',
    loader: () => import('src/view/costEstimates/view/CostEstimatesViewPage'),
    permissionRequired: permissions.costEstimatesRead,
    exact: true,
  },

  {
    path: '/quality-management-plan',
    loader: () =>
      import(
        'src/view/qualityManagementPlan/list/QualityManagementPlanListPage'
      ),
    permissionRequired: permissions.qualityManagementPlanRead,
    exact: true,
  },
  {
    path: '/quality-management-plan/new',
    loader: () =>
      import(
        'src/view/qualityManagementPlan/form/QualityManagementPlanFormPage'
      ),
    permissionRequired: permissions.qualityManagementPlanCreate,
    exact: true,
  },
  {
    path: '/quality-management-plan/importer',
    loader: () =>
      import(
        'src/view/qualityManagementPlan/importer/QualityManagementPlanImporterPage'
      ),
    permissionRequired: permissions.qualityManagementPlanImport,
    exact: true,
  },
  {
    path: '/quality-management-plan/:id/edit',
    loader: () =>
      import(
        'src/view/qualityManagementPlan/form/QualityManagementPlanFormPage'
      ),
    permissionRequired: permissions.qualityManagementPlanEdit,
    exact: true,
  },
  {
    path: '/quality-management-plan/:id',
    loader: () =>
      import(
        'src/view/qualityManagementPlan/view/QualityManagementPlanViewPage'
      ),
    permissionRequired: permissions.qualityManagementPlanRead,
    exact: true,
  },

  {
    path: '/resource-management-plan',
    loader: () =>
      import(
        'src/view/resourceManagementPlan/list/ResourceManagementPlanListPage'
      ),
    permissionRequired: permissions.resourceManagementPlanRead,
    exact: true,
  },
  {
    path: '/resource-management-plan/new',
    loader: () =>
      import(
        'src/view/resourceManagementPlan/form/ResourceManagementPlanFormPage'
      ),
    permissionRequired: permissions.resourceManagementPlanCreate,
    exact: true,
  },
  {
    path: '/resource-management-plan/importer',
    loader: () =>
      import(
        'src/view/resourceManagementPlan/importer/ResourceManagementPlanImporterPage'
      ),
    permissionRequired: permissions.resourceManagementPlanImport,
    exact: true,
  },
  {
    path: '/resource-management-plan/:id/edit',
    loader: () =>
      import(
        'src/view/resourceManagementPlan/form/ResourceManagementPlanFormPage'
      ),
    permissionRequired: permissions.resourceManagementPlanEdit,
    exact: true,
  },
  {
    path: '/resource-management-plan/:id',
    loader: () =>
      import(
        'src/view/resourceManagementPlan/view/ResourceManagementPlanViewPage'
      ),
    permissionRequired: permissions.resourceManagementPlanRead,
    exact: true,
  },

  {
    path: '/resource-breakdown-structure',
    loader: () =>
      import(
        'src/view/resourceBreakdownStructure/list/ResourceBreakdownStructureListPage'
      ),
    permissionRequired: permissions.resourceBreakdownStructureRead,
    exact: true,
  },
  {
    path: '/resource-breakdown-structure/new',
    loader: () =>
      import(
        'src/view/resourceBreakdownStructure/form/ResourceBreakdownStructureFormPage'
      ),
    permissionRequired: permissions.resourceBreakdownStructureCreate,
    exact: true,
  },
  {
    path: '/resource-breakdown-structure/importer',
    loader: () =>
      import(
        'src/view/resourceBreakdownStructure/importer/ResourceBreakdownStructureImporterPage'
      ),
    permissionRequired: permissions.resourceBreakdownStructureImport,
    exact: true,
  },
  {
    path: '/resource-breakdown-structure/:id/edit',
    loader: () =>
      import(
        'src/view/resourceBreakdownStructure/form/ResourceBreakdownStructureFormPage'
      ),
    permissionRequired: permissions.resourceBreakdownStructureEdit,
    exact: true,
  },
  {
    path: '/resource-breakdown-structure/:id',
    loader: () =>
      import(
        'src/view/resourceBreakdownStructure/view/ResourceBreakdownStructureViewPage'
      ),
    permissionRequired: permissions.resourceBreakdownStructureRead,
    exact: true,
  },
  {
    path: '/menu/:name',
    loader: () => import('src/view/layout/submenu'),
    permissionsRequired: null,
    exact: true,
  },
].filter(Boolean)

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean)

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean)

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean)

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean)

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '/404',
    loader: () => import('src/view/shared/errors/Error404Page'),
  },
  {
    path: '**',
    loader: () => import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean)

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
}
