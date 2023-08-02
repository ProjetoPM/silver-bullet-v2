const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },
  api: {
    menu: 'API',
  },
  entities: {
    projectCharter: {
        name: 'projectCharter',
        label: 'ProjectCharters',
        menu: 'ProjectCharters',
        exporterFileName: 'exportacion_projectCharter',
        list: {
          menu: 'ProjectCharters',
          title: 'ProjectCharters',
        },
        create: {
          success: 'Project Charter guardado con éxito',
        },
        update: {
          success: 'Project Charter guardado con éxito',
        },
        destroy: {
          success: 'Project Charter eliminado con éxito',
        },
        destroyAll: {
          success: 'Project Charter(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Project Charter',
        },
        fields: {
          id: 'Id',
          'projectName': 'Project Name',
          'highLevelProjectDescription': 'High-Level Project Description',
          'startdateRange': 'Start Date',
          'startdate': 'Start Date',
          'enddateRange': 'End Date',
          'enddate': 'End Date',
          'projectPurpose': 'Project Purpose',
          'measurableProjectObjectives': 'Measurable Project Objectives',
          'keyBenefits': 'Key Benefits',
          'highlevelRequirements': 'High-Level Requirements',
          'boundaries': 'Boundaries',
          'overallProjectRisk': 'Overall Project Risk',
          'summaryMilestoneSchedule': 'Summary Milestone Schedule',
          'preapprovedFinancialResources': 'Preapproved Financial Resources',
          'projectApprovalRequirements': 'Project Approval Requirements',
          'successCriteria': 'Success Criteria',
          'projectExitCriteria': 'Project Exit Criteria',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'highLevelProjectDescription': 'Essa seção fornece uma visão geral do projeto, incluindo suas principais entregas, premissas e restrições. A dica aqui é focar em descrever os principais aspectos do projeto, mantendo uma abordagem de alto nível, sem entrar em detalhes técnicos ou operacionais.',
          'projectPurpose': 'O propósito do projeto é a razão pela qual o projeto está sendo realizado e o problema ou oportunidade que ele pretende abordar. A dica aqui é ser conciso e claro ao descrever o propósito, destacando os benefícios esperados e o valor que o projeto trará para a organização e seus stakeholders.',
          'measurableProjectObjectives': 'Os objetivos do projeto devem ser claros, mensuráveis e alinhados com as metas de negócio da organização. A dica é utilizar a abordagem SMART (Specific, Measurable, Achievable, Relevant, Time-bound) para definir os objetivos do projeto, garantindo que sejam específicos, mensuráveis, atingíveis, relevantes e limitados no tempo.',
          'keyBenefits': 'Destaque os principais benefícios que o projeto proporcionará à organização e aos stakeholders. Foque nos resultados tangíveis e intangíveis que contribuirão para o alcance das metas de negócio.',
          'highlevelRequirements': 'Identifique os principais requisitos do projeto, ou seja, as características e funções que o produto, serviço ou resultado final deve ter. Esses requisitos devem ser claros e concisos, sem entrar em detalhes técnicos.',
          'boundaries': 'Defina os limites do projeto, incluindo o escopo, o que está incluído e o que está fora do projeto. Isso ajudará a evitar o escopo inadequado e a gerenciar as expectativas dos stakeholders.',
          'overallProjectRisk': 'Identifique e descreva os principais riscos associados ao projeto, considerando aspectos como custos, prazos, recursos e qualidade. Isso ajudará a equipe a estar preparada para possíveis desafios e a desenvolver planos de contingência.',
          'summaryMilestoneSchedule': 'Apresente um cronograma resumido com as principais etapas e marcos do projeto. Isso dará uma visão geral do tempo necessário para a conclusão do projeto e ajudará no acompanhamento do progresso.',
          'preapprovedFinancialResources': 'Mencione os recursos financeiros pré-aprovados para o projeto, incluindo orçamentos e estimativas de custo. Isso garantirá que a equipe esteja ciente das limitações financeiras e possa gerenciar os recursos de forma eficiente.',
          'projectApprovalRequirements': 'Liste os requisitos necessários para obter a aprovação do projeto, como assinaturas de autoridade, revisões de qualidade e aprovações regulatórias. Isso ajudará a garantir que o projeto esteja em conformidade com as políticas e regulamentações aplicáveis.',
          'successCriteria': 'Defina os critérios de sucesso que serão utilizados para avaliar o desempenho e o resultado do projeto. Esses critérios devem ser mensuráveis e alinhados com os objetivos do projeto.',
          'projectExitCriteria': 'Estabeleça os critérios de encerramento do projeto, que determinarão quando o projeto será considerado concluído. Isso pode incluir a entrega de todas as entregas, a aceitação do cliente e a conclusão da documentação do projeto.',
        },
        new: {
          title: 'Nuevo Project Charter',
        },
        view: {
          title: 'Ver Project Charter',
        },
        importer: {
          title: 'Importar ProjectCharters',
          fileName: 'projectCharter_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    businessCase: {
        name: 'businessCase',
        label: 'BusinessCases',
        menu: 'BusinessCases',
        exporterFileName: 'exportacion_businessCase',
        list: {
          menu: 'BusinessCases',
          title: 'BusinessCases',
        },
        create: {
          success: 'Business Case guardado con éxito',
        },
        update: {
          success: 'Business Case guardado con éxito',
        },
        destroy: {
          success: 'Business Case eliminado con éxito',
        },
        destroyAll: {
          success: 'Business Case(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Business Case',
        },
        fields: {
          id: 'Id',
          'businessNeeds': 'Business Needs',
          'situationAnalysis': 'Situation Analysis',
          'recommendation': 'Recommendation',
          'evaluation': 'Evaluation',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'businessNeeds': 'Identifique e descreva as necessidades de negócio que o projeto visa atender. Foque em questões ou oportunidades que a organização enfrenta e como o projeto ajudará a resolver essas questões ou aproveitar essas oportunidades.',
          'situationAnalysis': 'Realize uma análise da situação atual da organização e do ambiente externo, considerando aspectos como mercado, concorrência, recursos e restrições. Isso ajudará a entender o contexto no qual o projeto será realizado e os desafios que podem ser enfrentados.',
          'recommendation': 'Apresente uma recomendação clara e fundamentada para a solução que o projeto irá implementar. Explique como essa solução abordará as necessidades de negócio identificadas e por que ela é a melhor opção entre as alternativas disponíveis.',
          'evaluation': 'Inclua uma avaliação dos benefícios e custos do projeto, bem como uma análise dos riscos associados. Isso pode envolver uma análise de retorno sobre o investimento (ROI), valor presente líquido (VPL) ou outros indicadores financeiros relevantes. A avaliação deve ser objetiva e baseada em dados para ajudar os tomadores de decisão a entender o valor potencial do projeto e a tomar decisões informadas sobre sua aprovação.',
        },
        new: {
          title: 'Nuevo Business Case',
        },
        view: {
          title: 'Ver Business Case',
        },
        importer: {
          title: 'Importar BusinessCases',
          fileName: 'businessCase_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    benefitsManagementPlan: {
        name: 'benefitsManagementPlan',
        label: 'BenefitsManagementPlans',
        menu: 'BenefitsManagementPlans',
        exporterFileName: 'exportacion_benefitsManagementPlan',
        list: {
          menu: 'BenefitsManagementPlans',
          title: 'BenefitsManagementPlans',
        },
        create: {
          success: 'Benefits Management Plan guardado con éxito',
        },
        update: {
          success: 'Benefits Management Plan guardado con éxito',
        },
        destroy: {
          success: 'Benefits Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: 'Benefits Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Benefits Management Plan',
        },
        fields: {
          id: 'Id',
          'targetBenefits': 'Target Benefits',
          'strategicAlignment': 'Strategic Alignment',
          'scheduleforBenefits': 'Schedule for Benefits',
          'benefitsOwner': 'Benefits Owner',
          'indicators': 'Indicators',
          'premises': 'Premises',
          'risks': 'Risks',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'targetBenefits': 'Identifique e descreva os benefícios-alvo que o projeto busca alcançar. Eles devem ser mensuráveis, específicos e alinhados com as metas organizacionais. Inclua benefícios tangíveis e intangíveis, sempre que possível.',
          'strategicAlignment': 'Demonstre como os benefícios do projeto se alinham com os objetivos estratégicos da organização. Isso ajudará a garantir que o projeto esteja contribuindo para os objetivos de longo prazo da empresa e aumentará a probabilidade de sucesso.',
          'scheduleforBenefits': 'Elabore um cronograma para a realização dos benefícios, mostrando quando cada benefício será entregue e como ele será medido. Isso ajudará a monitorar e controlar a entrega dos benefícios ao longo do ciclo de vida do projeto.',
          'benefitsOwner': 'Designe um responsável pelos benefícios, que será encarregado de garantir que os benefícios sejam entregues e que os resultados sejam medidos e reportados. Esta pessoa também deve ser responsável por lidar com quaisquer problemas ou riscos relacionados aos benefícios.',
          'indicators': 'Defina os indicadores-chave de desempenho (KPIs) que serão usados para medir os benefícios do projeto. Esses indicadores devem ser quantitativos e qualitativos, conforme apropriado, e devem ser facilmente mensuráveis e compreensíveis.',
          'premises': 'Liste as premissas e suposições feitas ao planejar os benefícios do projeto. Isso pode incluir suposições sobre o ambiente de negócios, disponibilidade de recursos e outras condições que possam afetar a entrega dos benefícios. Esteja preparado para revisar e ajustar essas premissas conforme necessário ao longo do projeto.',
          'risks': 'Identifique os riscos associados aos benefícios do projeto, incluindo possíveis desafios, obstáculos ou ameaças que possam impedir a realização dos benefícios. Desenvolva planos de mitigação de riscos para enfrentar esses riscos e garantir que os benefícios do projeto sejam alcançados.',
        },
        new: {
          title: 'Nuevo Benefits Management Plan',
        },
        view: {
          title: 'Ver Benefits Management Plan',
        },
        importer: {
          title: 'Importar BenefitsManagementPlans',
          fileName: 'benefitsManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    assumptionLog: {
        name: 'assumptionLog',
        label: 'AssumptionLogs',
        menu: 'AssumptionLogs',
        exporterFileName: 'exportacion_assumptionLog',
        list: {
          menu: 'AssumptionLogs',
          title: 'AssumptionLogs',
        },
        create: {
          success: 'Assumption Log guardado con éxito',
        },
        update: {
          success: 'Assumption Log guardado con éxito',
        },
        destroy: {
          success: 'Assumption Log eliminado con éxito',
        },
        destroyAll: {
          success: 'Assumption Log(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Assumption Log',
        },
        fields: {
          id: 'Id',
          'assumptionLog': 'Assumption Log',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'assumptionLog': 'O Assumption Log é um documento que registra suposições e premissas feitas durante um projeto. Ele auxilia na identificação, validação e gerenciamento de riscos relacionados a essas suposições, facilitando a comunicação entre os membros da equipe e stakeholders e ajudando na tomada de decisões informadas.',
        },
        new: {
          title: 'Nuevo Assumption Log',
        },
        view: {
          title: 'Ver Assumption Log',
        },
        importer: {
          title: 'Importar AssumptionLogs',
          fileName: 'assumptionLog_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    stakeholderRegistration: {
        name: 'stakeholderRegistration',
        label: 'StakeholderRegistrations',
        menu: 'StakeholderRegistrations',
        exporterFileName: 'exportacion_stakeholderRegistration',
        list: {
          menu: 'StakeholderRegistrations',
          title: 'StakeholderRegistrations',
        },
        create: {
          success: 'Stakeholder Registration guardado con éxito',
        },
        update: {
          success: 'Stakeholder Registration guardado con éxito',
        },
        destroy: {
          success: 'Stakeholder Registration eliminado con éxito',
        },
        destroyAll: {
          success: 'Stakeholder Registration(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Stakeholder Registration',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'tipo': 'Tipo',
          'mainRoleintheProject': 'Main Role in the Project',
          'organization': 'Organization',
          'positioninOrganization': 'Position in organization',
          'email': 'Email',
          'mainProjectResponsibility': 'Main Project Responsibility',
          'phone': 'Phone',
          'workplace': 'Workplace',
          'essentialRequirements': 'Essential Requirements',
          'mainExpectations': 'Main Expectations',
          'phaseofGreaterInterest': 'Phase of Greater Interest',
          'observations': 'Observations',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'tipo': {
            'External': 'External',
            'Internal': 'Internal',
          },
          'mainRoleintheProject': {
            'Stakeholder': 'Stakeholder',
            'Team': 'Team',
            'Provider': 'Provider',
            'Project manager': 'Project manager',
            'Sponsor': 'Sponsor',
            'Others': 'Others',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Stakeholder Registration',
        },
        view: {
          title: 'Ver Stakeholder Registration',
        },
        importer: {
          title: 'Importar StakeholderRegistrations',
          fileName: 'stakeholderRegistration_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    projectManagementPlan: {
        name: 'projectManagementPlan',
        label: 'ProjectManagementPlans',
        menu: 'ProjectManagementPlans',
        exporterFileName: 'exportacion_projectManagementPlan',
        list: {
          menu: 'ProjectManagementPlans',
          title: 'ProjectManagementPlans',
        },
        create: {
          success: ' Project Management Plan guardado con éxito',
        },
        update: {
          success: ' Project Management Plan guardado con éxito',
        },
        destroy: {
          success: ' Project Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: ' Project Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar  Project Management Plan',
        },
        fields: {
          id: 'Id',
          'scopeManagementPlan': 'Scope Management Plan',
          'requirementsManagementPlan': 'Requirements Management Plan',
          'scheduleManagementPlan': 'Schedule Management Plan',
          'costManagementPlan': 'Cost Management Plan',
          'qualityManagementPlan': 'Quality Management Plan',
          'resourceManagementPlan': 'Resource Management Plan',
          'communicationsManagementPlan': 'Communications Management Plan',
          'riskManagementPlan': 'Risk Management Plan',
          'procurementManagementPlan': 'Procurement Management Plan',
          'stakeholderEngagementPlan': 'Stakeholder Engagement Plan',
          'scopeBaseline': 'Scope Baseline',
          'scheduleBaseline': 'Schedule Baseline',
          'costBaseline': 'Cost Baseline',
          'changeManagementPlan': 'Change Management Plan',
          'configurationManagementPlan': 'Configuration Management Plan',
          'performanceMeasurementBaseline': 'Performance Measurement Baseline',
          'projectLifeCycle': 'Project Life Cycle',
          'developmentApproach': 'Development Approach',
          'managementReviews': 'Management Reviews',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'scopeManagementPlan': 'Defina como o escopo do projeto será planejado, executado e controlado, incluindo a definição e gerenciamento de requisitos, entregas e limites do projeto.',
          'requirementsManagementPlan': 'Descreva como os requisitos do projeto serão coletados, analisados, documentados e gerenciados ao longo do projeto.',
          'scheduleManagementPlan': 'Estabeleça os processos e ferramentas para criar, gerenciar e controlar o cronograma do projeto, incluindo prazos e marcos.',
          'costManagementPlan': 'Defina como os custos do projeto serão estimados, orçados, monitorados e controlados, incluindo a definição de tolerâncias de custo e o uso de técnicas de estimativa.',
          'qualityManagementPlan': 'Descreva como a qualidade será planejada, gerenciada e controlada, garantindo que o projeto atenda aos padrões e expectativas de qualidade.',
          'resourceManagementPlan': 'Determine como os recursos humanos e materiais serão planejados, adquiridos, gerenciados e liberados durante o projeto.',
          'communicationsManagementPlan': 'Defina como as informações do projeto serão trocadas entre os membros da equipe e stakeholders, incluindo métodos de comunicação, frequência e responsabilidades.',
          'riskManagementPlan': 'Estabeleça como os riscos do projeto serão identificados, analisados, respondidos e monitorados, incluindo o uso de técnicas de análise de risco e planos de contingência.',
          'procurementManagementPlan': 'Descreva como os processos de aquisição serão conduzidos, incluindo seleção de fornecedores, contratação e gerenciamento de contratos.',
          'stakeholderEngagementPlan': 'Defina como os stakeholders serão identificados, analisados e envolvidos ao longo do projeto, incluindo comunicação e estratégias de engajamento.',
          'scopeBaseline': 'Inclua o escopo detalhado do projeto, com a Estrutura Analítica do Projeto (EAP) e a declaração do escopo.',
          'scheduleBaseline': 'Estabeleça o cronograma de referência aprovado, que será usado para medir e controlar o progresso do projeto.',
          'costBaseline': 'Defina a linha de base de custo aprovada, que será usada para monitorar e controlar os custos do projeto.',
          'changeManagementPlan': 'Descreva como as mudanças no projeto serão gerenciadas, incluindo processos de solicitação, análise, aprovação e implementação de mudanças.',
          'configurationManagementPlan': 'Estabeleça como as versões e configurações de itens entregáveis serão controladas e rastreadas durante o projeto.',
          'performanceMeasurementBaseline': 'Combine as linhas de base de escopo, cronograma e custo para criar uma linha de base de desempenho, que será usada para avaliar o progresso e desempenho do projeto.',
          'projectLifeCycle': 'Descreva as fases do ciclo de vida do projeto e como elas serão conduzidas, desde a iniciação até o encerramento.',
          'developmentApproach': 'Defina a abordagem de desenvolvimento a ser seguida no projeto, como metodologias tradicionais (cascata), ágeis, híbridas ou outras, de acordo com os requisitos e as características do projeto. A abordagem escolhida deve ser compatível com a cultura da organização e a natureza do projeto.',
          'managementReviews': 'Estabeleça um processo para revisões de gerenciamento periódicas que envolvam a equipe do projeto e os principais stakeholders. Essas revisões devem abordar o progresso do projeto, a eficácia das abordagens adotadas, a identificação de problemas e a discussão de melhorias ou ajustes necessários. Defina a frequência dessas revisões e os critérios para avaliar o desempenho do projeto durante essas sessões.',
        },
        new: {
          title: 'Nuevo  Project Management Plan',
        },
        view: {
          title: 'Ver  Project Management Plan',
        },
        importer: {
          title: 'Importar ProjectManagementPlans',
          fileName: 'projectManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    requirementsManagementPlan: {
        name: 'requirementsManagementPlan',
        label: 'RequirementsManagementPlans',
        menu: 'RequirementsManagementPlans',
        exporterFileName: 'exportacion_requirementsManagementPlan',
        list: {
          menu: 'RequirementsManagementPlans',
          title: 'RequirementsManagementPlans',
        },
        create: {
          success: 'Requirements Management Plan guardado con éxito',
        },
        update: {
          success: 'Requirements Management Plan guardado con éxito',
        },
        destroy: {
          success: 'Requirements Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: 'Requirements Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Requirements Management Plan',
        },
        fields: {
          id: 'Id',
          'requirementsActivities': 'How requirements activities will be planned, tracked, and reported',
          'configurationManagementActivities': 'Configuration management activities',
          'requirementsPrioritizationProcess': 'Requirements prioritization process',
          'metricsRationale': 'Metrics that will be used and the rationale for using them',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'requirementsActivities': 'Essa seção descreve como as atividades de coleta, análise, documentação e validação dos requisitos serão planejadas e realizadas. Além disso, explica como o progresso dessas atividades será monitorado e reportado aos stakeholders ao longo do projeto.',
          'configurationManagementActivities': 'As atividades de gerenciamento de configuração referem-se ao controle e rastreamento de mudanças nos requisitos do projeto. Isso inclui a identificação de versões de requisitos, o registro de alterações e a garantia de que as mudanças sejam aprovadas e comunicadas adequadamente.',
          'requirementsPrioritizationProcess': 'O processo de priorização de requisitos é uma abordagem sistemática para classificar e ordenar os requisitos do projeto com base em sua importância, riscos, custos e outros fatores relevantes. Isso ajuda a garantir que recursos e esforços sejam alocados de maneira eficaz e eficiente.',
          'metricsRationale': 'Essa seção identifica as métricas que serão usadas para medir o progresso e a qualidade dos requisitos e justifica por que essas métricas são apropriadas. ',
        },
        new: {
          title: 'Nuevo Requirements Management Plan',
        },
        view: {
          title: 'Ver Requirements Management Plan',
        },
        importer: {
          title: 'Importar RequirementsManagementPlans',
          fileName: 'requirementsManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    requirementDocumentation: {
        name: 'requirementDocumentation',
        label: 'RequirementDocumentations',
        menu: 'RequirementDocumentations',
        exporterFileName: 'exportacion_requirementDocumentation',
        list: {
          menu: 'RequirementDocumentations',
          title: 'RequirementDocumentations',
        },
        create: {
          success: 'Requirement Documentation guardado con éxito',
        },
        update: {
          success: 'Requirement Documentation guardado con éxito',
        },
        destroy: {
          success: 'Requirement Documentation eliminado con éxito',
        },
        destroyAll: {
          success: 'Requirement Documentation(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Requirement Documentation',
        },
        fields: {
          id: 'Id',
          'associatedID': 'Associated ID',
          'businessNeeds': 'Business needs, opportunities, goals, and objectives',
          'requirementDescription': 'Requirement Description',
          'version': 'Version',
          'phase': 'Phase',
          'associatedDelivery': 'Associated Delivery',
          'type': 'Type',
          'requester': 'Requester',
          'complexityRange': 'Complexity',
          'complexity': 'Complexity',
          'responsible': 'Responsible',
          'validity': 'Validity',
          'priority': 'Priority',
          'acceptanceCriteria': 'Acceptance Criteria',
          'supportingDocumentation': 'Supporting Documentation',
          'requirementSituation': 'Requirement Situation',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'associatedID': 'Um identificador único atribuído a cada requisito para facilitar o rastreamento e a referência ao longo do projeto.',
          'businessNeeds': 'Esta seção descreve os motivos por trás do requisito, como necessidades de negócios, oportunidades, metas e objetivos organizacionais que o requisito ajuda a atender.',
          'requirementDescription': 'Uma descrição detalhada do requisito, incluindo sua funcionalidade, características e quaisquer restrições ou especificações aplicáveis.',
          'version': 'A versão atual do requisito, que é atualizada sempre que ocorre uma alteração significativa no requisito.',
          'phase': 'A fase do projeto em que o requisito será tratado, como iniciação, planejamento, execução ou encerramento.',
          'associatedDelivery': 'A entrega associada ao requisito, como um produto, serviço ou resultado específico que o requisito ajudará a alcançar.',
          'type': 'O tipo de requisito, como funcional (descreve o que um produto ou serviço deve fazer), não funcional (descreve como um produto ou serviço deve funcionar) ou de transição (descreve as condições para a transição de um estado atual para um estado futuro).',
          'requester': 'A pessoa, grupo ou organização que solicitou o requisito ou tem interesse nele.',
          'complexity': 'Se refere ao grau de dificuldade ou esforço necessário para implementar, testar e gerenciar um requisito específico. A complexidade pode ser afetada por vários fatores, como a natureza técnica do requisito, as interdependências com outros requisitos, a quantidade de recursos necessários e os prazos associados.',
          'responsible': 'O indivíduo ou equipe responsável pela implementação, teste e gerenciamento do requisito específico. A atribuição de responsabilidade garante que haja uma pessoa ou grupo focado no sucesso de cada requisito.',
          'validity': 'A validade de um requisito refere-se à sua relevância e alinhamento com os objetivos e necessidades do projeto. A validade ajuda a garantir que os requisitos sejam realistas, alcançáveis e contribuam para os objetivos do projeto.',
          'priority': 'A prioridade de um requisito indica sua importância relativa em comparação com os outros requisitos do projeto. A priorização ajuda a equipe do projeto a focar primeiro nos requisitos mais críticos e alocar recursos de maneira eficiente.',
          'acceptanceCriteria': 'Os critérios de aceitação são as condições que um requisito deve atender para ser considerado completo e satisfatório. Esses critérios ajudam a equipe do projeto a entender as expectativas e a garantir que o requisito seja implementado de acordo com as necessidades dos stakeholders.',
          'supportingDocumentation': 'A documentação de suporte inclui todos os documentos, referências, artefatos ou informações adicionais que ajudam a esclarecer, justificar ou fornecer contexto para um requisito específico. Isso pode incluir estudos de caso, análises de mercado, especificações técnicas, diretrizes regulatórias ou qualquer outra informação relevante que ajude a equipe do projeto a entender e implementar o requisito de maneira eficaz.',
          'requirementSituation': 'A situação do requisito descreve o estado atual do requisito em um determinado momento. Isso pode incluir informações sobre o progresso na implementação do requisito, problemas ou desafios enfrentados, alterações feitas ao requisito e quaisquer dependências ou interações com outros requisitos. Manter o controle da situação do requisito ajuda a equipe do projeto a monitorar e gerenciar o progresso dos requisitos ao longo do tempo e a adaptar-se a mudanças ou novas informações conforme necessário.',
        },
        new: {
          title: 'Nuevo Requirement Documentation',
        },
        view: {
          title: 'Ver Requirement Documentation',
        },
        importer: {
          title: 'Importar RequirementDocumentations',
          fileName: 'requirementDocumentation_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    scopeManagementPlan: {
        name: 'scopeManagementPlan',
        label: 'ScopeManagementPlans',
        menu: 'ScopeManagementPlans',
        exporterFileName: 'exportacion_scopeManagementPlan',
        list: {
          menu: 'ScopeManagementPlans',
          title: 'ScopeManagementPlans',
        },
        create: {
          success: 'Scope Management Plan guardado con éxito',
        },
        update: {
          success: 'Scope Management Plan guardado con éxito',
        },
        destroy: {
          success: 'Scope Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: 'Scope Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Scope Management Plan',
        },
        fields: {
          id: 'Id',
          'projectScopeSpecificationProcess': 'Project Scope Specification Process',
          'processesMaintainingWBS': 'Processes for creating, approving, and maintaining WBS',
          'deliveryAcceptanceProcess': 'Delivery acceptance process',
          'scopeChangeManagementPlan': 'Scope Change Management Plan',
          'processMaintained': 'Process that establishes how the scope baseline will be approved and maintained',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'projectScopeSpecificationProcess': 'Este processo envolve a definição e documentação das entregas, requisitos e limites do projeto. A equipe do projeto deve coletar e analisar as informações dos stakeholders para criar uma declaração de escopo detalhada e abrangente.',
          'processesMaintainingWBS': 'A Estrutura Analítica do Projeto (WBS) é uma ferramenta usada para decompor o trabalho do projeto em componentes menores e gerenciáveis. Este item descreve os processos de criação, aprovação e manutenção da WBS, incluindo as responsabilidades, métodos e ferramentas envolvidos.',
          'deliveryAcceptanceProcess': 'O processo de aceitação de entrega é o método pelo qual as entregas do projeto são revisadas, validadas e formalmente aceitas pelos stakeholders. Isso garante que as entregas atendam aos requisitos e critérios de aceitação estabelecidos.',
          'scopeChangeManagementPlan': 'O plano de gerenciamento de mudanças de escopo define como as mudanças no escopo do projeto serão identificadas, analisadas, aprovadas e implementadas. Isso inclui o processo de solicitação de mudança, os papéis e responsabilidades dos membros da equipe envolvidos e as etapas para avaliar e aprovar as mudanças propostas. O objetivo é garantir que todas as mudanças de escopo sejam controladas e gerenciadas adequadamente para minimizar os impactos negativos no projeto.',
          'processMaintained': 'O processo que estabelece como a linha de base do escopo será aprovada e mantida envolve a criação de um ponto de referência acordado e documentado para o escopo do projeto. Isso inclui a Declaração de Escopo do Projeto, a Estrutura Analítica do Projeto (WBS) e o Dicionário da WBS. O processo descreve como a linha de base do escopo será aprovada pelos stakeholders e como será atualizada e mantida ao longo do projeto. As atualizações',
        },
        new: {
          title: 'Nuevo Scope Management Plan',
        },
        view: {
          title: 'Ver Scope Management Plan',
        },
        importer: {
          title: 'Importar ScopeManagementPlans',
          fileName: 'scopeManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    scheduleManagementPlan: {
        name: 'scheduleManagementPlan',
        label: 'ScheduleManagementPlans',
        menu: 'ScheduleManagementPlans',
        exporterFileName: 'exportacion_scheduleManagementPlan',
        list: {
          menu: 'ScheduleManagementPlans',
          title: 'ScheduleManagementPlans',
        },
        create: {
          success: 'Schedule Management Plan guardado con éxito',
        },
        update: {
          success: 'Schedule Management Plan guardado con éxito',
        },
        destroy: {
          success: 'Schedule Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: 'Schedule Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Schedule Management Plan',
        },
        fields: {
          id: 'Id',
          'projectScheduleModelDevelopment': 'Project Schedule Model Development',
          'levelAccuracy': 'Level of Accuracy',
          'organizationalProceduresLinks': 'Organizational Procedures Links',
          'projectScheduleModelMaintenance': 'Project Schedule Model Maintenance',
          'performanceMeasurementRules': 'Performance Measurement Rules',
          'reportingFormats': 'Reporting Formats',
          'releaseIterationLength': 'Release and Iteration Length',
          'controlThresholds': 'Control Thresholds',
          'unitsMeasure': 'Units of Measure',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'projectScheduleModelDevelopment': 'Descreve a abordagem e as ferramentas para desenvolver o modelo de cronograma do projeto, que é uma representação visual ou tabular das atividades, durações, sequenciamento e recursos do projeto.',
          'levelAccuracy': 'Refere-se ao grau de precisão necessário para as estimativas de duração e recursos no cronograma do projeto, o que ajuda a gerenciar as expectativas e a incerteza.',
          'organizationalProceduresLinks': 'São as conexões entre o Schedule Management Plan e os procedimentos organizacionais existentes, como processos de aprovação, revisões e comunicação.',
          'projectScheduleModelMaintenance': 'Detalha o processo para manter e atualizar o modelo de cronograma do projeto à medida que o projeto avança e as mudanças ocorrem.',
          'performanceMeasurementRules': 'Define as regras para medir o desempenho do projeto em relação ao cronograma, como Earned Value Management (EVM) ou outras métricas relevantes.',
          'reportingFormats': 'Especifica os formatos de relatórios usados para comunicar informações do cronograma do projeto aos stakeholders, como gráficos de Gantt, tabelas, gráficos de marcos ou relatórios de status. Os formatos de relatórios devem ser claros e compreensíveis para garantir uma comunicação eficiente das informações do cronograma.',
          'releaseIterationLength': 'Aplica-se a projetos ágeis e descreve a duração das versões (releases) e iterações (sprints) do projeto. Isso ajuda a equipe do projeto a planejar e gerenciar o trabalho dentro de blocos de tempo específicos e a fornecer entregas incrementais.',
          'controlThresholds': 'São os limites predefinidos de variação aceitável entre o cronograma planejado e o cronograma real do projeto. Se a variação exceder esses limites, a equipe do projeto deve investigar a causa e tomar medidas corretivas. Os limites de controle ajudam a monitorar o desempenho do cronograma e a gerenciar os riscos associados.',
          'unitsMeasure': 'As unidades de medida são usadas para expressar durações, esforço e recursos no cronograma do projeto. Isso pode incluir horas, dias, semanas ou outras unidades de tempo ou esforço relevantes para o projeto. Definir unidades de medida consistentes ajuda a garantir que todos os membros da equipe e stakeholders compreendam e se comuniquem efetivamente sobre o cronograma e os recursos do projeto. Além disso, isso facilita a análise, comparação e agregação de dados de cronograma ao longo do projeto.',
        },
        new: {
          title: 'Nuevo Schedule Management Plan',
        },
        view: {
          title: 'Ver Schedule Management Plan',
        },
        importer: {
          title: 'Importar ScheduleManagementPlans',
          fileName: 'scheduleManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    projectScopeStatement: {
        name: 'projectScopeStatement',
        label: 'ProjectScopeStatements',
        menu: 'ProjectScopeStatements',
        exporterFileName: 'exportacion_projectScopeStatement',
        list: {
          menu: 'ProjectScopeStatements',
          title: 'ProjectScopeStatements',
        },
        create: {
          success: 'Project Scope Statement guardado con éxito',
        },
        update: {
          success: 'Project Scope Statement guardado con éxito',
        },
        destroy: {
          success: 'Project Scope Statement eliminado con éxito',
        },
        destroyAll: {
          success: 'Project Scope Statement(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Project Scope Statement',
        },
        fields: {
          id: 'Id',
          'productScopeDescription': 'Product Scope Description',
          'acceptanceCriteria': 'Acceptance Criteria',
          'deliverables': 'Deliverables',
          'projectExclusions': 'Project Exclusions',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Project Scope Statement',
        },
        view: {
          title: 'Ver Project Scope Statement',
        },
        importer: {
          title: 'Importar ProjectScopeStatements',
          fileName: 'projectScopeStatement_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    workbreakdownStructure: {
        name: 'workbreakdownStructure',
        label: 'WorkbreakdownStructures',
        menu: 'WorkbreakdownStructures',
        exporterFileName: 'exportacion_workbreakdownStructure',
        list: {
          menu: 'WorkbreakdownStructures',
          title: 'WorkbreakdownStructures',
        },
        create: {
          success: 'Work Breakdown Structure guardado con éxito',
        },
        update: {
          success: 'Work Breakdown Structure guardado con éxito',
        },
        destroy: {
          success: 'Work Breakdown Structure eliminado con éxito',
        },
        destroyAll: {
          success: 'Work Breakdown Structure(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Work Breakdown Structure',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'arquivo': 'Arquivo',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Work Breakdown Structure',
        },
        view: {
          title: 'Ver Work Breakdown Structure',
        },
        importer: {
          title: 'Importar WorkbreakdownStructures',
          fileName: 'workbreakdownStructure_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    scheduleNetworkDiagram: {
        name: 'scheduleNetworkDiagram',
        label: 'ScheduleNetworkDiagrams',
        menu: 'ScheduleNetworkDiagrams',
        exporterFileName: 'exportacion_scheduleNetworkDiagram',
        list: {
          menu: 'ScheduleNetworkDiagrams',
          title: 'ScheduleNetworkDiagrams',
        },
        create: {
          success: 'Schedule Network Diagram guardado con éxito',
        },
        update: {
          success: 'Schedule Network Diagram guardado con éxito',
        },
        destroy: {
          success: 'Schedule Network Diagram eliminado con éxito',
        },
        destroyAll: {
          success: 'Schedule Network Diagram(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Schedule Network Diagram',
        },
        fields: {
          id: 'Id',
          'activityName': 'Activity Name',
          'predecessorActivity': 'Predecessor Activity',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'predecessorActivity': {
            'Finish-to-Start(FS)': 'Finish-to-Start(FS)',
            'Finish-to-Finish(FF)': 'Finish-to-Finish(FF)',
            'Start-to-Start(SS)': 'Start-to-Start(SS)',
            'Start-to-Finish(SF)': 'Start-to-Finish(SF)',
          },
        },
        placeholders: {

        },
        hints: {
          'activityName': 'É o nome da atividade que deve ser realizada para concluir o projeto. Essas atividades são listadas em uma ordem lógica para formar uma rede de atividades.',
          'predecessorActivity': 'Lead e Lag são dois termos usados para descrever o tempo entre o término de uma atividade e o início da próxima. O Lead é a antecipação do início de uma atividade, enquanto o Lag é o atraso no início da próxima atividade. O Lead e o Lag são usados para ajudar a gerenciar as dependências entre atividades e evitar atrasos no cronograma do projeto.',
        },
        new: {
          title: 'Nuevo Schedule Network Diagram',
        },
        view: {
          title: 'Ver Schedule Network Diagram',
        },
        importer: {
          title: 'Importar ScheduleNetworkDiagrams',
          fileName: 'scheduleNetworkDiagram_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    activityList: {
        name: 'activityList',
        label: 'ActivityLists',
        menu: 'ActivityLists',
        exporterFileName: 'exportacion_activityList',
        list: {
          menu: 'ActivityLists',
          title: 'ActivityLists',
        },
        create: {
          success: 'Activity List guardado con éxito',
        },
        update: {
          success: 'Activity List guardado con éxito',
        },
        destroy: {
          success: 'Activity List eliminado con éxito',
        },
        destroyAll: {
          success: 'Activity List(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Activity List',
        },
        fields: {
          id: 'Id',
          'activityLabel': 'Activity Label',
          'milestone': 'Milestone',
          'activityName': 'Activity Name',
          'projectPhase': 'Project Phase',
          'wBSId': 'WBSId',
          'activityDescription': 'Activity Description',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'activityLabel': 'É um identificador único atribuído a cada atividade do projeto para fins de rastreamento e referência. É comum utilizar letras, números ou uma combinação de ambos para criar o rótulo.',
          'milestone': 'É um evento significativo que marca a conclusão de uma fase importante do projeto ou a realização de um objetivo crítico. As marcos não são atividades que consomem tempo ou recursos e geralmente são representados por um símbolo específico em um gráfico de Gantt.',
          'activityName': 'É o nome descritivo atribuído a cada atividade do projeto para identificar claramente o que será realizado. O nome da atividade deve ser claro e conciso e deve incluir informações suficientes para que a equipe do projeto possa entender completamente o que precisa ser feito.',
          'projectPhase': 'É uma divisão do projeto em etapas que representam um período específico de tempo ou um conjunto de atividades relacionadas. As fases do projeto podem ser definidas por marcos significativos ou pela conclusão de um conjunto específico de atividades.',
          'wBSId': 'Código de identificação exclusivo atribuído a cada elemento da Estrutura Analítica do Projeto (EAP) ou Work Breakdown Structure (WBS) que representa uma divisão hierárquica do projeto em partes menores e gerenciáveis.',
          'activityDescription': 'É uma descrição detalhada da atividade do projeto que inclui informações sobre o que será feito, por quem, com que recursos e dentro de que prazo. A descrição da atividade deve ser clara e completa o suficiente para que a equipe do projeto possa entender o escopo da atividade e como ela contribui para o sucesso geral do projeto.',
        },
        new: {
          title: 'Nuevo Activity List',
        },
        view: {
          title: 'Ver Activity List',
        },
        importer: {
          title: 'Importar ActivityLists',
          fileName: 'activityList_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    resource: {
        name: 'resource',
        label: 'Resources',
        menu: 'Resources',
        exporterFileName: 'exportacion_resource',
        list: {
          menu: 'Resources',
          title: 'Resources',
        },
        create: {
          success: 'Resource guardado con éxito',
        },
        update: {
          success: 'Resource guardado con éxito',
        },
        destroy: {
          success: 'Resource eliminado con éxito',
        },
        destroyAll: {
          success: 'Resource(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Resource',
        },
        fields: {
          id: 'Id',
          'resourceName': 'Resource Name',
          'resourceDescription': 'Resource Description',
          'resourceCostperUnitRange': 'Resource Cost per Unit',
          'resourceCostperUnit': 'Resource Cost per Unit',
          'resourceType': 'Resource Type',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'resourceName': 'É o nome do recurso necessário para concluir uma determinada atividade do projeto. Pode ser um nome de pessoa, nome de equipamento, material ou outra coisa que seja necessária para realizar a atividade.',
          'resourceDescription': 'É uma descrição detalhada do recurso necessário para realizar a atividade do projeto. Inclui informações sobre a função do recurso, suas características, especificações técnicas e outras informações relevantes.',
          'resourceCostperUnit': 'É o custo do recurso por unidade utilizada na atividade do projeto. Isso pode ser o custo horário, diário ou semanal, dependendo da forma como o recurso é utilizado. É importante considerar o custo do recurso ao elaborar o orçamento do projeto.',
          'resourceType': 'É a categoria ou tipo de recurso necessário para concluir a atividade do projeto. Pode ser uma pessoa, equipamento, material ou outro tipo de recurso. A identificação do tipo de recurso é importante para garantir que o recurso certo seja alocado para a atividade correta e para garantir que as necessidades de recursos do projeto sejam atendidas de forma adequada.',
        },
        new: {
          title: 'Nuevo Resource',
        },
        view: {
          title: 'Ver Resource',
        },
        importer: {
          title: 'Importar Resources',
          fileName: 'resource_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    resourceRequirements: {
        name: 'resourceRequirements',
        label: 'ResourceRequirements',
        menu: 'ResourceRequirements',
        exporterFileName: 'exportacion_resourceRequirements',
        list: {
          menu: 'ResourceRequirements',
          title: 'ResourceRequirements',
        },
        create: {
          success: 'Resource Requirements guardado con éxito',
        },
        update: {
          success: 'Resource Requirements guardado con éxito',
        },
        destroy: {
          success: 'Resource Requirements eliminado con éxito',
        },
        destroyAll: {
          success: 'Resource Requirements(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Resource Requirements',
        },
        fields: {
          id: 'Id',
          'activity': 'Activity',
          'resource': 'Resource',
          'requiredAmountResource': 'Required Amount of Resource',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Resource Requirements',
        },
        view: {
          title: 'Ver Resource Requirements',
        },
        importer: {
          title: 'Importar ResourceRequirements',
          fileName: 'resourceRequirements_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    activityDurationEstimates: {
        name: 'activityDurationEstimates',
        label: 'ActivityDurationEstimates',
        menu: 'ActivityDurationEstimates',
        exporterFileName: 'exportacion_activityDurationEstimates',
        list: {
          menu: 'ActivityDurationEstimates',
          title: 'ActivityDurationEstimates',
        },
        create: {
          success: 'Activity Duration Estimates guardado con éxito',
        },
        update: {
          success: 'Activity Duration Estimates guardado con éxito',
        },
        destroy: {
          success: 'Activity Duration Estimates eliminado con éxito',
        },
        destroyAll: {
          success: 'Activity Duration Estimates(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Activity Duration Estimates',
        },
        fields: {
          id: 'Id',
          'activityName': 'Activity Name',
          'estimatedDurationRange': 'Estimated Duration in Hours',
          'estimatedDuration': 'Estimated Duration in Hours',
          'estimatedStartDateRange': 'Estimated Start Date',
          'estimatedStartDate': 'Estimated Start Date',
          'estimatedEndDateRange': 'Estimated End Date',
          'estimatedEndDate': 'Estimated End Date',
          'performedDurationRange': 'Performed Duration in Hours',
          'performedDuration': 'Performed Duration in Hours',
          'performedStartDateRange': 'Performed Start Date',
          'performedStartDate': 'Performed Start Date',
          'performedEndDateRange': 'Performed End Date',
          'performedEndDate': 'Performed End Date',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Activity Duration Estimates',
        },
        view: {
          title: 'Ver Activity Duration Estimates',
        },
        importer: {
          title: 'Importar ActivityDurationEstimates',
          fileName: 'activityDurationEstimates_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    stakeholderCalendars: {
        name: 'stakeholderCalendars',
        label: 'StakeholderCalendars',
        menu: 'StakeholderCalendars',
        exporterFileName: 'exportacion_stakeholderCalendars',
        list: {
          menu: 'StakeholderCalendars',
          title: 'StakeholderCalendars',
        },
        create: {
          success: 'Stakeholder Calendars guardado con éxito',
        },
        update: {
          success: 'Stakeholder Calendars guardado con éxito',
        },
        destroy: {
          success: 'Stakeholder Calendars eliminado con éxito',
        },
        destroyAll: {
          success: 'Stakeholder Calendars(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Stakeholder Calendars',
        },
        fields: {
          id: 'Id',
          'activity': 'Activity',
          'stakeholder': 'Stakeholder',
          'allocationStartRange': 'Allocation Start',
          'allocationStart': 'Allocation Start',
          'allocationEndsRange': 'Allocation Ends',
          'allocationEnds': 'Allocation Ends',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Stakeholder Calendars',
        },
        view: {
          title: 'Ver Stakeholder Calendars',
        },
        importer: {
          title: 'Importar StakeholderCalendars',
          fileName: 'stakeholderCalendars_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    costManagementPlan: {
        name: 'costManagementPlan',
        label: 'CostManagementPlans',
        menu: 'CostManagementPlans',
        exporterFileName: 'exportacion_costManagementPlan',
        list: {
          menu: 'CostManagementPlans',
          title: 'CostManagementPlans',
        },
        create: {
          success: 'Cost Management Plan guardado con éxito',
        },
        update: {
          success: 'Cost Management Plan guardado con éxito',
        },
        destroy: {
          success: 'Cost Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: 'Cost Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Cost Management Plan',
        },
        fields: {
          id: 'Id',
          'processesManagingProjectCosts': 'Processes for Managing Project Costs',
          'levelAccuracy': 'Level of Accuracy',
          'organizationalProceduresLinks': 'Organizational Procedures Links',
          'rulesPerformanceMeasurement': 'Rules of Performance Measurement',
          'unitsMeasureUsed': 'Units of Measure to be Used',
          'levelPrecision': 'Level of Precision',
          'controlThresholds': 'Control Thresholds',
          'reportingFormats': 'Reporting Formats',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'processesManagingProjectCosts': 'São os processos e técnicas que serão utilizados para gerenciar os custos do projeto, como estimativas de custos, orçamentação, controle de custos e relatórios financeiros.',
          'levelAccuracy': 'Refere-se ao grau de precisão que será utilizado na estimativa dos custos do projeto. Pode ser definido como um valor absoluto ou um intervalo, como +/- 10%.',
          'organizationalProceduresLinks': 'Refere-se às políticas e procedimentos da organização que são relevantes para o gerenciamento de custos do projeto. Isso inclui a estrutura organizacional, autoridade para aprovação de despesas, sistemas de contabilidade e outros processos relacionados a custos.',
          'rulesPerformanceMeasurement': 'Define como o desempenho do projeto será medido em relação aos custos e ao valor agregado. Isso inclui o estabelecimento de métricas de desempenho, como o índice de desempenho de custo e o índice de desempenho de cronograma.',
          'unitsMeasureUsed': 'Refere-se às unidades de medida que serão usadas para estimar e controlar os custos do projeto. Por exemplo, horas de trabalho, dias de trabalho, unidades de material, etc.',
          'levelPrecision': 'Define o nível de precisão necessário para as estimativas de custo e o orçamento do projeto. Isso pode variar de acordo com o tipo e a complexidade do projeto.',
          'controlThresholds': 'Define os limites de custos que acionam ações de controle, como revisões de orçamento, mudanças no escopo ou outras ações corretivas.  Additional Details: São outros detalhes relevantes para o gerenciamento de custos do projeto, como considerações de risco, contingências e fatores externos que possam afetar o orçamento.',
          'reportingFormats': 'Define o formato e o conteúdo dos relatórios financeiros que serão usados para comunicar o desempenho financeiro do projeto. Isso pode incluir relatórios resumidos para a equipe do projeto e relatórios detalhados para a alta gerência.',
        },
        new: {
          title: 'Nuevo Cost Management Plan',
        },
        view: {
          title: 'Ver Cost Management Plan',
        },
        importer: {
          title: 'Importar CostManagementPlans',
          fileName: 'costManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    costEstimates: {
        name: 'costEstimates',
        label: 'CostEstimates',
        menu: 'CostEstimates',
        exporterFileName: 'exportacion_costEstimates',
        list: {
          menu: 'CostEstimates',
          title: 'CostEstimates',
        },
        create: {
          success: 'Cost Estimates guardado con éxito',
        },
        update: {
          success: 'Cost Estimates guardado con éxito',
        },
        destroy: {
          success: 'Cost Estimates eliminado con éxito',
        },
        destroyAll: {
          success: 'Cost Estimates(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Cost Estimates',
        },
        fields: {
          id: 'Id',
          'estimatedCost': 'Estimated Cost',
          'cumulativeEstimatedCostRange': 'Cumulative Estimated Cost',
          'cumulativeEstimatedCost': 'Cumulative Estimated Cost',
          'replantedCostRange': 'ReplantedCost',
          'replantedCost': 'ReplantedCost',
          'contingencyReserveRange': 'Contingency Reserve',
          'contingencyReserve': 'Contingency Reserve',
          'sumWorkPackagesRange': 'Sum of Work Packages',
          'sumWorkPackages': 'Sum of Work Packages',
          'contingencyReservePackagesRange': 'Contingency Reserve of Packages',
          'contingencyReservePackages': 'Contingency Reserve of Packages',
          'baseline': 'Baseline',
          'budgetRange': 'Budget',
          'budget': 'Budget',
          'cumulativeReplantedCostRange': 'Cumulative Replanted Cost',
          'cumulativeReplantedCost': 'Cumulative Replanted Cost',
          'realCostRange': 'Real Cost',
          'realCost': 'Real Cost',
          'cumulativeRealCostRange': 'Cumulative Real Cost',
          'cumulativeRealCost': 'Cumulative Real Cost',
          'managementReserveRange': 'Management Reserve',
          'managementReserve': 'Management Reserve',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'estimatedCost': 'É o custo previsto para concluir uma determinada atividade, pacote de trabalho ou fase do projeto, com base em uma análise de custo e tempo.',
          'sumWorkPackages': ' É o custo total previsto para concluir todos os pacotes de trabalho de um projeto.',
          'contingencyReservePackages': 'É o valor adicional incluído no orçamento de um pacote de trabalho específico para cobrir possíveis riscos ou incertezas.',
          'budget': 'É o valor total disponível para gastar em um projeto ou fase específica, incluindo custos diretos e indiretos.',
          'cumulativeReplantedCost': 'É o custo total revisado previsto para concluir todas as atividades, pacotes de trabalho ou fases do projeto, até o momento atual.',
          'realCost': 'É o custo real incorrido para concluir uma atividade, pacote de trabalho ou fase do projeto.',
          'cumulativeRealCost': 'É o custo total real incorrido para concluir todas as atividades, pacotes de trabalho ou fases do projeto, até o momento atual.',
          'managementReserve': ' É um valor adicional incluído no orçamento do projeto para cobrir mudanças imprevistas ou necessidades adicionais que possam surgir durante o projeto. É geralmente gerenciado pela alta gerência do projeto e é usado para mudanças que estão fora do escopo do projeto original.',
        },
        new: {
          title: 'Nuevo Cost Estimates',
        },
        view: {
          title: 'Ver Cost Estimates',
        },
        importer: {
          title: 'Importar CostEstimates',
          fileName: 'costEstimates_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    qualityManagementPlan: {
        name: 'qualityManagementPlan',
        label: 'QualityManagementPlans',
        menu: 'QualityManagementPlans',
        exporterFileName: 'exportacion_qualityManagementPlan',
        list: {
          menu: 'QualityManagementPlans',
          title: 'QualityManagementPlans',
        },
        create: {
          success: 'QualityManagementPlan guardado con éxito',
        },
        update: {
          success: 'QualityManagementPlan guardado con éxito',
        },
        destroy: {
          success: 'QualityManagementPlan eliminado con éxito',
        },
        destroyAll: {
          success: 'QualityManagementPlan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar QualityManagementPlan',
        },
        fields: {
          id: 'Id',
          'qualityStandardsProject': 'Quality Standards that will be used by the Project',
          'qualityObjectivesProject': 'Quality Objectives of the Project',
          'qualityRoles': 'Quality Roles and Responsibilities',
          'projectDeliverablesQR': 'Project Deliverables and Processes Subject to Quality Review',
          'qualityControl': 'Quality Control and Quality Management Activities Planned for the Project',
          'qualityToolsUsed': 'Quality Tools that will be used for the Project',
          'majorProceduresRelevant': 'Major Procedures Relevant for the Project',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'qualityStandardsProject': 'São os padrões de qualidade que serão aplicados ao projeto. Esses padrões podem ser definidos internamente pela organização ou podem ser padrões externos, como normas ISO ou padrões da indústria.',
          'qualityObjectivesProject': 'São as metas de qualidade estabelecidas para o projeto. Essas metas podem incluir requisitos de desempenho, prazos, conformidade regulatória ou outras medidas de sucesso do projeto.',
          'qualityRoles': 'São as responsabilidades designadas para a equipe do projeto em relação ao gerenciamento da qualidade. Isso inclui papéis como o gerente de qualidade, os membros da equipe de controle de qualidade e os responsáveis pela execução de atividades específicas de qualidade.',
          'projectDeliverablesQR': ' São os produtos e processos do projeto que estão sujeitos a revisões de qualidade para garantir que atendam aos padrões e metas de qualidade definidos. Isso pode incluir revisões de documentos, testes de produto e inspeções de processo.',
          'qualityControl': ' São as atividades planejadas para garantir que os produtos e processos do projeto atendam aos padrões e metas de qualidade definidos. Isso pode incluir testes de produto, inspeções de processo, revisões de documentos e outras atividades de controle de qualidade.',
          'qualityToolsUsed': 'São as ferramentas e técnicas que serão usadas para gerenciar e monitorar a qualidade do projeto. Isso pode incluir ferramentas de análise estatística, software de controle de qualidade, checklists de qualidade e outras ferramentas relevantes.',
          'majorProceduresRelevant': 'São os principais procedimentos relevantes para o gerenciamento da qualidade do projeto. Isso pode incluir procedimentos para revisão de documentos, testes de produto, inspeções de processo e outras atividades de gerenciamento de qualidade.',
        },
        new: {
          title: 'Nuevo QualityManagementPlan',
        },
        view: {
          title: 'Ver QualityManagementPlan',
        },
        importer: {
          title: 'Importar QualityManagementPlans',
          fileName: 'qualityManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    resourceManagementPlan: {
        name: 'resourceManagementPlan',
        label: 'ResourceManagementPlans',
        menu: 'ResourceManagementPlans',
        exporterFileName: 'exportacion_resourceManagementPlan',
        list: {
          menu: 'ResourceManagementPlans',
          title: 'ResourceManagementPlans',
        },
        create: {
          success: 'Resource Management Plan guardado con éxito',
        },
        update: {
          success: 'Resource Management Plan guardado con éxito',
        },
        destroy: {
          success: 'Resource Management Plan eliminado con éxito',
        },
        destroyAll: {
          success: 'Resource Management Plan(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Resource Management Plan',
        },
        fields: {
          id: 'Id',
          'rolesResponsibilities': 'Roles and Responsibilities',
          'projectOrganizationCharts': 'ProjectOrganizationCharts',
          'teamDevelopment': 'Team Development',
          'identificationResources': 'Identification of Resources',
          'projectResourceManagement': 'Project Team Resource Management',
          'training': 'Training',
          'resourceControl': 'Resource Control',
          'recognitionPlan': 'Recognition Plan',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'rolesResponsibilities': 'Define os papéis e responsabilidades da equipe do projeto em relação à gestão de recursos. Isso pode incluir responsabilidades para gerenciar e alocar recursos, bem como responsabilidades para garantir que os recursos estejam sendo usados de forma eficaz.',
          'projectOrganizationCharts': ' Mostra a estrutura organizacional do projeto, incluindo as posições da equipe, seus níveis hierárquicos e suas relações funcionais. É uma ferramenta útil para definir papéis e responsabilidades.',
          'teamDevelopment': 'É o processo de desenvolver a equipe do projeto, incluindo treinamento e desenvolvimento de habilidades, para garantir que os membros da equipe estejam preparados para realizar suas funções de maneira eficaz.',
          'identificationResources': 'É o processo de identificar os recursos necessários para o projeto, incluindo equipamentos, materiais, habilidades e conhecimentos específicos.  Acquiring Resources: É o processo de adquirir os recursos necessários para o projeto, seja através da compra, aluguel ou contratação de pessoas ou equipamentos.',
          'projectResourceManagement': 'É o processo de gerenciar e alocar recursos para as atividades do projeto, incluindo a definição de prioridades e o acompanhamento do uso de recursos.',
          'training': 'É o processo de fornecer treinamento e desenvolvimento de habilidades para a equipe do projeto, a fim de garantir que eles estejam preparados para realizar suas funções de maneira eficaz.',
          'resourceControl': 'É o processo de monitorar e controlar o uso de recursos do projeto, a fim de garantir que estejam sendo utilizados de forma eficiente e eficaz.',
          'recognitionPlan': 'É um plano para reconhecer e recompensar a equipe do projeto pelo seu desempenho e contribuição para o sucesso do projeto. Pode incluir reconhecimento financeiro ou não financeiro, como elogios, prêmios ou oportunidades de desenvolvimento de carreira',
        },
        new: {
          title: 'Nuevo Resource Management Plan',
        },
        view: {
          title: 'Ver Resource Management Plan',
        },
        importer: {
          title: 'Importar ResourceManagementPlans',
          fileName: 'resourceManagementPlan_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    resourceBreakdownStructure: {
        name: 'resourceBreakdownStructure',
        label: 'ResourceBreakdownStructures',
        menu: 'ResourceBreakdownStructures',
        exporterFileName: 'exportacion_resourceBreakdownStructure',
        list: {
          menu: 'ResourceBreakdownStructures',
          title: 'ResourceBreakdownStructures',
        },
        create: {
          success: 'Resource Breakdown Structure guardado con éxito',
        },
        update: {
          success: 'Resource Breakdown Structure guardado con éxito',
        },
        destroy: {
          success: 'Resource Breakdown Structure eliminado con éxito',
        },
        destroyAll: {
          success: 'Resource Breakdown Structure(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Resource Breakdown Structure',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Resource Breakdown Structure',
        },
        view: {
          title: 'Ver Resource Breakdown Structure',
        },
        importer: {
          title: 'Importar ResourceBreakdownStructures',
          fileName: 'resourceBreakdownStructure_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    createAnAccount: '¿No tienes una cuenta? Crea uno.',
    social: {
      header: 'o inicia sesión con las redes sociales',
      signinWithGoogle: 'Inicia sesión con Google',
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Oscuro',
      light: 'Claro',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    items_per_page: '/ página',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmar',
    page: '',

    prev_page: 'Pagina anterior',
    next_page: 'Siguiente página',
    prev_5: '5 páginas anteriores',
    next_5: '5 páginas siguientes',
    prev_3: '3 páginas anteriores',
    next_3: 'Siguientes 3 páginas',
  },
};

export default es;
