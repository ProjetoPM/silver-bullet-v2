import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faTimes, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { RichTextEditor } from 'src/components/RichEditor'
import { i18n } from 'src/i18n'
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem'
import { z } from 'zod'
import { useState } from 'react'
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem'

const schema = z.object({
  projectName: z
    .string()
    .refine(value => value.replace('<p><br></p>', '').length > 0),
  highLevelProjectDescription: z.string(),
  startdate: z.union([z.date(), z.null()]).optional().default(null),
  enddate: z.date().optional().default(new Date()),
  projectPurpose: z.string().optional(),
  measurableProjectObjectives: z.string().optional(),
  keyBenefits: z.string().optional(),
  highlevelRequirements: z.string().optional(),
  boundaries: z.string().optional(),
  overallProjectRisk: z.string().optional(),
  summaryMilestoneSchedule: z.string().optional(),
  preapprovedFinancialResources: z.string().optional(),
  projectApprovalRequirements: z.string().optional(),
  successCriteria: z.string().optional(),
  projectExitCriteria: z.string().optional(),
})

type FormSchema = z.infer<typeof schema>

function ProjectCharterForm(props) {
  const { saveLoading, title } = props
  const [isRichText, setRichText] = useState(false)

  const initialValues = {
    projectName: props.record.projectName,
    highLevelProjectDescription: props.record.highLevelProjectDescription,
    startdate: new Date(props.record.startdate || new Date()),
    enddate: new Date(props.record.enddate || new Date()),
    projectPurpose: props.record.projectPurpose || '',
    measurableProjectObjectives: props.record.measurableProjectObjectives || '',
    keyBenefits: props.record.keyBenefits || '',
    highlevelRequirements: props.record.highlevelRequirements || '',
    boundaries: props.record.boundaries || '',
    overallProjectRisk: props.record.overallProjectRisk || '',
    summaryMilestoneSchedule: props.record.summaryMilestoneSchedule || '',
    preapprovedFinancialResources:
      props.record.preapprovedFinancialResources || '',
    projectApprovalRequirements: props.record.projectApprovalRequirements || '',
    successCriteria: props.record.successCriteria || '',
    projectExitCriteria: props.record.projectExitCriteria || '',
  }

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    shouldFocusError: true,
    mode: 'all',
    defaultValues: initialValues,
  })

  const onSubmit = values => {
    props.onSubmit(props.record?.id, values)
  }

  const onReset = () => {
    // TODO
    // Object.keys(initialValues).forEach(key => {
    //   form.setValue(key, initialValues[key])
    // })
  }

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg font-medium">{title}</h1>
        <div className="text-sm">
          <button
            className="bg-gray-600 py1.5 px-2 rounded text-white"
            onClick={() => setRichText(prev => !prev)}
          >
            Habilitar Editor de Texto
          </button>
        </div>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full">
            {isRichText ? (
              <Controller
                name="projectName"
                control={form.control}
                defaultValue={form.getValues('projectName')}
                render={field => (
                  <RichTextEditor
                    {...field}
                    label={i18n('entities.projectCharter.fields.projectName')}
                    onChange={text => {
                      field.onChange(text)
                      console.log(form.watch('projectName'))
                    }}
                    error={form.errors.projectName?.message}
                  />
                )}
              />
            ) : (
              <textarea defaultValue={form.getValues('projectName')}></textarea>
            )}
          </div>
          <div className="w-full mt-3">
            <Controller
              name="highLevelProjectDescription"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.highLevelProjectDescription',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.highLevelProjectDescription?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <DatePickerFormItem
              name="startdate"
              label={i18n('entities.projectCharter.fields.startdate')}
              required={false}
            />
          </div>
          <div className="w-full mt-3">
            <DatePickerFormItem
              name="enddate"
              label={i18n('entities.projectCharter.fields.enddate')}
              required={false}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="projectPurpose"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n('entities.projectCharter.fields.projectPurpose')}
                  onChange={text => field.onChange(text)}
                  error={form.errors.projectPurpose?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="measurableProjectObjectives"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.measurableProjectObjectives',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.measurableProjectObjectives?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="keyBenefits"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n('entities.projectCharter.fields.keyBenefits')}
                  onChange={text => field.onChange(text)}
                  error={form.errors.keyBenefits?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="highlevelRequirements"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.highlevelRequirements',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.highlevelRequirements?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="boundaries"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n('entities.projectCharter.fields.boundaries')}
                  onChange={text => field.onChange(text)}
                  error={form.errors.boundaries?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="overallProjectRisk"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.overallProjectRisk',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.overallProjectRisk?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="summaryMilestoneSchedule"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.summaryMilestoneSchedule',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.summaryMilestoneSchedule?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="preapprovedFinancialResources"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.preapprovedFinancialResources',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.preapprovedFinancialResources?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="projectApprovalRequirements"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.projectApprovalRequirements',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.projectApprovalRequirements?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="successCriteria"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n('entities.projectCharter.fields.successCriteria')}
                  onChange={text => field.onChange(text)}
                  error={form.errors.projectApprovalRequirements?.message}
                />
              )}
            />
          </div>
          <div className="w-full mt-3">
            <Controller
              name="projectExitCriteria"
              control={form.control}
              render={field => (
                <RichTextEditor
                  {...field}
                  label={i18n(
                    'entities.projectCharter.fields.projectExitCriteria',
                  )}
                  onChange={text => field.onChange(text)}
                  error={form.errors.projectExitCriteria?.message}
                />
              )}
            />
          </div>

          <div className="pt-4">
            <button
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <FontAwesomeIcon className="mr-2" icon={faSave} />
              {i18n('common.save')}
            </button>

            <button
              disabled={saveLoading}
              onClick={onReset}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon className="mr-2" icon={faUndo} />
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
              >
                <FontAwesomeIcon className="mr-2" icon={faTimes} />
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default ProjectCharterForm
