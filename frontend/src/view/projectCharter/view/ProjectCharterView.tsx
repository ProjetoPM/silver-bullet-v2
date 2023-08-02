import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { IconButton } from 'src/components/Button/IconButton'
import { Input } from 'src/components/Input/Input'
import { RichTextEditor } from 'src/components/RichEditor'
import { i18n } from 'src/i18n'
import Spinner from 'src/view/shared/Spinner'

function ProjectCharterView(props) {
  const { record, loading } = props

  if (loading || !record) {
    return <Spinner />
  }

  return (
    <div>
      <RichTextEditor
        label={i18n('entities.projectCharter.fields.projectName')}
        value={record.projectName}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n(
          'entities.projectCharter.fields.highLevelProjectDescription',
        )}
        value={record.highLevelProjectDescription}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <Input
        type="date"
        label={i18n('entities.projectCharter.fields.startdate')}
        value={moment(record.startdate).format('YYYY-MM-DD')}
      />

      <Input
        type="date"
        label={i18n('entities.projectCharter.fields.enddate')}
        value={moment(record.enddate).format('YYYY-MM-DD')}
      />

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.projectPurpose')}
        value={record.projectPurpose}
        readOnly
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n(
          'entities.projectCharter.fields.measurableProjectObjectives',
        )}
        value={record.measurableProjectObjectives}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.keyBenefits')}
        value={record.keyBenefits}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.highlevelRequirements')}
        value={record.highlevelRequirements}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.boundaries')}
        value={record.boundaries}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.overallProjectRisk')}
        value={record.overallProjectRisk}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.summaryMilestoneSchedule')}
        value={record.summaryMilestoneSchedule}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n(
          'entities.projectCharter.fields.preapprovedFinancialResources',
        )}
        value={record.preapprovedFinancialResources}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n(
          'entities.projectCharter.fields.projectApprovalRequirements',
        )}
        value={record.projectApprovalRequirements}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.successCriteria')}
        value={record.successCriteria}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>

      <RichTextEditor
        label={i18n('entities.projectCharter.fields.projectExitCriteria')}
        value={record.projectExitCriteria}
        readOnly
        hasExtra
      >
        <IconButton
          label={'Avaliar'}
          icon={<FontAwesomeIcon icon={faCommentAlt} className="mr-1" />}
          onClick={() => console.log('teste')}
        />
      </RichTextEditor>
    </div>
  )
}

export default ProjectCharterView
