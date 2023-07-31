import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function LessonLearnedRegisterView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified')}
        value={record.stakeholderWhoIdentified}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.identificationDate')}
        value={record.identificationDate}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.situationDescription')}
        value={record.situationDescription}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.category')}
        value={record.category}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested')}
        value={record.whoCouldBeInterested}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.status')}
        value={record.status}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.impact')}
        value={record.impact}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.recommendations')}
        value={record.recommendations}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage')}
        value={record.associatedLifeCycleStage}
      />

      <TextViewItem
        label={i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea')}
        value={record.associatedKnowledgeArea}
      />
    </div>
  );
}

export default LessonLearnedRegisterView;
