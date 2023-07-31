const es = {
  app: {
    title: 'Aplicación',
  },
  auth: {
    userNotFound:
      'Lo sentimos, no reconocemos tus credenciales',
    wrongPassword:
      'Lo sentimos, no reconocemos tus credenciales',
    weakPassword: 'Esta contraseña es muy débil.',
    emailAlreadyInUse: 'Correo electrónico ya está en uso',
    invalidEmail:
      'Por favor proporcione un correo electrónico válido',
    passwordReset: {
      invalidToken:
        'El enlace de restablecimiento de contraseña no es válido o ha expirado',
      error: 'Correo electrónico no reconocido',
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'El enlace de verificación de correo electrónico no es válido o ha expirado.',
      error: 'Correo electrónico no reconocido',
      signedInAsWrongUser:
        'Esta confirmación por correo electrónico se envió a {0} pero ha iniciado sesión como {1}.',
    },
    passwordChange: {
      invalidPassword:
        'La contraseña anterior no es válida.',
    },
  },
  user: {
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe.',
      userNotFound: 'Usuario no encontrado.',
      destroyingHimself: 'No puedes eliminarte a ti mismo.',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador.',
      revokingPlanUser:
        'No puede revocar el permiso de administrador del administrador del plan.',
      destroyingPlanUser:
        'No puede eliminar el administrador del plan.',
    },
  },
  tenant: {
    exists:
      'Ya hay un espacio de trabajo en esta aplicación.',
    url: {
      exists:
        'Esta URL del espacio de trabajo ya está en uso.',
    },
    invitation: {
      notSameEmail:
        'Esta invitación se envió a {0} pero has iniciado sesión como {1}.',
    },
    planActive:
      'Hay un plan activo para este espacio de trabajo. Por favor, cancele el plan primero.',
    stripeNotConfigured: 'Stripe no está configurado.',
  },
  importer: {
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
  errors: {
    notFound: {
      message: 'Extraviado',
    },
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
  },
  email: {
    error:
      'El proveedor de correo electrónico no está configurado.',
  },
  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  entities: {
    projectCharter: {
      errors: {
        unique: {

        }
      }
    },
    businessCase: {
      errors: {
        unique: {

        }
      }
    },
    benefitsManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    assumptionLog: {
      errors: {
        unique: {

        }
      }
    },
    stakeholderRegistration: {
      errors: {
        unique: {

        }
      }
    },
    projectManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    requirementsManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    requirementDocumentation: {
      errors: {
        unique: {

        }
      }
    },
    scopeManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    scheduleManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    projectScopeStatement: {
      errors: {
        unique: {

        }
      }
    },
    workbreakdownStructure: {
      errors: {
        unique: {

        }
      }
    },
    scheduleNetworkDiagram: {
      errors: {
        unique: {

        }
      }
    },
    activityList: {
      errors: {
        unique: {

        }
      }
    },
    resource: {
      errors: {
        unique: {

        }
      }
    },
    resourceRequirements: {
      errors: {
        unique: {

        }
      }
    },
    activityDurationEstimates: {
      errors: {
        unique: {

        }
      }
    },
    stakeholderCalendars: {
      errors: {
        unique: {

        }
      }
    },
    costManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    costEstimates: {
      errors: {
        unique: {

        }
      }
    },
    qualityManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    resourceManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    resourceBreakdownStructure: {
      errors: {
        unique: {

        }
      }
    },
    communicationsManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    riskManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    riskRegistration: {
      errors: {
        unique: {

        }
      }
    },
    procurementManagementPlan: {
      errors: {
        unique: {

        }
      }
    },
    procurementStatementWorkRegister: {
      errors: {
        unique: {

        }
      }
    },
    projectPerformanceMonitoringReport: {
      errors: {
        unique: {

        }
      }
    },
    workPerformanceReports: {
      errors: {
        unique: {

        }
      }
    },
    issueLog: {
      errors: {
        unique: {

        }
      }
    },
    lessonLearnedRegister: {
      errors: {
        unique: {

        }
      }
    },
    qualityChecklist: {
      errors: {
        unique: {

        }
      }
    },
    teamPerformanceEvaluation: {
      errors: {
        unique: {

        }
      }
    },
    changeRequest: {
      errors: {
        unique: {

        }
      }
    },
    projectClosure: {
      errors: {
        unique: {

        }
      }
    },
    closedProcurementDocumentation: {
      errors: {
        unique: {

        }
      }
    },
    finalReport: {
      errors: {
        unique: {

        }
      }
    },
  }
};

export default es;