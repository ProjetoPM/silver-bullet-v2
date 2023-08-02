const en = {
  modal: {
    menu: {
      areas: 'Areas',
      phases: 'Phases',
      search: 'Search for phases',
      noResults: 'No results found',
    },
  },
  areas: {
    badge: 'Area',
    phases: {
      badge: 'Phase',
      initiating: {
        title: 'Initiating',
      },
      planning: {
        title: 'Planning',
      },
      executing: {
        title: 'Executing',
      },
      monitoring: {
        title: 'Monitoring',
      },
      closing: {
        title: 'Closing',
      },
    },
    integration: {
      title: 'Integration',
      description:
        'Coordinates the project areas to achieve objectives, fundamental for project management.',
      phases: {
        initiating: {
          projectCharter: 'Project Charter',
          businessCase: 'Business Case',
          benefitsManagementPlan: 'Benefits Management Plan',
          assumptionLog: 'Assumption Log',
        },
        planning: {
          projectManagementPlan: 'Project Management Plan',
        },
        executing: {
          projectPerformanceAndMonitoringReport:
            'Project Performance & Monitoring Report',
          deliverableStatus: 'Deliverable Status',
          workPerformanceReports: 'Work Performance Reports',
          issueLog: 'Issue Log',
          lessonLearnedRegister: 'Lesson Learned Register',
        },
        monitoring: {
          changeRequest: 'Change Request',
          changeLog: 'Change Log',
        },
        closing: {
          projectClosureTerm: 'Project Closure Term',
          finalReport: 'Final Report',
        },
      },
    },
    scope: {
      title: 'Scope',
      description:
        "Documents what is included and excluded from the project, ensuring that it meets the client's objectives.",
      phases: {
        initiating: {},
        planning: {
          requirementsManagementPlan: 'Requirements Management Plan',
          requirementDocumentation: 'Requirement Documentation',
          scopeManagementPlan: 'Scope Management Plan',
          projectScopeStatement: 'Project Scope Statement',
          workBreakdownStructure: 'Work Breakdown Structure',
        },
        executing: {},
        monitoring: {},
        closing: {},
      },
    },
    schedule: {
      title: 'Schedule',
      description:
        'Defines activities, sequencing, duration estimates, and project change control.',
      phases: {
        initiating: {},
        planning: {
          scheduleManagementPlan: 'Schedule Management Plan',
          activityList: 'Activity List',
          earnedValueManagement: 'Earned Value Management',
          scheduleNetworkDiagram: 'Schedule Network Diagram',
          resourceRequirements: 'Resource Requirements',
          durationEstimates: 'Duration Estimates',
          stakeholderCalendar: 'Stakeholder Calendar',
        },
        executing: {},
        monitoring: {},
        closing: {},
      },
    },
    cost: {
      title: 'Cost',
      description:
        'Plans, manages, and controls project costs to meet the defined budget.',
      phases: {
        initiating: {},
        planning: {
          costManagementPlan: 'Cost Management Plan',
          costEstimates: 'Cost Estimates',
        },
        executing: {},
        monitoring: {},
        closing: {},
      },
    },
    quality: {
      title: 'Quality',
      description:
        'Ensures that the project meets the quality requirements and standards established by the client.',
      phases: {
        initiating: {},
        planning: {
          qualityManagementPlan: 'Quality Management Plan',
        },
        executing: {
          productQualityChecklists: 'Product Quality Checklists',
          qualityReports: 'Quality Reports',
        },
        monitoring: {},
        closing: {},
      },
    },
    resource: {
      title: 'Resources',
      description:
        'Manages project resources efficiently to successfully achieve objectives.',
      phases: {
        initiating: {},
        planning: {
          resourceManagementPlan: 'Resource Management Plan',
          resourceBreakdownStructure: 'Resource Breakdown Structure',
        },
        executing: {
          teamPerformanceAssessment: 'Team Performance Assessment',
        },
        monitoring: {},
        closing: {},
      },
    },
    communication: {
      title: 'Communication',
      description:
        'Manages project communications, ensuring adequate dissemination of information.',
      phases: {
        initiating: {},
        planning: {
          communicationManagementPlan: 'Communication Management Plan',
        },
        executing: {},
        monitoring: {},
        closing: {},
      },
    },
    risk: {
      title: 'Risk',
      description:
        'Identifies, evaluates, and manages project risks, minimizing their negative effects.',
      phases: {
        initiating: {},
        planning: {
          riskManagementPlan: 'Risk Management Plan',
          riskRegister: 'Risk Register',
          generalProjectRiskChecklist: 'General Project Risk Checklist',
        },
        executing: {},
        monitoring: {},
        closing: {},
      },
    },
    procurement: {
      title: 'Procurement',
      description:
        'Plans, manages, and controls the acquisition of products and services necessary for the project.',
      phases: {
        initiating: {},
        planning: {
          procurementManagementPlan: 'Procurement Management Plan',
        },
        executing: {
          procurementStatementOfWork: 'Procurement Statement of Work',
        },
        monitoring: {
          closedProcurementDocumentation: 'Closed Procurement Documentation',
        },
        closing: {},
      },
    },
    stakeholder: {
      title: 'Stakeholders',
      description:
        'Identifies and manages project stakeholders, ensuring satisfaction of their needs.',
      phases: {
        initiating: {
          stakeholderRegister: 'Stakeholder Register',
        },
        planning: {
          stakeholderEngagementPlan: 'Stakeholder Engagement Plan',
        },
        executing: {},
        monitoring: {},
        closing: {},
      },
    },
  },

  common: {
    menu: 'Menu',
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Silver Bullet',
  },

  api: {
    menu: 'API',
  },

  entities: {
    projectCharter: {
      name: 'projectCharter',
      label: 'Project Charter',
      menu: 'Project Charter',
      exporterFileName: 'project_charter_export',
      list: {
        menu: 'Project Charter',
        title: 'Project Charter',
      },
      create: {
        success: 'Project Charter successfully saved',
      },
      update: {
        success: 'Project Charter successfully saved',
      },
      destroy: {
        success: 'Project Charter successfully deleted',
      },
      destroyAll: {
        success: 'Project Charter(s) successfully deleted',
      },
      edit: {
        title: 'Edit Project Charter',
      },
      fields: {
        id: 'Id',
        projectName: 'Project Name',
        highLevelProjectDescription: 'High-Level Project Description',
        startdateRange: 'Start Date',
        startdate: 'Start Date',
        enddateRange: 'End Date',
        enddate: 'End Date',
        projectPurpose: 'Project Purpose',
        measurableProjectObjectives: 'Measurable Project Objectives',
        keyBenefits: 'Key Benefits',
        highlevelRequirements: 'High-Level Requirements',
        boundaries: 'Boundaries',
        overallProjectRisk: 'Overall Project Risk',
        summaryMilestoneSchedule: 'Summary Milestone Schedule',
        preapprovedFinancialResources: 'Preapproved Financial Resources',
        projectApprovalRequirements: 'Project Approval Requirements',
        successCriteria: 'Success Criteria',
        projectExitCriteria: 'Project Exit Criteria',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        highLevelProjectDescription:
          'Essa seção fornece uma visão geral do projeto, incluindo suas principais entregas, premissas e restrições. A dica aqui é focar em descrever os principais aspectos do projeto, mantendo uma abordagem de alto nível, sem entrar em detalhes técnicos ou operacionais.',
        projectPurpose:
          'O propósito do projeto é a razão pela qual o projeto está sendo realizado e o problema ou oportunidade que ele pretende abordar. A dica aqui é ser conciso e claro ao descrever o propósito, destacando os benefícios esperados e o valor que o projeto trará para a organização e seus stakeholders.',
        measurableProjectObjectives:
          'Os objetivos do projeto devem ser claros, mensuráveis e alinhados com as metas de negócio da organização. A dica é utilizar a abordagem SMART (Specific, Measurable, Achievable, Relevant, Time-bound) para definir os objetivos do projeto, garantindo que sejam específicos, mensuráveis, atingíveis, relevantes e limitados no tempo.',
        keyBenefits:
          'Destaque os principais benefícios que o projeto proporcionará à organização e aos stakeholders. Foque nos resultados tangíveis e intangíveis que contribuirão para o alcance das metas de negócio.',
        highlevelRequirements:
          'Identifique os principais requisitos do projeto, ou seja, as características e funções que o produto, serviço ou resultado final deve ter. Esses requisitos devem ser claros e concisos, sem entrar em detalhes técnicos.',
        boundaries:
          'Defina os limites do projeto, incluindo o escopo, o que está incluído e o que está fora do projeto. Isso ajudará a evitar o escopo inadequado e a gerenciar as expectativas dos stakeholders.',
        overallProjectRisk:
          'Identifique e descreva os principais riscos associados ao projeto, considerando aspectos como custos, prazos, recursos e qualidade. Isso ajudará a equipe a estar preparada para possíveis desafios e a desenvolver planos de contingência.',
        summaryMilestoneSchedule:
          'Apresente um cronograma resumido com as principais etapas e marcos do projeto. Isso dará uma visão geral do tempo necessário para a conclusão do projeto e ajudará no acompanhamento do progresso.',
        preapprovedFinancialResources:
          'Mencione os recursos financeiros pré-aprovados para o projeto, incluindo orçamentos e estimativas de custo. Isso garantirá que a equipe esteja ciente das limitações financeiras e possa gerenciar os recursos de forma eficiente.',
        projectApprovalRequirements:
          'Liste os requisitos necessários para obter a aprovação do projeto, como assinaturas de autoridade, revisões de qualidade e aprovações regulatórias. Isso ajudará a garantir que o projeto esteja em conformidade com as políticas e regulamentações aplicáveis.',
        successCriteria:
          'Defina os critérios de sucesso que serão utilizados para avaliar o desempenho e o resultado do projeto. Esses critérios devem ser mensuráveis e alinhados com os objetivos do projeto.',
        projectExitCriteria:
          'Estabeleça os critérios de encerramento do projeto, que determinarão quando o projeto será considerado concluído. Isso pode incluir a entrega de todas as entregas, a aceitação do cliente e a conclusão da documentação do projeto.',
      },
      new: {
        title: 'New Project Charter',
      },
      view: {
        title: 'View Project Charter',
      },
      importer: {
        title: 'Import Project Charter',
        fileName: 'project_charter_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    businessCase: {
      name: 'businessCase',
      label: 'Business Case',
      menu: 'Business Case',
      exporterFileName: 'business_case_export',
      list: {
        menu: 'Business Case',
        title: 'Business Case',
      },
      create: {
        success: 'Business Case successfully saved',
      },
      update: {
        success: 'Business Case successfully saved',
      },
      destroy: {
        success: 'Business Case successfully deleted',
      },
      destroyAll: {
        success: 'Business Case(s) successfully deleted',
      },
      edit: {
        title: 'Edit Business Case',
      },
      fields: {
        id: 'Id',
        businessNeeds: 'Business Needs',
        situationAnalysis: 'Situation Analysis',
        recommendation: 'Recommendation',
        evaluation: 'Evaluation',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        businessNeeds:
          'Identifique e descreva as necessidades de negócio que o projeto visa atender. Foque em questões ou oportunidades que a organização enfrenta e como o projeto ajudará a resolver essas questões ou aproveitar essas oportunidades.',
        situationAnalysis:
          'Realize uma análise da situação atual da organização e do ambiente externo, considerando aspectos como mercado, concorrência, recursos e restrições. Isso ajudará a entender o contexto no qual o projeto será realizado e os desafios que podem ser enfrentados.',
        recommendation:
          'Apresente uma recomendação clara e fundamentada para a solução que o projeto irá implementar. Explique como essa solução abordará as necessidades de negócio identificadas e por que ela é a melhor opção entre as alternativas disponíveis.',
        evaluation:
          'Inclua uma avaliação dos benefícios e custos do projeto, bem como uma análise dos riscos associados. Isso pode envolver uma análise de retorno sobre o investimento (ROI), valor presente líquido (VPL) ou outros indicadores financeiros relevantes. A avaliação deve ser objetiva e baseada em dados para ajudar os tomadores de decisão a entender o valor potencial do projeto e a tomar decisões informadas sobre sua aprovação.',
      },
      new: {
        title: 'New Business Case',
      },
      view: {
        title: 'View Business Case',
      },
      importer: {
        title: 'Import BusinessCases',
        fileName: 'businessCase_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    benefitsManagementPlan: {
      name: 'benefitsManagementPlan',
      label: 'BenefitsManagementPlans',
      menu: 'BenefitsManagementPlans',
      exporterFileName: 'benefitsManagementPlan_export',
      list: {
        menu: 'BenefitsManagementPlans',
        title: 'BenefitsManagementPlans',
      },
      create: {
        success: 'Benefits Management Plan successfully saved',
      },
      update: {
        success: 'Benefits Management Plan successfully saved',
      },
      destroy: {
        success: 'Benefits Management Plan successfully deleted',
      },
      destroyAll: {
        success: 'Benefits Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit Benefits Management Plan',
      },
      fields: {
        id: 'Id',
        targetBenefits: 'Target Benefits',
        strategicAlignment: 'Strategic Alignment',
        scheduleforBenefits: 'Schedule for Benefits',
        benefitsOwner: 'Benefits Owner',
        indicators: 'Indicators',
        premises: 'Premises',
        risks: 'Risks',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        targetBenefits:
          'Identifique e descreva os benefícios-alvo que o projeto busca alcançar. Eles devem ser mensuráveis, específicos e alinhados com as metas organizacionais. Inclua benefícios tangíveis e intangíveis, sempre que possível.',
        strategicAlignment:
          'Demonstre como os benefícios do projeto se alinham com os objetivos estratégicos da organização. Isso ajudará a garantir que o projeto esteja contribuindo para os objetivos de longo prazo da empresa e aumentará a probabilidade de sucesso.',
        scheduleforBenefits:
          'Elabore um cronograma para a realização dos benefícios, mostrando quando cada benefício será entregue e como ele será medido. Isso ajudará a monitorar e controlar a entrega dos benefícios ao longo do ciclo de vida do projeto.',
        benefitsOwner:
          'Designe um responsável pelos benefícios, que será encarregado de garantir que os benefícios sejam entregues e que os resultados sejam medidos e reportados. Esta pessoa também deve ser responsável por lidar com quaisquer problemas ou riscos relacionados aos benefícios.',
        indicators:
          'Defina os indicadores-chave de desempenho (KPIs) que serão usados para medir os benefícios do projeto. Esses indicadores devem ser quantitativos e qualitativos, conforme apropriado, e devem ser facilmente mensuráveis e compreensíveis.',
        premises:
          'Liste as premissas e suposições feitas ao planejar os benefícios do projeto. Isso pode incluir suposições sobre o ambiente de negócios, disponibilidade de recursos e outras condições que possam afetar a entrega dos benefícios. Esteja preparado para revisar e ajustar essas premissas conforme necessário ao longo do projeto.',
        risks:
          'Identifique os riscos associados aos benefícios do projeto, incluindo possíveis desafios, obstáculos ou ameaças que possam impedir a realização dos benefícios. Desenvolva planos de mitigação de riscos para enfrentar esses riscos e garantir que os benefícios do projeto sejam alcançados.',
      },
      new: {
        title: 'New Benefits Management Plan',
      },
      view: {
        title: 'View Benefits Management Plan',
      },
      importer: {
        title: 'Import BenefitsManagementPlans',
        fileName: 'benefitsManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    assumptionLog: {
      name: 'assumptionLog',
      label: 'AssumptionLogs',
      menu: 'AssumptionLogs',
      exporterFileName: 'assumptionLog_export',
      list: {
        menu: 'AssumptionLogs',
        title: 'AssumptionLogs',
      },
      create: {
        success: 'Assumption Log successfully saved',
      },
      update: {
        success: 'Assumption Log successfully saved',
      },
      destroy: {
        success: 'Assumption Log successfully deleted',
      },
      destroyAll: {
        success: 'Assumption Log(s) successfully deleted',
      },
      edit: {
        title: 'Edit Assumption Log',
      },
      fields: {
        id: 'Id',
        assumptionLog: 'Assumption Log',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        assumptionLog:
          'O Assumption Log é um documento que registra suposições e premissas feitas durante um projeto. Ele auxilia na identificação, validação e gerenciamento de riscos relacionados a essas suposições, facilitando a comunicação entre os membros da equipe e stakeholders e ajudando na tomada de decisões informadas.',
      },
      new: {
        title: 'New Assumption Log',
      },
      view: {
        title: 'View Assumption Log',
      },
      importer: {
        title: 'Import AssumptionLogs',
        fileName: 'assumptionLog_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stakeholderRegistration: {
      name: 'stakeholderRegistration',
      label: 'StakeholderRegistrations',
      menu: 'StakeholderRegistrations',
      exporterFileName: 'stakeholderRegistration_export',
      list: {
        menu: 'StakeholderRegistrations',
        title: 'StakeholderRegistrations',
      },
      create: {
        success: 'Stakeholder Registration successfully saved',
      },
      update: {
        success: 'Stakeholder Registration successfully saved',
      },
      destroy: {
        success: 'Stakeholder Registration successfully deleted',
      },
      destroyAll: {
        success: 'Stakeholder Registration(s) successfully deleted',
      },
      edit: {
        title: 'Edit Stakeholder Registration',
      },
      fields: {
        id: 'Id',
        nome: 'Nome',
        tipo: 'Tipo',
        mainRoleintheProject: 'Main Role in the Project',
        organization: 'Organization',
        positioninOrganization: 'Position in organization',
        email: 'Email',
        mainProjectResponsibility: 'Main Project Responsibility',
        phone: 'Phone',
        workplace: 'Workplace',
        essentialRequirements: 'Essential Requirements',
        mainExpectations: 'Main Expectations',
        phaseofGreaterInterest: 'Phase of Greater Interest',
        observations: 'Observations',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        tipo: {
          External: 'External',
          Internal: 'Internal',
        },
        mainRoleintheProject: {
          Stakeholder: 'Stakeholder',
          Team: 'Team',
          Provider: 'Provider',
          'Project manager': 'Project manager',
          Sponsor: 'Sponsor',
          Others: 'Others',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Stakeholder Registration',
      },
      view: {
        title: 'View Stakeholder Registration',
      },
      importer: {
        title: 'Import StakeholderRegistrations',
        fileName: 'stakeholderRegistration_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    projectManagementPlan: {
      name: 'projectManagementPlan',
      label: 'ProjectManagementPlans',
      menu: 'ProjectManagementPlans',
      exporterFileName: 'projectManagementPlan_export',
      list: {
        menu: 'ProjectManagementPlans',
        title: 'ProjectManagementPlans',
      },
      create: {
        success: ' Project Management Plan successfully saved',
      },
      update: {
        success: ' Project Management Plan successfully saved',
      },
      destroy: {
        success: ' Project Management Plan successfully deleted',
      },
      destroyAll: {
        success: ' Project Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit  Project Management Plan',
      },
      fields: {
        id: 'Id',
        scopeManagementPlan: 'Scope Management Plan',
        requirementsManagementPlan: 'Requirements Management Plan',
        scheduleManagementPlan: 'Schedule Management Plan',
        costManagementPlan: 'Cost Management Plan',
        qualityManagementPlan: 'Quality Management Plan',
        resourceManagementPlan: 'Resource Management Plan',
        communicationsManagementPlan: 'Communications Management Plan',
        riskManagementPlan: 'Risk Management Plan',
        procurementManagementPlan: 'Procurement Management Plan',
        stakeholderEngagementPlan: 'Stakeholder Engagement Plan',
        scopeBaseline: 'Scope Baseline',
        scheduleBaseline: 'Schedule Baseline',
        costBaseline: 'Cost Baseline',
        changeManagementPlan: 'Change Management Plan',
        configurationManagementPlan: 'Configuration Management Plan',
        performanceMeasurementBaseline: 'Performance Measurement Baseline',
        projectLifeCycle: 'Project Life Cycle',
        developmentApproach: 'Development Approach',
        managementReviews: 'Management Reviews',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        scopeManagementPlan:
          'Defina como o escopo do projeto será planejado, executado e controlado, incluindo a definição e gerenciamento de requisitos, entregas e limites do projeto.',
        requirementsManagementPlan:
          'Descreva como os requisitos do projeto serão coletados, analisados, documentados e gerenciados ao longo do projeto.',
        scheduleManagementPlan:
          'Estabeleça os processos e ferramentas para criar, gerenciar e controlar o cronograma do projeto, incluindo prazos e marcos.',
        costManagementPlan:
          'Defina como os custos do projeto serão estimados, orçados, monitorados e controlados, incluindo a definição de tolerâncias de custo e o uso de técnicas de estimativa.',
        qualityManagementPlan:
          'Descreva como a qualidade será planejada, gerenciada e controlada, garantindo que o projeto atenda aos padrões e expectativas de qualidade.',
        resourceManagementPlan:
          'Determine como os recursos humanos e materiais serão planejados, adquiridos, gerenciados e liberados durante o projeto.',
        communicationsManagementPlan:
          'Defina como as informações do projeto serão trocadas entre os membros da equipe e stakeholders, incluindo métodos de comunicação, frequência e responsabilidades.',
        riskManagementPlan:
          'Estabeleça como os riscos do projeto serão identificados, analisados, respondidos e monitorados, incluindo o uso de técnicas de análise de risco e planos de contingência.',
        procurementManagementPlan:
          'Descreva como os processos de aquisição serão conduzidos, incluindo seleção de fornecedores, contratação e gerenciamento de contratos.',
        stakeholderEngagementPlan:
          'Defina como os stakeholders serão identificados, analisados e envolvidos ao longo do projeto, incluindo comunicação e estratégias de engajamento.',
        scopeBaseline:
          'Inclua o escopo detalhado do projeto, com a Estrutura Analítica do Projeto (EAP) e a declaração do escopo.',
        scheduleBaseline:
          'Estabeleça o cronograma de referência aprovado, que será usado para medir e controlar o progresso do projeto.',
        costBaseline:
          'Defina a linha de base de custo aprovada, que será usada para monitorar e controlar os custos do projeto.',
        changeManagementPlan:
          'Descreva como as mudanças no projeto serão gerenciadas, incluindo processos de solicitação, análise, aprovação e implementação de mudanças.',
        configurationManagementPlan:
          'Estabeleça como as versões e configurações de itens entregáveis serão controladas e rastreadas durante o projeto.',
        performanceMeasurementBaseline:
          'Combine as linhas de base de escopo, cronograma e custo para criar uma linha de base de desempenho, que será usada para avaliar o progresso e desempenho do projeto.',
        projectLifeCycle:
          'Descreva as fases do ciclo de vida do projeto e como elas serão conduzidas, desde a iniciação até o encerramento.',
        developmentApproach:
          'Defina a abordagem de desenvolvimento a ser seguida no projeto, como metodologias tradicionais (cascata), ágeis, híbridas ou outras, de acordo com os requisitos e as características do projeto. A abordagem escolhida deve ser compatível com a cultura da organização e a natureza do projeto.',
        managementReviews:
          'Estabeleça um processo para revisões de gerenciamento periódicas que envolvam a equipe do projeto e os principais stakeholders. Essas revisões devem abordar o progresso do projeto, a eficácia das abordagens adotadas, a identificação de problemas e a discussão de melhorias ou ajustes necessários. Defina a frequência dessas revisões e os critérios para avaliar o desempenho do projeto durante essas sessões.',
      },
      new: {
        title: 'New  Project Management Plan',
      },
      view: {
        title: 'View  Project Management Plan',
      },
      importer: {
        title: 'Import ProjectManagementPlans',
        fileName: 'projectManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    requirementsManagementPlan: {
      name: 'requirementsManagementPlan',
      label: 'RequirementsManagementPlans',
      menu: 'RequirementsManagementPlans',
      exporterFileName: 'requirementsManagementPlan_export',
      list: {
        menu: 'RequirementsManagementPlans',
        title: 'RequirementsManagementPlans',
      },
      create: {
        success: 'Requirements Management Plan successfully saved',
      },
      update: {
        success: 'Requirements Management Plan successfully saved',
      },
      destroy: {
        success: 'Requirements Management Plan successfully deleted',
      },
      destroyAll: {
        success: 'Requirements Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit Requirements Management Plan',
      },
      fields: {
        id: 'Id',
        requirementsActivities:
          'How requirements activities will be planned, tracked, and reported',
        configurationManagementActivities:
          'Configuration management activities',
        requirementsPrioritizationProcess:
          'Requirements prioritization process',
        metricsRationale:
          'Metrics that will be used and the rationale for using them',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        requirementsActivities:
          'Essa seção descreve como as atividades de coleta, análise, documentação e validação dos requisitos serão planejadas e realizadas. Além disso, explica como o progresso dessas atividades será monitorado e reportado aos stakeholders ao longo do projeto.',
        configurationManagementActivities:
          'As atividades de gerenciamento de configuração referem-se ao controle e rastreamento de mudanças nos requisitos do projeto. Isso inclui a identificação de versões de requisitos, o registro de alterações e a garantia de que as mudanças sejam aprovadas e comunicadas adequadamente.',
        requirementsPrioritizationProcess:
          'O processo de priorização de requisitos é uma abordagem sistemática para classificar e ordenar os requisitos do projeto com base em sua importância, riscos, custos e outros fatores relevantes. Isso ajuda a garantir que recursos e esforços sejam alocados de maneira eficaz e eficiente.',
        metricsRationale:
          'Essa seção identifica as métricas que serão usadas para medir o progresso e a qualidade dos requisitos e justifica por que essas métricas são apropriadas. ',
      },
      new: {
        title: 'New Requirements Management Plan',
      },
      view: {
        title: 'View Requirements Management Plan',
      },
      importer: {
        title: 'Import RequirementsManagementPlans',
        fileName: 'requirementsManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    requirementDocumentation: {
      name: 'requirementDocumentation',
      label: 'RequirementDocumentations',
      menu: 'RequirementDocumentations',
      exporterFileName: 'requirementDocumentation_export',
      list: {
        menu: 'RequirementDocumentations',
        title: 'RequirementDocumentations',
      },
      create: {
        success: 'Requirement Documentation successfully saved',
      },
      update: {
        success: 'Requirement Documentation successfully saved',
      },
      destroy: {
        success: 'Requirement Documentation successfully deleted',
      },
      destroyAll: {
        success: 'Requirement Documentation(s) successfully deleted',
      },
      edit: {
        title: 'Edit Requirement Documentation',
      },
      fields: {
        id: 'Id',
        associatedID: 'Associated ID',
        businessNeeds: 'Business needs, opportunities, goals, and objectives',
        requirementDescription: 'Requirement Description',
        version: 'Version',
        phase: 'Phase',
        associatedDelivery: 'Associated Delivery',
        type: 'Type',
        requester: 'Requester',
        complexityRange: 'Complexity',
        complexity: 'Complexity',
        responsible: 'Responsible',
        validity: 'Validity',
        priority: 'Priority',
        acceptanceCriteria: 'Acceptance Criteria',
        supportingDocumentation: 'Supporting Documentation',
        requirementSituation: 'Requirement Situation',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        associatedID:
          'Um identificador único atribuído a cada requisito para facilitar o rastreamento e a referência ao longo do projeto.',
        businessNeeds:
          'Esta seção descreve os motivos por trás do requisito, como necessidades de negócios, oportunidades, metas e objetivos organizacionais que o requisito ajuda a atender.',
        requirementDescription:
          'Uma descrição detalhada do requisito, incluindo sua funcionalidade, características e quaisquer restrições ou especificações aplicáveis.',
        version:
          'A versão atual do requisito, que é atualizada sempre que ocorre uma alteração significativa no requisito.',
        phase:
          'A fase do projeto em que o requisito será tratado, como iniciação, planejamento, execução ou encerramento.',
        associatedDelivery:
          'A entrega associada ao requisito, como um produto, serviço ou resultado específico que o requisito ajudará a alcançar.',
        type: 'O tipo de requisito, como funcional (descreve o que um produto ou serviço deve fazer), não funcional (descreve como um produto ou serviço deve funcionar) ou de transição (descreve as condições para a transição de um estado atual para um estado futuro).',
        requester:
          'A pessoa, grupo ou organização que solicitou o requisito ou tem interesse nele.',
        complexity:
          'Se refere ao grau de dificuldade ou esforço necessário para implementar, testar e gerenciar um requisito específico. A complexidade pode ser afetada por vários fatores, como a natureza técnica do requisito, as interdependências com outros requisitos, a quantidade de recursos necessários e os prazos associados.',
        responsible:
          'O indivíduo ou equipe responsável pela implementação, teste e gerenciamento do requisito específico. A atribuição de responsabilidade garante que haja uma pessoa ou grupo focado no sucesso de cada requisito.',
        validity:
          'A validade de um requisito refere-se à sua relevância e alinhamento com os objetivos e necessidades do projeto. A validade ajuda a garantir que os requisitos sejam realistas, alcançáveis e contribuam para os objetivos do projeto.',
        priority:
          'A prioridade de um requisito indica sua importância relativa em comparação com os outros requisitos do projeto. A priorização ajuda a equipe do projeto a focar primeiro nos requisitos mais críticos e alocar recursos de maneira eficiente.',
        acceptanceCriteria:
          'Os critérios de aceitação são as condições que um requisito deve atender para ser considerado completo e satisfatório. Esses critérios ajudam a equipe do projeto a entender as expectativas e a garantir que o requisito seja implementado de acordo com as necessidades dos stakeholders.',
        supportingDocumentation:
          'A documentação de suporte inclui todos os documentos, referências, artefatos ou informações adicionais que ajudam a esclarecer, justificar ou fornecer contexto para um requisito específico. Isso pode incluir estudos de caso, análises de mercado, especificações técnicas, diretrizes regulatórias ou qualquer outra informação relevante que ajude a equipe do projeto a entender e implementar o requisito de maneira eficaz.',
        requirementSituation:
          'A situação do requisito descreve o estado atual do requisito em um determinado momento. Isso pode incluir informações sobre o progresso na implementação do requisito, problemas ou desafios enfrentados, alterações feitas ao requisito e quaisquer dependências ou interações com outros requisitos. Manter o controle da situação do requisito ajuda a equipe do projeto a monitorar e gerenciar o progresso dos requisitos ao longo do tempo e a adaptar-se a mudanças ou novas informações conforme necessário.',
      },
      new: {
        title: 'New Requirement Documentation',
      },
      view: {
        title: 'View Requirement Documentation',
      },
      importer: {
        title: 'Import RequirementDocumentations',
        fileName: 'requirementDocumentation_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    scopeManagementPlan: {
      name: 'scopeManagementPlan',
      label: 'ScopeManagementPlans',
      menu: 'ScopeManagementPlans',
      exporterFileName: 'scopeManagementPlan_export',
      list: {
        menu: 'ScopeManagementPlans',
        title: 'ScopeManagementPlans',
      },
      create: {
        success: 'Scope Management Plan successfully saved',
      },
      update: {
        success: 'Scope Management Plan successfully saved',
      },
      destroy: {
        success: 'Scope Management Plan successfully deleted',
      },
      destroyAll: {
        success: 'Scope Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit Scope Management Plan',
      },
      fields: {
        id: 'Id',
        projectScopeSpecificationProcess: 'Project Scope Specification Process',
        processesMaintainingWBS:
          'Processes for creating, approving, and maintaining WBS',
        deliveryAcceptanceProcess: 'Delivery acceptance process',
        scopeChangeManagementPlan: 'Scope Change Management Plan',
        processMaintained:
          'Process that establishes how the scope baseline will be approved and maintained',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        projectScopeSpecificationProcess:
          'Este processo envolve a definição e documentação das entregas, requisitos e limites do projeto. A equipe do projeto deve coletar e analisar as informações dos stakeholders para criar uma declaração de escopo detalhada e abrangente.',
        processesMaintainingWBS:
          'A Estrutura Analítica do Projeto (WBS) é uma ferramenta usada para decompor o trabalho do projeto em componentes menores e gerenciáveis. Este item descreve os processos de criação, aprovação e manutenção da WBS, incluindo as responsabilidades, métodos e ferramentas envolvidos.',
        deliveryAcceptanceProcess:
          'O processo de aceitação de entrega é o método pelo qual as entregas do projeto são revisadas, validadas e formalmente aceitas pelos stakeholders. Isso garante que as entregas atendam aos requisitos e critérios de aceitação estabelecidos.',
        scopeChangeManagementPlan:
          'O plano de gerenciamento de mudanças de escopo define como as mudanças no escopo do projeto serão identificadas, analisadas, aprovadas e implementadas. Isso inclui o processo de solicitação de mudança, os papéis e responsabilidades dos membros da equipe envolvidos e as etapas para avaliar e aprovar as mudanças propostas. O objetivo é garantir que todas as mudanças de escopo sejam controladas e gerenciadas adequadamente para minimizar os impactos negativos no projeto.',
        processMaintained:
          'O processo que estabelece como a linha de base do escopo será aprovada e mantida envolve a criação de um ponto de referência acordado e documentado para o escopo do projeto. Isso inclui a Declaração de Escopo do Projeto, a Estrutura Analítica do Projeto (WBS) e o Dicionário da WBS. O processo descreve como a linha de base do escopo será aprovada pelos stakeholders e como será atualizada e mantida ao longo do projeto. As atualizações',
      },
      new: {
        title: 'New Scope Management Plan',
      },
      view: {
        title: 'View Scope Management Plan',
      },
      importer: {
        title: 'Import ScopeManagementPlans',
        fileName: 'scopeManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    scheduleManagementPlan: {
      name: 'scheduleManagementPlan',
      label: 'ScheduleManagementPlans',
      menu: 'ScheduleManagementPlans',
      exporterFileName: 'scheduleManagementPlan_export',
      list: {
        menu: 'ScheduleManagementPlans',
        title: 'ScheduleManagementPlans',
      },
      create: {
        success: 'Schedule Management Plan successfully saved',
      },
      update: {
        success: 'Schedule Management Plan successfully saved',
      },
      destroy: {
        success: 'Schedule Management Plan successfully deleted',
      },
      destroyAll: {
        success: 'Schedule Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit Schedule Management Plan',
      },
      fields: {
        id: 'Id',
        projectScheduleModelDevelopment: 'Project Schedule Model Development',
        levelAccuracy: 'Level of Accuracy',
        organizationalProceduresLinks: 'Organizational Procedures Links',
        projectScheduleModelMaintenance: 'Project Schedule Model Maintenance',
        performanceMeasurementRules: 'Performance Measurement Rules',
        reportingFormats: 'Reporting Formats',
        releaseIterationLength: 'Release and Iteration Length',
        controlThresholds: 'Control Thresholds',
        unitsMeasure: 'Units of Measure',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        projectScheduleModelDevelopment:
          'Descreve a abordagem e as ferramentas para desenvolver o modelo de cronograma do projeto, que é uma representação visual ou tabular das atividades, durações, sequenciamento e recursos do projeto.',
        levelAccuracy:
          'Refere-se ao grau de precisão necessário para as estimativas de duração e recursos no cronograma do projeto, o que ajuda a gerenciar as expectativas e a incerteza.',
        organizationalProceduresLinks:
          'São as conexões entre o Schedule Management Plan e os procedimentos organizacionais existentes, como processos de aprovação, revisões e comunicação.',
        projectScheduleModelMaintenance:
          'Detalha o processo para manter e atualizar o modelo de cronograma do projeto à medida que o projeto avança e as mudanças ocorrem.',
        performanceMeasurementRules:
          'Define as regras para medir o desempenho do projeto em relação ao cronograma, como Earned Value Management (EVM) ou outras métricas relevantes.',
        reportingFormats:
          'Especifica os formatos de relatórios usados para comunicar informações do cronograma do projeto aos stakeholders, como gráficos de Gantt, tabelas, gráficos de marcos ou relatórios de status. Os formatos de relatórios devem ser claros e compreensíveis para garantir uma comunicação eficiente das informações do cronograma.',
        releaseIterationLength:
          'Aplica-se a projetos ágeis e descreve a duração das versões (releases) e iterações (sprints) do projeto. Isso ajuda a equipe do projeto a planejar e gerenciar o trabalho dentro de blocos de tempo específicos e a fornecer entregas incrementais.',
        controlThresholds:
          'São os limites predefinidos de variação aceitável entre o cronograma planejado e o cronograma real do projeto. Se a variação exceder esses limites, a equipe do projeto deve investigar a causa e tomar medidas corretivas. Os limites de controle ajudam a monitorar o desempenho do cronograma e a gerenciar os riscos associados.',
        unitsMeasure:
          'As unidades de medida são usadas para expressar durações, esforço e recursos no cronograma do projeto. Isso pode incluir horas, dias, semanas ou outras unidades de tempo ou esforço relevantes para o projeto. Definir unidades de medida consistentes ajuda a garantir que todos os membros da equipe e stakeholders compreendam e se comuniquem efetivamente sobre o cronograma e os recursos do projeto. Além disso, isso facilita a análise, comparação e agregação de dados de cronograma ao longo do projeto.',
      },
      new: {
        title: 'New Schedule Management Plan',
      },
      view: {
        title: 'View Schedule Management Plan',
      },
      importer: {
        title: 'Import ScheduleManagementPlans',
        fileName: 'scheduleManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    projectScopeStatement: {
      name: 'projectScopeStatement',
      label: 'ProjectScopeStatements',
      menu: 'ProjectScopeStatements',
      exporterFileName: 'projectScopeStatement_export',
      list: {
        menu: 'ProjectScopeStatements',
        title: 'ProjectScopeStatements',
      },
      create: {
        success: 'Project Scope Statement successfully saved',
      },
      update: {
        success: 'Project Scope Statement successfully saved',
      },
      destroy: {
        success: 'Project Scope Statement successfully deleted',
      },
      destroyAll: {
        success: 'Project Scope Statement(s) successfully deleted',
      },
      edit: {
        title: 'Edit Project Scope Statement',
      },
      fields: {
        id: 'Id',
        productScopeDescription: 'Product Scope Description',
        acceptanceCriteria: 'Acceptance Criteria',
        deliverables: 'Deliverables',
        projectExclusions: 'Project Exclusions',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Project Scope Statement',
      },
      view: {
        title: 'View Project Scope Statement',
      },
      importer: {
        title: 'Import ProjectScopeStatements',
        fileName: 'projectScopeStatement_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    workbreakdownStructure: {
      name: 'workbreakdownStructure',
      label: 'WorkbreakdownStructures',
      menu: 'WorkbreakdownStructures',
      exporterFileName: 'workbreakdownStructure_export',
      list: {
        menu: 'WorkbreakdownStructures',
        title: 'WorkbreakdownStructures',
      },
      create: {
        success: 'Work Breakdown Structure successfully saved',
      },
      update: {
        success: 'Work Breakdown Structure successfully saved',
      },
      destroy: {
        success: 'Work Breakdown Structure successfully deleted',
      },
      destroyAll: {
        success: 'Work Breakdown Structure(s) successfully deleted',
      },
      edit: {
        title: 'Edit Work Breakdown Structure',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        arquivo: 'Arquivo',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Work Breakdown Structure',
      },
      view: {
        title: 'View Work Breakdown Structure',
      },
      importer: {
        title: 'Import WorkbreakdownStructures',
        fileName: 'workbreakdownStructure_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    scheduleNetworkDiagram: {
      name: 'scheduleNetworkDiagram',
      label: 'ScheduleNetworkDiagrams',
      menu: 'ScheduleNetworkDiagrams',
      exporterFileName: 'scheduleNetworkDiagram_export',
      list: {
        menu: 'ScheduleNetworkDiagrams',
        title: 'ScheduleNetworkDiagrams',
      },
      create: {
        success: 'Schedule Network Diagram successfully saved',
      },
      update: {
        success: 'Schedule Network Diagram successfully saved',
      },
      destroy: {
        success: 'Schedule Network Diagram successfully deleted',
      },
      destroyAll: {
        success: 'Schedule Network Diagram(s) successfully deleted',
      },
      edit: {
        title: 'Edit Schedule Network Diagram',
      },
      fields: {
        id: 'Id',
        activityName: 'Activity Name',
        predecessorActivity: 'Predecessor Activity',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        predecessorActivity: {
          'Finish-to-Start(FS)': 'Finish-to-Start(FS)',
          'Finish-to-Finish(FF)': 'Finish-to-Finish(FF)',
          'Start-to-Start(SS)': 'Start-to-Start(SS)',
          'Start-to-Finish(SF)': 'Start-to-Finish(SF)',
        },
      },
      placeholders: {},
      hints: {
        activityName:
          'É o nome da atividade que deve ser realizada para concluir o projeto. Essas atividades são listadas em uma ordem lógica para formar uma rede de atividades.',
        predecessorActivity:
          'Lead e Lag são dois termos usados para descrever o tempo entre o término de uma atividade e o início da próxima. O Lead é a antecipação do início de uma atividade, enquanto o Lag é o atraso no início da próxima atividade. O Lead e o Lag são usados para ajudar a gerenciar as dependências entre atividades e evitar atrasos no cronograma do projeto.',
      },
      new: {
        title: 'New Schedule Network Diagram',
      },
      view: {
        title: 'View Schedule Network Diagram',
      },
      importer: {
        title: 'Import ScheduleNetworkDiagrams',
        fileName: 'scheduleNetworkDiagram_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    activityList: {
      name: 'activityList',
      label: 'ActivityLists',
      menu: 'ActivityLists',
      exporterFileName: 'activityList_export',
      list: {
        menu: 'ActivityLists',
        title: 'ActivityLists',
      },
      create: {
        success: 'Activity List successfully saved',
      },
      update: {
        success: 'Activity List successfully saved',
      },
      destroy: {
        success: 'Activity List successfully deleted',
      },
      destroyAll: {
        success: 'Activity List(s) successfully deleted',
      },
      edit: {
        title: 'Edit Activity List',
      },
      fields: {
        id: 'Id',
        activityLabel: 'Activity Label',
        milestone: 'Milestone',
        activityName: 'Activity Name',
        projectPhase: 'Project Phase',
        wBSId: 'WBSId',
        activityDescription: 'Activity Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        activityLabel:
          'É um identificador único atribuído a cada atividade do projeto para fins de rastreamento e referência. É comum utilizar letras, números ou uma combinação de ambos para criar o rótulo.',
        milestone:
          'É um evento significativo que marca a conclusão de uma fase importante do projeto ou a realização de um objetivo crítico. As marcos não são atividades que consomem tempo ou recursos e geralmente são representados por um símbolo específico em um gráfico de Gantt.',
        activityName:
          'É o nome descritivo atribuído a cada atividade do projeto para identificar claramente o que será realizado. O nome da atividade deve ser claro e conciso e deve incluir informações suficientes para que a equipe do projeto possa entender completamente o que precisa ser feito.',
        projectPhase:
          'É uma divisão do projeto em etapas que representam um período específico de tempo ou um conjunto de atividades relacionadas. As fases do projeto podem ser definidas por marcos significativos ou pela conclusão de um conjunto específico de atividades.',
        wBSId:
          'Código de identificação exclusivo atribuído a cada elemento da Estrutura Analítica do Projeto (EAP) ou Work Breakdown Structure (WBS) que representa uma divisão hierárquica do projeto em partes menores e gerenciáveis.',
        activityDescription:
          'É uma descrição detalhada da atividade do projeto que inclui informações sobre o que será feito, por quem, com que recursos e dentro de que prazo. A descrição da atividade deve ser clara e completa o suficiente para que a equipe do projeto possa entender o escopo da atividade e como ela contribui para o sucesso geral do projeto.',
      },
      new: {
        title: 'New Activity List',
      },
      view: {
        title: 'View Activity List',
      },
      importer: {
        title: 'Import ActivityLists',
        fileName: 'activityList_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    resource: {
      name: 'resource',
      label: 'Resources',
      menu: 'Resources',
      exporterFileName: 'resource_export',
      list: {
        menu: 'Resources',
        title: 'Resources',
      },
      create: {
        success: 'Resource successfully saved',
      },
      update: {
        success: 'Resource successfully saved',
      },
      destroy: {
        success: 'Resource successfully deleted',
      },
      destroyAll: {
        success: 'Resource(s) successfully deleted',
      },
      edit: {
        title: 'Edit Resource',
      },
      fields: {
        id: 'Id',
        resourceName: 'Resource Name',
        resourceDescription: 'Resource Description',
        resourceCostperUnitRange: 'Resource Cost per Unit',
        resourceCostperUnit: 'Resource Cost per Unit',
        resourceType: 'Resource Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        resourceName:
          'É o nome do recurso necessário para concluir uma determinada atividade do projeto. Pode ser um nome de pessoa, nome de equipamento, material ou outra coisa que seja necessária para realizar a atividade.',
        resourceDescription:
          'É uma descrição detalhada do recurso necessário para realizar a atividade do projeto. Inclui informações sobre a função do recurso, suas características, especificações técnicas e outras informações relevantes.',
        resourceCostperUnit:
          'É o custo do recurso por unidade utilizada na atividade do projeto. Isso pode ser o custo horário, diário ou semanal, dependendo da forma como o recurso é utilizado. É importante considerar o custo do recurso ao elaborar o orçamento do projeto.',
        resourceType:
          'É a categoria ou tipo de recurso necessário para concluir a atividade do projeto. Pode ser uma pessoa, equipamento, material ou outro tipo de recurso. A identificação do tipo de recurso é importante para garantir que o recurso certo seja alocado para a atividade correta e para garantir que as necessidades de recursos do projeto sejam atendidas de forma adequada.',
      },
      new: {
        title: 'New Resource',
      },
      view: {
        title: 'View Resource',
      },
      importer: {
        title: 'Import Resources',
        fileName: 'resource_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    resourceRequirements: {
      name: 'resourceRequirements',
      label: 'ResourceRequirements',
      menu: 'ResourceRequirements',
      exporterFileName: 'resourceRequirements_export',
      list: {
        menu: 'ResourceRequirements',
        title: 'ResourceRequirements',
      },
      create: {
        success: 'Resource Requirements successfully saved',
      },
      update: {
        success: 'Resource Requirements successfully saved',
      },
      destroy: {
        success: 'Resource Requirements successfully deleted',
      },
      destroyAll: {
        success: 'Resource Requirements(s) successfully deleted',
      },
      edit: {
        title: 'Edit Resource Requirements',
      },
      fields: {
        id: 'Id',
        activity: 'Activity',
        resource: 'Resource',
        requiredAmountResource: 'Required Amount of Resource',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Resource Requirements',
      },
      view: {
        title: 'View Resource Requirements',
      },
      importer: {
        title: 'Import ResourceRequirements',
        fileName: 'resourceRequirements_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    activityDurationEstimates: {
      name: 'activityDurationEstimates',
      label: 'ActivityDurationEstimates',
      menu: 'ActivityDurationEstimates',
      exporterFileName: 'activityDurationEstimates_export',
      list: {
        menu: 'ActivityDurationEstimates',
        title: 'ActivityDurationEstimates',
      },
      create: {
        success: 'Activity Duration Estimates successfully saved',
      },
      update: {
        success: 'Activity Duration Estimates successfully saved',
      },
      destroy: {
        success: 'Activity Duration Estimates successfully deleted',
      },
      destroyAll: {
        success: 'Activity Duration Estimates(s) successfully deleted',
      },
      edit: {
        title: 'Edit Activity Duration Estimates',
      },
      fields: {
        id: 'Id',
        activityName: 'Activity Name',
        estimatedDurationRange: 'Estimated Duration in Hours',
        estimatedDuration: 'Estimated Duration in Hours',
        estimatedStartDateRange: 'Estimated Start Date',
        estimatedStartDate: 'Estimated Start Date',
        estimatedEndDateRange: 'Estimated End Date',
        estimatedEndDate: 'Estimated End Date',
        performedDurationRange: 'Performed Duration in Hours',
        performedDuration: 'Performed Duration in Hours',
        performedStartDateRange: 'Performed Start Date',
        performedStartDate: 'Performed Start Date',
        performedEndDateRange: 'Performed End Date',
        performedEndDate: 'Performed End Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Activity Duration Estimates',
      },
      view: {
        title: 'View Activity Duration Estimates',
      },
      importer: {
        title: 'Import ActivityDurationEstimates',
        fileName: 'activityDurationEstimates_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stakeholderCalendars: {
      name: 'stakeholderCalendars',
      label: 'StakeholderCalendars',
      menu: 'StakeholderCalendars',
      exporterFileName: 'stakeholderCalendars_export',
      list: {
        menu: 'StakeholderCalendars',
        title: 'StakeholderCalendars',
      },
      create: {
        success: 'Stakeholder Calendars successfully saved',
      },
      update: {
        success: 'Stakeholder Calendars successfully saved',
      },
      destroy: {
        success: 'Stakeholder Calendars successfully deleted',
      },
      destroyAll: {
        success: 'Stakeholder Calendars(s) successfully deleted',
      },
      edit: {
        title: 'Edit Stakeholder Calendars',
      },
      fields: {
        id: 'Id',
        activity: 'Activity',
        stakeholder: 'Stakeholder',
        allocationStartRange: 'Allocation Start',
        allocationStart: 'Allocation Start',
        allocationEndsRange: 'Allocation Ends',
        allocationEnds: 'Allocation Ends',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Stakeholder Calendars',
      },
      view: {
        title: 'View Stakeholder Calendars',
      },
      importer: {
        title: 'Import StakeholderCalendars',
        fileName: 'stakeholderCalendars_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    costManagementPlan: {
      name: 'costManagementPlan',
      label: 'CostManagementPlans',
      menu: 'CostManagementPlans',
      exporterFileName: 'costManagementPlan_export',
      list: {
        menu: 'CostManagementPlans',
        title: 'CostManagementPlans',
      },
      create: {
        success: 'Cost Management Plan successfully saved',
      },
      update: {
        success: 'Cost Management Plan successfully saved',
      },
      destroy: {
        success: 'Cost Management Plan successfully deleted',
      },
      destroyAll: {
        success: 'Cost Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit Cost Management Plan',
      },
      fields: {
        id: 'Id',
        processesManagingProjectCosts: 'Processes for Managing Project Costs',
        levelAccuracy: 'Level of Accuracy',
        organizationalProceduresLinks: 'Organizational Procedures Links',
        rulesPerformanceMeasurement: 'Rules of Performance Measurement',
        unitsMeasureUsed: 'Units of Measure to be Used',
        levelPrecision: 'Level of Precision',
        controlThresholds: 'Control Thresholds',
        reportingFormats: 'Reporting Formats',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        processesManagingProjectCosts:
          'São os processos e técnicas que serão utilizados para gerenciar os custos do projeto, como estimativas de custos, orçamentação, controle de custos e relatórios financeiros.',
        levelAccuracy:
          'Refere-se ao grau de precisão que será utilizado na estimativa dos custos do projeto. Pode ser definido como um valor absoluto ou um intervalo, como +/- 10%.',
        organizationalProceduresLinks:
          'Refere-se às políticas e procedimentos da organização que são relevantes para o gerenciamento de custos do projeto. Isso inclui a estrutura organizacional, autoridade para aprovação de despesas, sistemas de contabilidade e outros processos relacionados a custos.',
        rulesPerformanceMeasurement:
          'Define como o desempenho do projeto será medido em relação aos custos e ao valor agregado. Isso inclui o estabelecimento de métricas de desempenho, como o índice de desempenho de custo e o índice de desempenho de cronograma.',
        unitsMeasureUsed:
          'Refere-se às unidades de medida que serão usadas para estimar e controlar os custos do projeto. Por exemplo, horas de trabalho, dias de trabalho, unidades de material, etc.',
        levelPrecision:
          'Define o nível de precisão necessário para as estimativas de custo e o orçamento do projeto. Isso pode variar de acordo com o tipo e a complexidade do projeto.',
        controlThresholds:
          'Define os limites de custos que acionam ações de controle, como revisões de orçamento, mudanças no escopo ou outras ações corretivas.  Additional Details: São outros detalhes relevantes para o gerenciamento de custos do projeto, como considerações de risco, contingências e fatores externos que possam afetar o orçamento.',
        reportingFormats:
          'Define o formato e o conteúdo dos relatórios financeiros que serão usados para comunicar o desempenho financeiro do projeto. Isso pode incluir relatórios resumidos para a equipe do projeto e relatórios detalhados para a alta gerência.',
      },
      new: {
        title: 'New Cost Management Plan',
      },
      view: {
        title: 'View Cost Management Plan',
      },
      importer: {
        title: 'Import CostManagementPlans',
        fileName: 'costManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    costEstimates: {
      name: 'costEstimates',
      label: 'CostEstimates',
      menu: 'CostEstimates',
      exporterFileName: 'costEstimates_export',
      list: {
        menu: 'CostEstimates',
        title: 'CostEstimates',
      },
      create: {
        success: 'Cost Estimates successfully saved',
      },
      update: {
        success: 'Cost Estimates successfully saved',
      },
      destroy: {
        success: 'Cost Estimates successfully deleted',
      },
      destroyAll: {
        success: 'Cost Estimates(s) successfully deleted',
      },
      edit: {
        title: 'Edit Cost Estimates',
      },
      fields: {
        id: 'Id',
        estimatedCost: 'Estimated Cost',
        cumulativeEstimatedCostRange: 'Cumulative Estimated Cost',
        cumulativeEstimatedCost: 'Cumulative Estimated Cost',
        replantedCostRange: 'ReplantedCost',
        replantedCost: 'ReplantedCost',
        contingencyReserveRange: 'Contingency Reserve',
        contingencyReserve: 'Contingency Reserve',
        sumWorkPackagesRange: 'Sum of Work Packages',
        sumWorkPackages: 'Sum of Work Packages',
        contingencyReservePackagesRange: 'Contingency Reserve of Packages',
        contingencyReservePackages: 'Contingency Reserve of Packages',
        baseline: 'Baseline',
        budgetRange: 'Budget',
        budget: 'Budget',
        cumulativeReplantedCostRange: 'Cumulative Replanted Cost',
        cumulativeReplantedCost: 'Cumulative Replanted Cost',
        realCostRange: 'Real Cost',
        realCost: 'Real Cost',
        cumulativeRealCostRange: 'Cumulative Real Cost',
        cumulativeRealCost: 'Cumulative Real Cost',
        managementReserveRange: 'Management Reserve',
        managementReserve: 'Management Reserve',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        estimatedCost:
          'É o custo previsto para concluir uma determinada atividade, pacote de trabalho ou fase do projeto, com base em uma análise de custo e tempo.',
        sumWorkPackages:
          ' É o custo total previsto para concluir todos os pacotes de trabalho de um projeto.',
        contingencyReservePackages:
          'É o valor adicional incluído no orçamento de um pacote de trabalho específico para cobrir possíveis riscos ou incertezas.',
        budget:
          'É o valor total disponível para gastar em um projeto ou fase específica, incluindo custos diretos e indiretos.',
        cumulativeReplantedCost:
          'É o custo total revisado previsto para concluir todas as atividades, pacotes de trabalho ou fases do projeto, até o momento atual.',
        realCost:
          'É o custo real incorrido para concluir uma atividade, pacote de trabalho ou fase do projeto.',
        cumulativeRealCost:
          'É o custo total real incorrido para concluir todas as atividades, pacotes de trabalho ou fases do projeto, até o momento atual.',
        managementReserve:
          ' É um valor adicional incluído no orçamento do projeto para cobrir mudanças imprevistas ou necessidades adicionais que possam surgir durante o projeto. É geralmente gerenciado pela alta gerência do projeto e é usado para mudanças que estão fora do escopo do projeto original.',
      },
      new: {
        title: 'New Cost Estimates',
      },
      view: {
        title: 'View Cost Estimates',
      },
      importer: {
        title: 'Import CostEstimates',
        fileName: 'costEstimates_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    qualityManagementPlan: {
      name: 'qualityManagementPlan',
      label: 'QualityManagementPlans',
      menu: 'QualityManagementPlans',
      exporterFileName: 'qualityManagementPlan_export',
      list: {
        menu: 'QualityManagementPlans',
        title: 'QualityManagementPlans',
      },
      create: {
        success: 'QualityManagementPlan successfully saved',
      },
      update: {
        success: 'QualityManagementPlan successfully saved',
      },
      destroy: {
        success: 'QualityManagementPlan successfully deleted',
      },
      destroyAll: {
        success: 'QualityManagementPlan(s) successfully deleted',
      },
      edit: {
        title: 'Edit QualityManagementPlan',
      },
      fields: {
        id: 'Id',
        qualityStandardsProject:
          'Quality Standards that will be used by the Project',
        qualityObjectivesProject: 'Quality Objectives of the Project',
        qualityRoles: 'Quality Roles and Responsibilities',
        projectDeliverablesQR:
          'Project Deliverables and Processes Subject to Quality Review',
        qualityControl:
          'Quality Control and Quality Management Activities Planned for the Project',
        qualityToolsUsed: 'Quality Tools that will be used for the Project',
        majorProceduresRelevant: 'Major Procedures Relevant for the Project',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        qualityStandardsProject:
          'São os padrões de qualidade que serão aplicados ao projeto. Esses padrões podem ser definidos internamente pela organização ou podem ser padrões externos, como normas ISO ou padrões da indústria.',
        qualityObjectivesProject:
          'São as metas de qualidade estabelecidas para o projeto. Essas metas podem incluir requisitos de desempenho, prazos, conformidade regulatória ou outras medidas de sucesso do projeto.',
        qualityRoles:
          'São as responsabilidades designadas para a equipe do projeto em relação ao gerenciamento da qualidade. Isso inclui papéis como o gerente de qualidade, os membros da equipe de controle de qualidade e os responsáveis pela execução de atividades específicas de qualidade.',
        projectDeliverablesQR:
          ' São os produtos e processos do projeto que estão sujeitos a revisões de qualidade para garantir que atendam aos padrões e metas de qualidade definidos. Isso pode incluir revisões de documentos, testes de produto e inspeções de processo.',
        qualityControl:
          ' São as atividades planejadas para garantir que os produtos e processos do projeto atendam aos padrões e metas de qualidade definidos. Isso pode incluir testes de produto, inspeções de processo, revisões de documentos e outras atividades de controle de qualidade.',
        qualityToolsUsed:
          'São as ferramentas e técnicas que serão usadas para gerenciar e monitorar a qualidade do projeto. Isso pode incluir ferramentas de análise estatística, software de controle de qualidade, checklists de qualidade e outras ferramentas relevantes.',
        majorProceduresRelevant:
          'São os principais procedimentos relevantes para o gerenciamento da qualidade do projeto. Isso pode incluir procedimentos para revisão de documentos, testes de produto, inspeções de processo e outras atividades de gerenciamento de qualidade.',
      },
      new: {
        title: 'New QualityManagementPlan',
      },
      view: {
        title: 'View QualityManagementPlan',
      },
      importer: {
        title: 'Import QualityManagementPlans',
        fileName: 'qualityManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    resourceManagementPlan: {
      name: 'resourceManagementPlan',
      label: 'ResourceManagementPlans',
      menu: 'ResourceManagementPlans',
      exporterFileName: 'resourceManagementPlan_export',
      list: {
        menu: 'ResourceManagementPlans',
        title: 'ResourceManagementPlans',
      },
      create: {
        success: 'Resource Management Plan successfully saved',
      },
      update: {
        success: 'Resource Management Plan successfully saved',
      },
      destroy: {
        success: 'Resource Management Plan successfully deleted',
      },
      destroyAll: {
        success: 'Resource Management Plan(s) successfully deleted',
      },
      edit: {
        title: 'Edit Resource Management Plan',
      },
      fields: {
        id: 'Id',
        rolesResponsibilities: 'Roles and Responsibilities',
        projectOrganizationCharts: 'ProjectOrganizationCharts',
        teamDevelopment: 'Team Development',
        identificationResources: 'Identification of Resources',
        projectResourceManagement: 'Project Team Resource Management',
        training: 'Training',
        resourceControl: 'Resource Control',
        recognitionPlan: 'Recognition Plan',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        rolesResponsibilities:
          'Define os papéis e responsabilidades da equipe do projeto em relação à gestão de recursos. Isso pode incluir responsabilidades para gerenciar e alocar recursos, bem como responsabilidades para garantir que os recursos estejam sendo usados de forma eficaz.',
        projectOrganizationCharts:
          ' Mostra a estrutura organizacional do projeto, incluindo as posições da equipe, seus níveis hierárquicos e suas relações funcionais. É uma ferramenta útil para definir papéis e responsabilidades.',
        teamDevelopment:
          'É o processo de desenvolver a equipe do projeto, incluindo treinamento e desenvolvimento de habilidades, para garantir que os membros da equipe estejam preparados para realizar suas funções de maneira eficaz.',
        identificationResources:
          'É o processo de identificar os recursos necessários para o projeto, incluindo equipamentos, materiais, habilidades e conhecimentos específicos.  Acquiring Resources: É o processo de adquirir os recursos necessários para o projeto, seja através da compra, aluguel ou contratação de pessoas ou equipamentos.',
        projectResourceManagement:
          'É o processo de gerenciar e alocar recursos para as atividades do projeto, incluindo a definição de prioridades e o acompanhamento do uso de recursos.',
        training:
          'É o processo de fornecer treinamento e desenvolvimento de habilidades para a equipe do projeto, a fim de garantir que eles estejam preparados para realizar suas funções de maneira eficaz.',
        resourceControl:
          'É o processo de monitorar e controlar o uso de recursos do projeto, a fim de garantir que estejam sendo utilizados de forma eficiente e eficaz.',
        recognitionPlan:
          'É um plano para reconhecer e recompensar a equipe do projeto pelo seu desempenho e contribuição para o sucesso do projeto. Pode incluir reconhecimento financeiro ou não financeiro, como elogios, prêmios ou oportunidades de desenvolvimento de carreira',
      },
      new: {
        title: 'New Resource Management Plan',
      },
      view: {
        title: 'View Resource Management Plan',
      },
      importer: {
        title: 'Import ResourceManagementPlans',
        fileName: 'resourceManagementPlan_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    resourceBreakdownStructure: {
      name: 'resourceBreakdownStructure',
      label: 'ResourceBreakdownStructures',
      menu: 'ResourceBreakdownStructures',
      exporterFileName: 'resourceBreakdownStructure_export',
      list: {
        menu: 'ResourceBreakdownStructures',
        title: 'ResourceBreakdownStructures',
      },
      create: {
        success: 'Resource Breakdown Structure successfully saved',
      },
      update: {
        success: 'Resource Breakdown Structure successfully saved',
      },
      destroy: {
        success: 'Resource Breakdown Structure successfully deleted',
      },
      destroyAll: {
        success: 'Resource Breakdown Structure(s) successfully deleted',
      },
      edit: {
        title: 'Edit Resource Breakdown Structure',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Resource Breakdown Structure',
      },
      view: {
        title: 'View Resource Breakdown Structure',
      },
      importer: {
        title: 'Import ResourceBreakdownStructures',
        fileName: 'resourceBreakdownStructure_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount: 'Already have an account? Sign in.',
    createAnAccount: `Don't have an account? Create one.`,
    social: {
      header: 'or sign in with Social Media',
      signinWithGoogle: 'Sign in with Google',
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount: 'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message: 'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess: 'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists: 'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url: 'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd: 'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint: 'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error: 'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`
      },
    },
    string: {
      length: '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches: '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success: 'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm: 'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel: 'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
}

export default en
