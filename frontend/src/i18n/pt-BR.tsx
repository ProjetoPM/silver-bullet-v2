const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    projectCharter: {
        name: 'Project Charter',
        label: 'ProjectCharters',
        menu: 'ProjectCharters',
        exporterFileName: 'Project Charter_exportados',
        list: {
          menu: 'ProjectCharters',
          title: 'ProjectCharters',
        },
        create: {
          success: 'Project Charter salvo com sucesso',
        },
        update: {
          success: 'Project Charter salvo com sucesso',
        },
        destroy: {
          success: 'Project Charter deletado com sucesso',
        },
        destroyAll: {
          success: 'Project Charter(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Project Charter',
        },
        view: {
          title: 'Visualizar Project Charter',
        },
        importer: {
          title: 'Importar ProjectCharters',
          fileName: 'projectCharter_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    businessCase: {
        name: 'Business Case',
        label: 'BusinessCases',
        menu: 'BusinessCases',
        exporterFileName: 'Business Case_exportados',
        list: {
          menu: 'BusinessCases',
          title: 'BusinessCases',
        },
        create: {
          success: 'Business Case salvo com sucesso',
        },
        update: {
          success: 'Business Case salvo com sucesso',
        },
        destroy: {
          success: 'Business Case deletado com sucesso',
        },
        destroyAll: {
          success: 'Business Case(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Business Case',
        },
        view: {
          title: 'Visualizar Business Case',
        },
        importer: {
          title: 'Importar BusinessCases',
          fileName: 'businessCase_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    benefitsManagementPlan: {
        name: 'Benefits Management Plan',
        label: 'BenefitsManagementPlans',
        menu: 'BenefitsManagementPlans',
        exporterFileName: 'Benefits Management Plan_exportados',
        list: {
          menu: 'BenefitsManagementPlans',
          title: 'BenefitsManagementPlans',
        },
        create: {
          success: 'Benefits Management Plan salvo com sucesso',
        },
        update: {
          success: 'Benefits Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Benefits Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Benefits Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Benefits Management Plan',
        },
        view: {
          title: 'Visualizar Benefits Management Plan',
        },
        importer: {
          title: 'Importar BenefitsManagementPlans',
          fileName: 'benefitsManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    assumptionLog: {
        name: 'Assumption Log',
        label: 'AssumptionLogs',
        menu: 'AssumptionLogs',
        exporterFileName: 'Assumption Log_exportados',
        list: {
          menu: 'AssumptionLogs',
          title: 'AssumptionLogs',
        },
        create: {
          success: 'Assumption Log salvo com sucesso',
        },
        update: {
          success: 'Assumption Log salvo com sucesso',
        },
        destroy: {
          success: 'Assumption Log deletado com sucesso',
        },
        destroyAll: {
          success: 'Assumption Log(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Assumption Log',
        },
        fields: {
          id: 'Id',
          'assumptionLog': 'Assumption Log',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'assumptionLog': 'O Assumption Log é um documento que registra suposições e premissas feitas durante um projeto. Ele auxilia na identificação, validação e gerenciamento de riscos relacionados a essas suposições, facilitando a comunicação entre os membros da equipe e stakeholders e ajudando na tomada de decisões informadas.',
        },
        new: {
          title: 'Novo Assumption Log',
        },
        view: {
          title: 'Visualizar Assumption Log',
        },
        importer: {
          title: 'Importar AssumptionLogs',
          fileName: 'assumptionLog_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    stakeholderRegistration: {
        name: 'Stakeholder Registration',
        label: 'StakeholderRegistrations',
        menu: 'StakeholderRegistrations',
        exporterFileName: 'Stakeholder Registration_exportados',
        list: {
          menu: 'StakeholderRegistrations',
          title: 'StakeholderRegistrations',
        },
        create: {
          success: 'Stakeholder Registration salvo com sucesso',
        },
        update: {
          success: 'Stakeholder Registration salvo com sucesso',
        },
        destroy: {
          success: 'Stakeholder Registration deletado com sucesso',
        },
        destroyAll: {
          success: 'Stakeholder Registration(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Stakeholder Registration',
        },
        view: {
          title: 'Visualizar Stakeholder Registration',
        },
        importer: {
          title: 'Importar StakeholderRegistrations',
          fileName: 'stakeholderRegistration_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    projectManagementPlan: {
        name: ' Project Management Plan',
        label: 'ProjectManagementPlans',
        menu: 'ProjectManagementPlans',
        exporterFileName: ' Project Management Plan_exportados',
        list: {
          menu: 'ProjectManagementPlans',
          title: 'ProjectManagementPlans',
        },
        create: {
          success: ' Project Management Plan salvo com sucesso',
        },
        update: {
          success: ' Project Management Plan salvo com sucesso',
        },
        destroy: {
          success: ' Project Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: ' Project Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo  Project Management Plan',
        },
        view: {
          title: 'Visualizar  Project Management Plan',
        },
        importer: {
          title: 'Importar ProjectManagementPlans',
          fileName: 'projectManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    requirementsManagementPlan: {
        name: 'Requirements Management Plan',
        label: 'RequirementsManagementPlans',
        menu: 'RequirementsManagementPlans',
        exporterFileName: 'Requirements Management Plan_exportados',
        list: {
          menu: 'RequirementsManagementPlans',
          title: 'RequirementsManagementPlans',
        },
        create: {
          success: 'Requirements Management Plan salvo com sucesso',
        },
        update: {
          success: 'Requirements Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Requirements Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Requirements Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Requirements Management Plan',
        },
        view: {
          title: 'Visualizar Requirements Management Plan',
        },
        importer: {
          title: 'Importar RequirementsManagementPlans',
          fileName: 'requirementsManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    requirementDocumentation: {
        name: 'Requirement Documentation',
        label: 'RequirementDocumentations',
        menu: 'RequirementDocumentations',
        exporterFileName: 'Requirement Documentation_exportados',
        list: {
          menu: 'RequirementDocumentations',
          title: 'RequirementDocumentations',
        },
        create: {
          success: 'Requirement Documentation salvo com sucesso',
        },
        update: {
          success: 'Requirement Documentation salvo com sucesso',
        },
        destroy: {
          success: 'Requirement Documentation deletado com sucesso',
        },
        destroyAll: {
          success: 'Requirement Documentation(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Requirement Documentation',
        },
        view: {
          title: 'Visualizar Requirement Documentation',
        },
        importer: {
          title: 'Importar RequirementDocumentations',
          fileName: 'requirementDocumentation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    scopeManagementPlan: {
        name: 'Scope Management Plan',
        label: 'ScopeManagementPlans',
        menu: 'ScopeManagementPlans',
        exporterFileName: 'Scope Management Plan_exportados',
        list: {
          menu: 'ScopeManagementPlans',
          title: 'ScopeManagementPlans',
        },
        create: {
          success: 'Scope Management Plan salvo com sucesso',
        },
        update: {
          success: 'Scope Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Scope Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Scope Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Scope Management Plan',
        },
        view: {
          title: 'Visualizar Scope Management Plan',
        },
        importer: {
          title: 'Importar ScopeManagementPlans',
          fileName: 'scopeManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    scheduleManagementPlan: {
        name: 'Schedule Management Plan',
        label: 'ScheduleManagementPlans',
        menu: 'ScheduleManagementPlans',
        exporterFileName: 'Schedule Management Plan_exportados',
        list: {
          menu: 'ScheduleManagementPlans',
          title: 'ScheduleManagementPlans',
        },
        create: {
          success: 'Schedule Management Plan salvo com sucesso',
        },
        update: {
          success: 'Schedule Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Schedule Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Schedule Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Schedule Management Plan',
        },
        view: {
          title: 'Visualizar Schedule Management Plan',
        },
        importer: {
          title: 'Importar ScheduleManagementPlans',
          fileName: 'scheduleManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    projectScopeStatement: {
        name: 'Project Scope Statement',
        label: 'ProjectScopeStatements',
        menu: 'ProjectScopeStatements',
        exporterFileName: 'Project Scope Statement_exportados',
        list: {
          menu: 'ProjectScopeStatements',
          title: 'ProjectScopeStatements',
        },
        create: {
          success: 'Project Scope Statement salvo com sucesso',
        },
        update: {
          success: 'Project Scope Statement salvo com sucesso',
        },
        destroy: {
          success: 'Project Scope Statement deletado com sucesso',
        },
        destroyAll: {
          success: 'Project Scope Statement(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Project Scope Statement',
        },
        view: {
          title: 'Visualizar Project Scope Statement',
        },
        importer: {
          title: 'Importar ProjectScopeStatements',
          fileName: 'projectScopeStatement_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    workbreakdownStructure: {
        name: 'Work Breakdown Structure',
        label: 'WorkbreakdownStructures',
        menu: 'WorkbreakdownStructures',
        exporterFileName: 'Work Breakdown Structure_exportados',
        list: {
          menu: 'WorkbreakdownStructures',
          title: 'WorkbreakdownStructures',
        },
        create: {
          success: 'Work Breakdown Structure salvo com sucesso',
        },
        update: {
          success: 'Work Breakdown Structure salvo com sucesso',
        },
        destroy: {
          success: 'Work Breakdown Structure deletado com sucesso',
        },
        destroyAll: {
          success: 'Work Breakdown Structure(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Work Breakdown Structure',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'arquivo': 'Arquivo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Work Breakdown Structure',
        },
        view: {
          title: 'Visualizar Work Breakdown Structure',
        },
        importer: {
          title: 'Importar WorkbreakdownStructures',
          fileName: 'workbreakdownStructure_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    scheduleNetworkDiagram: {
        name: 'Schedule Network Diagram',
        label: 'ScheduleNetworkDiagrams',
        menu: 'ScheduleNetworkDiagrams',
        exporterFileName: 'Schedule Network Diagram_exportados',
        list: {
          menu: 'ScheduleNetworkDiagrams',
          title: 'ScheduleNetworkDiagrams',
        },
        create: {
          success: 'Schedule Network Diagram salvo com sucesso',
        },
        update: {
          success: 'Schedule Network Diagram salvo com sucesso',
        },
        destroy: {
          success: 'Schedule Network Diagram deletado com sucesso',
        },
        destroyAll: {
          success: 'Schedule Network Diagram(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Schedule Network Diagram',
        },
        fields: {
          id: 'Id',
          'activityName': 'Activity Name',
          'predecessorActivity': 'Predecessor Activity',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Schedule Network Diagram',
        },
        view: {
          title: 'Visualizar Schedule Network Diagram',
        },
        importer: {
          title: 'Importar ScheduleNetworkDiagrams',
          fileName: 'scheduleNetworkDiagram_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    activityList: {
        name: 'Activity List',
        label: 'ActivityLists',
        menu: 'ActivityLists',
        exporterFileName: 'Activity List_exportados',
        list: {
          menu: 'ActivityLists',
          title: 'ActivityLists',
        },
        create: {
          success: 'Activity List salvo com sucesso',
        },
        update: {
          success: 'Activity List salvo com sucesso',
        },
        destroy: {
          success: 'Activity List deletado com sucesso',
        },
        destroyAll: {
          success: 'Activity List(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Activity List',
        },
        view: {
          title: 'Visualizar Activity List',
        },
        importer: {
          title: 'Importar ActivityLists',
          fileName: 'activityList_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    resource: {
        name: 'Resource',
        label: 'Resources',
        menu: 'Resources',
        exporterFileName: 'Resource_exportados',
        list: {
          menu: 'Resources',
          title: 'Resources',
        },
        create: {
          success: 'Resource salvo com sucesso',
        },
        update: {
          success: 'Resource salvo com sucesso',
        },
        destroy: {
          success: 'Resource deletado com sucesso',
        },
        destroyAll: {
          success: 'Resource(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Resource',
        },
        view: {
          title: 'Visualizar Resource',
        },
        importer: {
          title: 'Importar Resources',
          fileName: 'resource_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    resourceRequirements: {
        name: 'Resource Requirements',
        label: 'ResourceRequirements',
        menu: 'ResourceRequirements',
        exporterFileName: 'Resource Requirements_exportados',
        list: {
          menu: 'ResourceRequirements',
          title: 'ResourceRequirements',
        },
        create: {
          success: 'Resource Requirements salvo com sucesso',
        },
        update: {
          success: 'Resource Requirements salvo com sucesso',
        },
        destroy: {
          success: 'Resource Requirements deletado com sucesso',
        },
        destroyAll: {
          success: 'Resource Requirements(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Resource Requirements',
        },
        fields: {
          id: 'Id',
          'activity': 'Activity',
          'resource': 'Resource',
          'requiredAmountResource': 'Required Amount of Resource',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Resource Requirements',
        },
        view: {
          title: 'Visualizar Resource Requirements',
        },
        importer: {
          title: 'Importar ResourceRequirements',
          fileName: 'resourceRequirements_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    activityDurationEstimates: {
        name: 'Activity Duration Estimates',
        label: 'ActivityDurationEstimates',
        menu: 'ActivityDurationEstimates',
        exporterFileName: 'Activity Duration Estimates_exportados',
        list: {
          menu: 'ActivityDurationEstimates',
          title: 'ActivityDurationEstimates',
        },
        create: {
          success: 'Activity Duration Estimates salvo com sucesso',
        },
        update: {
          success: 'Activity Duration Estimates salvo com sucesso',
        },
        destroy: {
          success: 'Activity Duration Estimates deletado com sucesso',
        },
        destroyAll: {
          success: 'Activity Duration Estimates(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Activity Duration Estimates',
        },
        view: {
          title: 'Visualizar Activity Duration Estimates',
        },
        importer: {
          title: 'Importar ActivityDurationEstimates',
          fileName: 'activityDurationEstimates_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    stakeholderCalendars: {
        name: 'Stakeholder Calendars',
        label: 'StakeholderCalendars',
        menu: 'StakeholderCalendars',
        exporterFileName: 'Stakeholder Calendars_exportados',
        list: {
          menu: 'StakeholderCalendars',
          title: 'StakeholderCalendars',
        },
        create: {
          success: 'Stakeholder Calendars salvo com sucesso',
        },
        update: {
          success: 'Stakeholder Calendars salvo com sucesso',
        },
        destroy: {
          success: 'Stakeholder Calendars deletado com sucesso',
        },
        destroyAll: {
          success: 'Stakeholder Calendars(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Stakeholder Calendars',
        },
        view: {
          title: 'Visualizar Stakeholder Calendars',
        },
        importer: {
          title: 'Importar StakeholderCalendars',
          fileName: 'stakeholderCalendars_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    costManagementPlan: {
        name: 'Cost Management Plan',
        label: 'CostManagementPlans',
        menu: 'CostManagementPlans',
        exporterFileName: 'Cost Management Plan_exportados',
        list: {
          menu: 'CostManagementPlans',
          title: 'CostManagementPlans',
        },
        create: {
          success: 'Cost Management Plan salvo com sucesso',
        },
        update: {
          success: 'Cost Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Cost Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Cost Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Cost Management Plan',
        },
        view: {
          title: 'Visualizar Cost Management Plan',
        },
        importer: {
          title: 'Importar CostManagementPlans',
          fileName: 'costManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    costEstimates: {
        name: 'Cost Estimates',
        label: 'CostEstimates',
        menu: 'CostEstimates',
        exporterFileName: 'Cost Estimates_exportados',
        list: {
          menu: 'CostEstimates',
          title: 'CostEstimates',
        },
        create: {
          success: 'Cost Estimates salvo com sucesso',
        },
        update: {
          success: 'Cost Estimates salvo com sucesso',
        },
        destroy: {
          success: 'Cost Estimates deletado com sucesso',
        },
        destroyAll: {
          success: 'Cost Estimates(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Cost Estimates',
        },
        view: {
          title: 'Visualizar Cost Estimates',
        },
        importer: {
          title: 'Importar CostEstimates',
          fileName: 'costEstimates_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    qualityManagementPlan: {
        name: 'QualityManagementPlan',
        label: 'QualityManagementPlans',
        menu: 'QualityManagementPlans',
        exporterFileName: 'QualityManagementPlan_exportados',
        list: {
          menu: 'QualityManagementPlans',
          title: 'QualityManagementPlans',
        },
        create: {
          success: 'QualityManagementPlan salvo com sucesso',
        },
        update: {
          success: 'QualityManagementPlan salvo com sucesso',
        },
        destroy: {
          success: 'QualityManagementPlan deletado com sucesso',
        },
        destroyAll: {
          success: 'QualityManagementPlan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo QualityManagementPlan',
        },
        view: {
          title: 'Visualizar QualityManagementPlan',
        },
        importer: {
          title: 'Importar QualityManagementPlans',
          fileName: 'qualityManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    resourceManagementPlan: {
        name: 'Resource Management Plan',
        label: 'ResourceManagementPlans',
        menu: 'ResourceManagementPlans',
        exporterFileName: 'Resource Management Plan_exportados',
        list: {
          menu: 'ResourceManagementPlans',
          title: 'ResourceManagementPlans',
        },
        create: {
          success: 'Resource Management Plan salvo com sucesso',
        },
        update: {
          success: 'Resource Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Resource Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Resource Management Plan(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Resource Management Plan',
        },
        view: {
          title: 'Visualizar Resource Management Plan',
        },
        importer: {
          title: 'Importar ResourceManagementPlans',
          fileName: 'resourceManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    resourceBreakdownStructure: {
        name: 'Resource Breakdown Structure',
        label: 'ResourceBreakdownStructures',
        menu: 'ResourceBreakdownStructures',
        exporterFileName: 'Resource Breakdown Structure_exportados',
        list: {
          menu: 'ResourceBreakdownStructures',
          title: 'ResourceBreakdownStructures',
        },
        create: {
          success: 'Resource Breakdown Structure salvo com sucesso',
        },
        update: {
          success: 'Resource Breakdown Structure salvo com sucesso',
        },
        destroy: {
          success: 'Resource Breakdown Structure deletado com sucesso',
        },
        destroyAll: {
          success: 'Resource Breakdown Structure(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Resource Breakdown Structure',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Resource Breakdown Structure',
        },
        view: {
          title: 'Visualizar Resource Breakdown Structure',
        },
        importer: {
          title: 'Importar ResourceBreakdownStructures',
          fileName: 'resourceBreakdownStructure_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    communicationsManagementPlan: {
        name: 'Communications Management Plan',
        label: 'CommunicationsManagementPlans',
        menu: 'CommunicationsManagementPlans',
        exporterFileName: 'Communications Management Plan_exportados',
        list: {
          menu: 'CommunicationsManagementPlans',
          title: 'CommunicationsManagementPlans',
        },
        create: {
          success: 'Communications Management Plan salvo com sucesso',
        },
        update: {
          success: 'Communications Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Communications Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Communications Management Plan(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Communications Management Plan',
        },
        fields: {
          id: 'Id',
          'type': 'Type',
          'nome': 'Nome',
          'content': 'Content',
          'distributionReason': 'DistributionReason',
          'language': 'Language',
          'channel': 'Channel',
          'documentFormat': 'DocumentFormat',
          'method': 'Method',
          'frequency': 'Frequency',
          'allocatedResources': 'AllocatedResources',
          'format': 'Format',
          'local': 'Local',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'type': 'Tipo de comunicação que será usada, por exemplo, formal, informal, escrita, verbal, etc.',
          'nome': 'Aqui é onde você identifica o nome ou título da comunicação.',
          'content': 'Conteúdo da mensagem que será comunicada. Isso pode variar desde atualizações de status até documentos técnicos.',
          'distributionReason': 'Esta seção descreve o propósito da comunicação. Por exemplo, para informar sobre o progresso do projeto, para tomar uma decisão, para resolver um problema, etc.',
          'language': 'Idioma em que a comunicação ocorrerá.',
          'channel': 'Este é o meio pelo qual a mensagem será entregue. Pode ser e-mail, reuniões face a face, teleconferência, etc.',
          'documentFormat': 'Define o formato em que o documento ou comunicação será apresentado, como PDF, Word, apresentação em PowerPoint, etc.',
          'method': 'Refere-se ao método de comunicação, por exemplo, apresentações, relatórios, e-mails, etc.',
          'frequency': 'Identifica a frequência com que a comunicação ocorrerá, por exemplo, diariamente, semanalmente, mensalmente, conforme necessário, etc.',
          'allocatedResources': 'Identifica os recursos (humanos, financeiros, tecnológicos) alocados para a comunicação.',
          'format': 'Descreve o layout ou estrutura da comunicação. Pode ser formal ou informal, escrito ou verbal, etc.',
          'local': 'Identifica onde a comunicação ocorrerá, seja em um local físico ou plataforma digital.',
        },
        new: {
          title: 'Novo Communications Management Plan',
        },
        view: {
          title: 'Visualizar Communications Management Plan',
        },
        importer: {
          title: 'Importar CommunicationsManagementPlans',
          fileName: 'communicationsManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    riskManagementPlan: {
        name: 'Risk Management Plan',
        label: 'RiskManagementPlans',
        menu: 'RiskManagementPlans',
        exporterFileName: 'Risk Management Plan_exportados',
        list: {
          menu: 'RiskManagementPlans',
          title: 'RiskManagementPlans',
        },
        create: {
          success: 'Risk Management Plan salvo com sucesso',
        },
        update: {
          success: 'Risk Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Risk Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Risk Management Plan(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Risk Management Plan',
        },
        fields: {
          id: 'Id',
          'methodology': 'Methodology',
          'rolesResponsibilities': 'Roles and Responsibilities',
          'probabilityImpactMatrix': 'Probability and Impact Matrix',
          'riskCategories': 'Risk Categories',
          'riskStrategy': 'Risk Strategy',
          'tracking': 'Tracking',
          'funding': 'Funding',
          'timing': 'Timing',
          'stakeholderRiskAppetite': 'Stakeholder Risk Appetite',
          'definitionsRiskProbabilityImpacts': 'Definitions of Risk Probability and Impacts',
          'reportingFormats': 'Reporting Formats',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'methodology': 'Define a abordagem para gerenciar riscos em um projeto. Isso inclui os processos, ferramentas e técnicas que serão utilizados.',
          'rolesResponsibilities': 'Esta seção identifica quem será responsável por gerenciar riscos, que pode incluir a identificação, análise, resposta e monitoramento de riscos.',
          'probabilityImpactMatrix': 'Classifique os riscos com base em sua probabilidade de ocorrência e o impacto potencial no projeto.',
          'riskCategories': 'Classificar os riscos em categorias ajuda a identificar e analisar riscos de maneira eficiente.',
          'riskStrategy': 'Descreve a abordagem geral para lidar com riscos. Isso pode incluir evitar, mitigar, transferir ou aceitar riscos.',
          'tracking': 'Este é o processo de monitoramento e rastreamento de riscos durante todo o ciclo de vida do projeto.',
          'funding': 'Quantidade de recursos financeiros reservados para gerenciar riscos. Isso pode incluir fundos para a implementação de respostas a riscos.',
          'timing': 'Define quando e com que frequência o processo de gerenciamento de riscos será realizado durante o ciclo de vida do projeto.',
          'stakeholderRiskAppetite': 'Quantidade e tipo de risco que os stakeholders estão dispostos a aceitar.',
          'definitionsRiskProbabilityImpacts': 'Esta seção define como a probabilidade e os impactos dos riscos serão avaliados e quantificados.',
          'reportingFormats': 'Define os formatos e modelos para reportar os riscos e seu status.',
        },
        new: {
          title: 'Novo Risk Management Plan',
        },
        view: {
          title: 'Visualizar Risk Management Plan',
        },
        importer: {
          title: 'Importar RiskManagementPlans',
          fileName: 'riskManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    riskRegistration: {
        name: 'Risk Registration',
        label: 'RiskRegistrations',
        menu: 'RiskRegistrations',
        exporterFileName: 'Risk Registration_exportados',
        list: {
          menu: 'RiskRegistrations',
          title: 'RiskRegistrations',
        },
        create: {
          success: 'Risk Registration salvo com sucesso',
        },
        update: {
          success: 'Risk Registration salvo com sucesso',
        },
        destroy: {
          success: 'Risk Registration deletado com sucesso',
        },
        destroyAll: {
          success: 'Risk Registration(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Risk Registration',
        },
        fields: {
          id: 'Id',
          'impactedObjective': 'Impacted Objective',
          'priority': 'Priority',
          'currentRiskStatus': 'Current Risk Status',
          'event': 'Event',
          'identificationDateRange': 'Identification Date',
          'identificationDate': 'Identification Date',
          'identifier': 'Identifier',
          'riskType': 'Risk Type',
          'lessonsLearned': 'Lessons Learned',
          'riskCategory': 'Risk Category',
          'fallbackPlans': 'Fallback Plans',
          'contingencyPlansOwners': 'Contingency Plans Owners',
          'contingencyPlans': 'Contingency Plans',
          'secondaryRisks': 'Secondary Risks',
          'residualRisks': 'Residual Risks',
          'timingInformation': 'Timing Information',
          'potentialRiskOwners': 'Potential Risk Owners',
          'listPotentialRiskResponses': 'List of Potential Risk Responses',
          'riskTriggers': 'Risk Triggers',
          'oneOrMoreCauses': 'One or More Causes',
          'riskStrategy': 'Risk Strategy',
          'oneMoreEffectsObjectives': 'One or More Effects on Objectives',
          'riskScore': 'Risk Score',
          'impact': 'Impact',
          'probability': 'Probability',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'priority': {
            'Low': 'Low',
            'Medium': 'Medium',
            'High': 'High',
          },
        },
        placeholders: {

        },
        hints: {
          'impactedObjective': 'O objetivo do projeto que será afetado se o risco ocorrer.',
          'priority': 'Esta é a prioridade do risco, geralmente baseada em sua pontuação de risco (uma combinação de probabilidade e impacto).',
          'currentRiskStatus': 'O status atual do risco (por exemplo, identificado, analisado, monitorado).',
          'event': 'Descrição do evento de risco.',
          'identificationDate': 'A data em que o risco foi identificado.',
          'identifier': 'A pessoa ou entidade que identificou o risco.',
          'riskType': 'O tipo de risco (por exemplo, estratégico, operacional, financeiro, etc.).',
          'lessonsLearned': 'Conhecimentos adquiridos de experiências passadas que podem ajudar a gerenciar o risco.',
          'riskCategory': 'Categoria ou classificação do risco.',
          'fallbackPlans': 'Planos de ação que serão implementados se o plano de resposta ao risco falhar.',
          'contingencyPlansOwners': 'As pessoas ou entidades responsáveis pela execução dos planos de contingência.',
          'contingencyPlans': 'Planos que serão postos em prática se o risco ocorrer.',
          'secondaryRisks': 'Riscos que surgem como resultado da implementação de uma resposta a um risco.',
          'residualRisks': 'Riscos que permanecem após as respostas ao risco terem sido implementadas.',
          'timingInformation': 'Informações sobre quando o risco pode ocorrer.',
          'potentialRiskOwners': 'As pessoas ou entidades que são responsáveis por responder ao risco.',
          'listPotentialRiskResponses': 'Uma lista de possíveis respostas ao risco.',
          'riskTriggers': 'Eventos ou condições que indicam que um risco está prestes a ocorrer.',
          'oneOrMoreCauses': 'As causas que podem levar à ocorrência do risco.',
          'riskStrategy': 'A estratégia geral para lidar com o risco (por exemplo, evitar, transferir, mitigar, aceitar).',
          'oneMoreEffectsObjectives': 'O efeito ou efeitos que o risco terá nos objetivos do projeto se ocorrer.',
          'riskScore': 'Uma pontuação quantitativa do risco, geralmente baseada em sua probabilidade de ocorrência e o impacto potencial no projeto.',
          'impact': 'O efeito potencial que o risco terá no projeto.',
          'probability': 'A probabilidade de o risco ocorrer.',
        },
        new: {
          title: 'Novo Risk Registration',
        },
        view: {
          title: 'Visualizar Risk Registration',
        },
        importer: {
          title: 'Importar RiskRegistrations',
          fileName: 'riskRegistration_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    procurementManagementPlan: {
        name: 'Procurement Management Plan',
        label: 'ProcurementManagementPlans',
        menu: 'ProcurementManagementPlans',
        exporterFileName: 'Procurement Management Plan_exportados',
        list: {
          menu: 'ProcurementManagementPlans',
          title: 'ProcurementManagementPlans',
        },
        create: {
          success: 'Procurement Management Plan salvo com sucesso',
        },
        update: {
          success: 'Procurement Management Plan salvo com sucesso',
        },
        destroy: {
          success: 'Procurement Management Plan deletado com sucesso',
        },
        destroyAll: {
          success: 'Procurement Management Plan(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Procurement Management Plan',
        },
        fields: {
          id: 'Id',
          'productsServicesWillBeObtained': 'Products or Services Will be Obtained',
          'howProcurementCoordinated': 'How Procurement will be Coordinated',
          'timetableProcurementActivities': 'Timetable of Key Procurement Activities',
          'procurementMetrics': 'Procurement Metrics',
          'constraintsAssumptions': 'Constraints and Assumptions',
          'stakeholderRolesResponsibilities': 'Stakeholder Roles and Responsibilities',
          'theLegalJurisdiction': 'The Legal Jurisdiction',
          'independentEstimates': 'Independent Estimates',
          'riskManagementIssues': 'Risk Management Issues',
          'prequalifiedSellers': 'Prequalified Sellers',
          'procurementStrategy': 'Procurement Strategy',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'productsServicesWillBeObtained': 'Descreve os produtos ou serviços que serão adquiridos de fornecedores externos. Isso deve incluir detalhes como especificações, quantidades e prazos.',
          'howProcurementCoordinated': 'Define como as atividades de aquisição serão coordenadas com outras partes do projeto. Isso pode incluir a integração com o cronograma do projeto, com o gerenciamento de riscos e com outras áreas.',
          'timetableProcurementActivities': 'Fornece um cronograma das principais atividades de aquisição, como o tempo necessário para preparar e emitir pedidos de proposta, tempo para receber e avaliar propostas, e prazos para a entrega dos bens ou serviços adquiridos.',
          'procurementMetrics': 'Define as métricas que serão usadas para avaliar o desempenho das aquisições. Isso pode incluir coisas como custo, tempo de entrega, qualidade, e conformidade com as especificações.',
          'constraintsAssumptions': 'Identifica as limitações e suposições feitas no plano de gerenciamento de aquisições. As limitações podem ser coisas como o orçamento disponível para aquisições, enquanto as suposições podem ser coisas como a disponibilidade de fornecedores qualificados.',
          'stakeholderRolesResponsibilities': 'Define as responsabilidades dos stakeholders em relação às aquisições. Isso pode incluir quem é responsável por aprovar aquisições, quem prepara os pedidos de proposta, quem avalia as propostas, etc.',
          'theLegalJurisdiction': ' Identifica a jurisdição legal que se aplicará aos contratos de aquisição. Isso é especialmente importante para projetos internacionais, onde as partes podem estar em diferentes países.',
          'independentEstimates': 'Explica se e como serão usadas estimativas independentes para validar propostas de fornecedores.',
          'riskManagementIssues': 'Discute os riscos associados às aquisições e como eles serão gerenciados. Isso pode incluir riscos como atrasos na entrega, qualidade insatisfatória, e falha do fornecedor.',
          'prequalifiedSellers': 'Identifica os vendedores que já foram pré-qualificados para fornecer os bens ou serviços necessários.',
          'procurementStrategy': 'Descreve a estratégia geral de aquisição para o projeto. Isso pode incluir coisas como a decisão de usar vários fornecedores para reduzir o risco, ou a decisão de usar um tipo específico de contrato para melhor alinhar os incentivos do fornecedor com os objetivos do projeto.',
        },
        new: {
          title: 'Novo Procurement Management Plan',
        },
        view: {
          title: 'Visualizar Procurement Management Plan',
        },
        importer: {
          title: 'Importar ProcurementManagementPlans',
          fileName: 'procurementManagementPlan_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    procurementStatementWorkRegister: {
        name: 'Procurement Statement of Work Register',
        label: 'ProcurementStatementWorkRegisters',
        menu: 'ProcurementStatementWorkRegisters',
        exporterFileName: 'Procurement Statement of Work Register_exportados',
        list: {
          menu: 'ProcurementStatementWorkRegisters',
          title: 'ProcurementStatementWorkRegisters',
        },
        create: {
          success: 'Procurement Statement of Work Register salvo com sucesso',
        },
        update: {
          success: 'Procurement Statement of Work Register salvo com sucesso',
        },
        destroy: {
          success: 'Procurement Statement of Work Register deletado com sucesso',
        },
        destroyAll: {
          success: 'Procurement Statement of Work Register(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Procurement Statement of Work Register',
        },
        fields: {
          id: 'Id',
          'descriptionItemPurchased': 'Description of item to be purchased',
          'associatedContractTypes': 'Associated Contract Types',
          'vendorSelectionCriteria': 'Vendor Selection Criteria',
          'restrictions': 'Restrictions',
          'premises': 'Premises',
          'mainDeliveriesSchedule': 'Main deliveries schedule',
          'additionalInformation': 'Additional information',
          'procurementManagement': 'Procurement Management',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'descriptionItemPurchased': 'Este é o detalhamento do produto ou serviço a ser adquirido. Deve ser suficientemente detalhado para garantir que as expectativas estejam claras para todos os fornecedores em potencial.',
          'associatedContractTypes': 'Especifique o tipo de contrato a ser utilizado para esta aquisição. Pode ser um contrato de preço fixo, tempo e material ou custo reembolsável.',
          'vendorSelectionCriteria': 'Descreve os critérios que serão utilizados para selecionar o fornecedor. Isso pode incluir preço, capacidade técnica, reputação, tempo de entrega, entre outros.',
          'restrictions': 'Se existem restrições específicas que os fornecedores precisam estar cientes, estas devem ser claramente identificadas. Por exemplo, isso pode incluir restrições de tempo, restrições legais ou regulatórias, ou restrições relacionadas a padrões específicos a serem atendidos.',
          'premises': 'Se o trabalho for realizado nas instalações do cliente, isso deve ser claramente indicado, juntamente com quaisquer requisitos ou restrições específicas relacionadas a isso.',
          'mainDeliveriesSchedule': 'Este é o cronograma principal de entregas, ou seja, quando o produto ou serviço adquirido deve ser entregue. Isso deve ser especificado em termos de datas ou marcos do projeto.',
          'additionalInformation': 'Qualquer informação adicional que seja relevante para a aquisição. Isso pode incluir coisas como condições de pagamento, requisitos de seguro, etc.',
          'procurementManagement': 'Este campo descreveria como o processo de aquisição será gerenciado, incluindo detalhes sobre como e quando as revisões e aprovações de fornecedores ocorrerão.',
        },
        new: {
          title: 'Novo Procurement Statement of Work Register',
        },
        view: {
          title: 'Visualizar Procurement Statement of Work Register',
        },
        importer: {
          title: 'Importar ProcurementStatementWorkRegisters',
          fileName: 'procurementStatementWorkRegister_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    projectPerformanceMonitoringReport: {
        name: 'Project Performance and Monitoring Report',
        label: 'ProjectPerformanceMonitoringReports',
        menu: 'ProjectPerformanceMonitoringReports',
        exporterFileName: 'Project Performance and Monitoring Report_exportados',
        list: {
          menu: 'ProjectPerformanceMonitoringReports',
          title: 'ProjectPerformanceMonitoringReports',
        },
        create: {
          success: 'Project Performance and Monitoring Report salvo com sucesso',
        },
        update: {
          success: 'Project Performance and Monitoring Report salvo com sucesso',
        },
        destroy: {
          success: 'Project Performance and Monitoring Report deletado com sucesso',
        },
        destroyAll: {
          success: 'Project Performance and Monitoring Report(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Project Performance and Monitoring Report',
        },
        fields: {
          id: 'Id',
          'currentPerformanceAnalysis': 'CurrentPerformanceAnalysis',
          'forecastsAsPlanned': 'Forecasts as planned',
          'forecastsConsideringCurrentlyPerformance': 'Forecasts Considering Currently Performance',
          'currentRiskSituation': 'Current Risk Situation',
          'currentStatusIssues': 'Current Status of Issues',
          'workCompletedDuringPeriod': 'Work Completed During the Period',
          'workToBeCompletedNextPeriod': 'Work to be Completed in the Next Period',
          'summaryChangesApprovedInThePeriod': 'Summary of Changes Approved in the Period',
          'earnedValueManagement': 'EarnedValueManagement',
          'otherRelevantInformation': 'Other Relevant Information',
          'dateReportRange': 'DateReport',
          'dateReport': 'DateReport',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'currentPerformanceAnalysis': 'Análise do desempenho atual do projeto em relação aos prazos, custos e qualidade planejados.',
          'forecastsAsPlanned': 'Previsões iniciais do projeto conforme definidas no plano.',
          'forecastsConsideringCurrentlyPerformance': 'Atualização das previsões do projeto com base no desempenho atual.',
          'currentRiskSituation': 'Status atual dos riscos identificados no projeto.',
          'currentStatusIssues': ' Lista de problemas ou questões significativas que afetam o projeto atualmente e ações em andamento para resolvê-los.',
          'workCompletedDuringPeriod': 'Atividades e entregas concluídas durante o período de relatório.',
          'workToBeCompletedNextPeriod': 'Atividades planejadas para o próximo período com estimativas de prazos e recursos.',
          'summaryChangesApprovedInThePeriod': 'Resumo das alterações aprovadas no projeto durante o período e seu impacto.',
          'earnedValueManagement': 'Métricas de Valor Agregado (EV), Custo Real (AC) e Valor Planejado (PV) para avaliar o desempenho do projeto.',
          'otherRelevantInformation': 'Inclusão de outras informações relevantes para o projeto que não se enquadram nos campos anteriores.',
        },
        new: {
          title: 'Novo Project Performance and Monitoring Report',
        },
        view: {
          title: 'Visualizar Project Performance and Monitoring Report',
        },
        importer: {
          title: 'Importar ProjectPerformanceMonitoringReports',
          fileName: 'projectPerformanceMonitoringReport_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    workPerformanceReports: {
        name: 'Work Performance Reports',
        label: 'WorkPerformanceReports',
        menu: 'WorkPerformanceReports',
        exporterFileName: 'Work Performance Reports_exportados',
        list: {
          menu: 'WorkPerformanceReports',
          title: 'WorkPerformanceReports',
        },
        create: {
          success: 'Work Performance Reports salvo com sucesso',
        },
        update: {
          success: 'Work Performance Reports salvo com sucesso',
        },
        destroy: {
          success: 'Work Performance Reports deletado com sucesso',
        },
        destroyAll: {
          success: 'Work Performance Reports(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Work Performance Reports',
        },
        fields: {
          id: 'Id',
          'responsible': 'Responsible',
          'mainActivitiesExecution': 'Main activities in execution (with %)',
          'upcomingActivitiesPerform': 'Upcoming activities to perform',
          'generalComments': 'General Comments',
          'issues': 'Issues',
          'changes': 'Changes',
          'risks': 'Risks',
          'attentionPoints': 'Attention Points',
          'dateRange': 'Date',
          'date': 'Date',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'responsible': 'Indique a pessoa ou equipe responsável pelo relatório e pelo desempenho do trabalho no projeto.',
          'mainActivitiesExecution': 'Liste as atividades principais em execução no projeto, acompanhadas pela porcentagem de conclusão.',
          'upcomingActivitiesPerform': 'Enumere as próximas atividades a serem realizadas no projeto.',
          'generalComments': 'Forneça comentários gerais sobre o andamento do trabalho e outros aspectos relevantes do projeto.',
          'issues': 'Destaque as questões ou problemas identificados no projeto que precisam ser tratados.',
          'changes': 'Informe sobre quaisquer mudanças aprovadas no escopo ou outros aspectos do projeto.',
          'risks': 'Descreva os riscos identificados e o status das ações de mitigação em andamento.',
          'attentionPoints': 'Destaque pontos importantes que merecem atenção especial no projeto.',
        },
        new: {
          title: 'Novo Work Performance Reports',
        },
        view: {
          title: 'Visualizar Work Performance Reports',
        },
        importer: {
          title: 'Importar WorkPerformanceReports',
          fileName: 'workPerformanceReports_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    issueLog: {
        name: 'Issue Log',
        label: 'IssueLogs',
        menu: 'IssueLogs',
        exporterFileName: 'Issue Log_exportados',
        list: {
          menu: 'IssueLogs',
          title: 'IssueLogs',
        },
        create: {
          success: 'Issue Log salvo com sucesso',
        },
        update: {
          success: 'Issue Log salvo com sucesso',
        },
        destroy: {
          success: 'Issue Log deletado com sucesso',
        },
        destroyAll: {
          success: 'Issue Log(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Issue Log',
        },
        fields: {
          id: 'Id',
          'responsibleIdentifying': 'Responsible for Identifying',
          'identificationDateRange': 'Identification Date',
          'identificationDate': 'Identification Date',
          'issueDescription': 'Description of the Issue',
          'issueType': 'Issue Type',
          'issueResponsible': 'Issue Responsible',
          'situation': 'Situation',
          'requiredAction': 'Required Action',
          'comments': 'Comments',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'responsibleIdentifying': 'Identifique a pessoa ou equipe responsável por identificar o problema ou questão no projeto.',
          'issueDescription': 'Forneça uma descrição detalhada do problema ou questão encontrado no projeto.',
          'issueType': 'Classifique o tipo de problema ou questão (por exemplo, atraso, orçamento, qualidade, etc.).',
          'issueResponsible': 'Indique a pessoa ou equipe responsável por resolver o problema ou questão.',
          'situation': 'Descreva a situação atual do problema ou questão e seu impacto no projeto.',
          'requiredAction': 'Especifique as ações necessárias para lidar com o problema ou questão e resolvê-lo.',
          'comments': 'Adicione quaisquer comentários adicionais relevantes sobre o problema ou questão.',
        },
        new: {
          title: 'Novo Issue Log',
        },
        view: {
          title: 'Visualizar Issue Log',
        },
        importer: {
          title: 'Importar IssueLogs',
          fileName: 'issueLog_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    lessonLearnedRegister: {
        name: 'Lesson Learned Register',
        label: 'LessonLearnedRegisters',
        menu: 'LessonLearnedRegisters',
        exporterFileName: 'Lesson Learned Register_exportados',
        list: {
          menu: 'LessonLearnedRegisters',
          title: 'LessonLearnedRegisters',
        },
        create: {
          success: 'Lesson Learned Register salvo com sucesso',
        },
        update: {
          success: 'Lesson Learned Register salvo com sucesso',
        },
        destroy: {
          success: 'Lesson Learned Register deletado com sucesso',
        },
        destroyAll: {
          success: 'Lesson Learned Register(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Lesson Learned Register',
        },
        fields: {
          id: 'Id',
          'stakeholderWhoIdentified': 'Stakeholder Who Identified',
          'identificationDateRange': 'Identification Date',
          'identificationDate': 'Identification Date',
          'situationDescription': 'Situation Description',
          'category': 'Category',
          'whoCouldBeInterested': 'Who Could Be Interested',
          'status': 'Status',
          'impact': 'Impact',
          'recommendations': 'Recommendations',
          'associatedLifeCycleStage': 'AssociatedLifeCycleStage',
          'associatedKnowledgeArea': 'AssociatedKnowledgeArea',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'stakeholderWhoIdentified': 'Identifique o interessado (stakeholder) que identificou a lição aprendida.',
          'identificationDate': 'Registre a data em que a lição aprendida foi identificada.',
          'situationDescription': 'Descreva a situação ou evento específico que gerou a lição aprendida.',
          'category': 'Classifique a lição aprendida em uma categoria relevante (por exemplo, comunicação, gerenciamento de riscos, qualidade, etc.).',
          'whoCouldBeInterested': 'Indique quais outras partes interessadas poderiam se beneficiar com essa lição aprendida.',
          'status': 'Informe o status atual da lição aprendida (por exemplo, pendente de implementação, implementada, etc.).',
          'impact': 'Avalie o impacto da lição aprendida no projeto ou nas atividades futuras.',
          'recommendations': 'Forneça recomendações práticas com base na lição aprendida para futuros projetos ou atividades similares.',
          'associatedLifeCycleStage': 'Indique a fase do ciclo de vida do projeto à qual a lição aprendida está relacionada.',
          'associatedKnowledgeArea': 'Identifique a área de conhecimento do PMBOK à qual a lição aprendida se relaciona (por exemplo, gerenciamento de custos, gerenciamento de riscos, etc.).',
        },
        new: {
          title: 'Novo Lesson Learned Register',
        },
        view: {
          title: 'Visualizar Lesson Learned Register',
        },
        importer: {
          title: 'Importar LessonLearnedRegisters',
          fileName: 'lessonLearnedRegister_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    qualityChecklist: {
        name: 'Quality Checklist',
        label: 'QualityChecklists',
        menu: 'QualityChecklists',
        exporterFileName: 'Quality Checklist_exportados',
        list: {
          menu: 'QualityChecklists',
          title: 'QualityChecklists',
        },
        create: {
          success: 'Quality Checklist salvo com sucesso',
        },
        update: {
          success: 'Quality Checklist salvo com sucesso',
        },
        destroy: {
          success: 'Quality Checklist deletado com sucesso',
        },
        destroyAll: {
          success: 'Quality Checklist(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Quality Checklist',
        },
        fields: {
          id: 'Id',
          'verifiedProductProcessActivity': 'Verified Product, Process, or Activity',
          'verificationDate': 'Verification Date',
          'responsibleVerification': 'Responsible for Verification',
          'associatedDocuments': 'Associated Documents',
          'guidelinesComments': 'Guidelines / Comments',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'verifiedProductProcessActivity': 'Liste o produto, processo ou atividade que será verificado usando o checklist de qualidade.',
          'verificationDate': 'Registre a data em que a verificação de qualidade foi realizada.',
          'responsibleVerification': 'Indique a pessoa ou equipe responsável por conduzir a verificação de qualidade.',
          'associatedDocuments': 'Liste os documentos relacionados que foram usados como referência durante a verificação.',
          'guidelinesComments': 'Forneça diretrizes específicas ou comentários relevantes para orientar a verificação e relatar os resultados.',
        },
        new: {
          title: 'Novo Quality Checklist',
        },
        view: {
          title: 'Visualizar Quality Checklist',
        },
        importer: {
          title: 'Importar QualityChecklists',
          fileName: 'qualityChecklist_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    teamPerformanceEvaluation: {
        name: 'Team Performance Evaluation',
        label: 'TeamPerformanceEvaluations',
        menu: 'TeamPerformanceEvaluations',
        exporterFileName: 'Team Performance Evaluation_exportados',
        list: {
          menu: 'TeamPerformanceEvaluations',
          title: 'TeamPerformanceEvaluations',
        },
        create: {
          success: 'Team Performance Evaluation salvo com sucesso',
        },
        update: {
          success: 'Team Performance Evaluation salvo com sucesso',
        },
        destroy: {
          success: 'Team Performance Evaluation deletado com sucesso',
        },
        destroyAll: {
          success: 'Team Performance Evaluation(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Team Performance Evaluation',
        },
        fields: {
          id: 'Id',
          'teamMemberName': 'TeamMemberName',
          'jobRole': 'Job Role',
          'functionProject': 'Function in the Project',
          'evaluationDate': 'Evaluation Date',
          'reviewEvaluation': 'Review Evaluation',
          'strongPoints': 'StrongPoints',
          'opportunitiesImprovement': 'Opportunities for improvement',
          'developmentPlan': 'Development plan',
          'alreadyDeveloped': 'Already developed',
          'externalcomments': 'External comments  to the project team',
          'teamMatesComments': 'Team mates comments',
          'evaluatorComments': 'Evaluator Comments',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Team Performance Evaluation',
        },
        view: {
          title: 'Visualizar Team Performance Evaluation',
        },
        importer: {
          title: 'Importar TeamPerformanceEvaluations',
          fileName: 'teamPerformanceEvaluation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    changeRequest: {
        name: 'Change Request',
        label: 'ChangeRequests',
        menu: 'ChangeRequests',
        exporterFileName: 'Change Request_exportados',
        list: {
          menu: 'ChangeRequests',
          title: 'ChangeRequests',
        },
        create: {
          success: 'Change Request salvo com sucesso',
        },
        update: {
          success: 'Change Request salvo com sucesso',
        },
        destroy: {
          success: 'Change Request deletado com sucesso',
        },
        destroyAll: {
          success: 'Change Request(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Change Request',
        },
        fields: {
          id: 'Id',
          'requester': 'Requester',
          'requestIdentificationNumber': 'Request Identification Number',
          'typeChange': 'Type of Change',
          'statusSituation': 'StatusSituation',
          'requestDateRange': 'Request Date',
          'requestDate': 'Request Date',
          'dateCCBRange': 'Date of the CCB',
          'dateCCB': 'Date of the CCB',
          'descriptionChange': 'Description of Change',
          'impactedKnowledgeAreas': 'Impacted Knowledge Areas',
          'impactedDeliveriesDocuments': 'Impacted Deliveries/Documents',
          'justification': 'Justification',
          'additionalComments': 'Additional Comments',
          'opinionCCB': 'Opinion of the CCB',
          'opinionProjectManager': 'Opinion of Project Manager',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'typeChange': {
            'CorrectiveAction': 'CorrectiveAction',
            'Preventive Action': 'Preventive Action',
            'Defect Repair': 'Defect Repair',
            'Update': 'Update',
          },
          'statusSituation': {
            'Under Analysis': 'Under Analysis',
            'Approved': 'Approved',
            'Rejected': 'Rejected',
            'Canceled': 'Canceled',
            'Suspended': 'Suspended',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Change Request',
        },
        view: {
          title: 'Visualizar Change Request',
        },
        importer: {
          title: 'Importar ChangeRequests',
          fileName: 'changeRequest_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    projectClosure: {
        name: 'Project Closure',
        label: 'ProjectClosures',
        menu: 'ProjectClosures',
        exporterFileName: 'Project Closure_exportados',
        list: {
          menu: 'ProjectClosures',
          title: 'ProjectClosures',
        },
        create: {
          success: 'Project Closure salvo com sucesso',
        },
        update: {
          success: 'Project Closure salvo com sucesso',
        },
        destroy: {
          success: 'Project Closure deletado com sucesso',
        },
        destroyAll: {
          success: 'Project Closure(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Project Closure',
        },
        fields: {
          id: 'Id',
          'client': 'Client',
          'dateclosureRange': 'Date of project closure',
          'dateclosure': 'Date of project closure',
          'mainChangesApproved': 'MainChangesApproved',
          'mainlessonslearned': 'Main lessons learned',
          'mainDeviations': 'Main deviations',
          'customerComments': 'Customer comments',
          'sponsorscomments': 'Sponsor\'s comments',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Project Closure',
        },
        view: {
          title: 'Visualizar Project Closure',
        },
        importer: {
          title: 'Importar ProjectClosures',
          fileName: 'projectClosure_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    closedProcurementDocumentation: {
        name: 'Closed Procurement Documentation',
        label: 'ClosedProcurementDocumentations',
        menu: 'ClosedProcurementDocumentations',
        exporterFileName: 'Closed Procurement Documentation_exportados',
        list: {
          menu: 'ClosedProcurementDocumentations',
          title: 'ClosedProcurementDocumentations',
        },
        create: {
          success: 'Closed Procurement Documentation salvo com sucesso',
        },
        update: {
          success: 'Closed Procurement Documentation salvo com sucesso',
        },
        destroy: {
          success: 'Closed Procurement Documentation deletado com sucesso',
        },
        destroyAll: {
          success: 'Closed Procurement Documentation(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Closed Procurement Documentation',
        },
        fields: {
          id: 'Id',
          'providername': 'Provider\'s name',
          'mainDeliveriesProject': 'MainDeliveriesProject',
          'validatorComments': 'ValidatorComments',
          'supplierRepresentative': 'Supplier Representative',
          'closingDate': 'Closing Date',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Closed Procurement Documentation',
        },
        view: {
          title: 'Visualizar Closed Procurement Documentation',
        },
        importer: {
          title: 'Importar ClosedProcurementDocumentations',
          fileName: 'closedProcurementDocumentation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    finalReport: {
        name: 'Final Report',
        label: 'FinalReports',
        menu: 'FinalReports',
        exporterFileName: 'Final Report_exportados',
        list: {
          menu: 'FinalReports',
          title: 'FinalReports',
        },
        create: {
          success: 'Final Report salvo com sucesso',
        },
        update: {
          success: 'Final Report salvo com sucesso',
        },
        destroy: {
          success: 'Final Report deletado com sucesso',
        },
        destroyAll: {
          success: 'Final Report(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Final Report',
        },
        fields: {
          id: 'Id',
          'summaryLevelDescription': 'Summary Level Description of the Project or Phase',
          'scopeObjectivesCriteria': 'Scope Objectives, Scope Criteria, and Evidences',
          'qualityObjectives': 'Quality Objectives',
          'costObjectives': 'Cost Objectives',
          'scheduleObjectives': 'Schedule Objectives',
          'summaryValidation': 'Summary of the Validation Information for the Results',
          'summaryResults': 'Summary of Results Achieved the Business Needs',
          'summaryRisksIssues': 'Summary Risks or Issues',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Final Report',
        },
        view: {
          title: 'Visualizar Final Report',
        },
        importer: {
          title: 'Importar FinalReports',
          fileName: 'finalReport_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    createAnAccount: 'Não possui conta? Criar uma.',
    social: {
      header: 'ou entrar com uma rede social',
      signinWithGoogle: 'Entrar com Google',
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists:
        'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;