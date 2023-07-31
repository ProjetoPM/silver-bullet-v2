import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ActivityListViewItem from 'src/view/activityList/view/ActivityListViewItem';
import StakeholderRegistrationViewItem from 'src/view/stakeholderRegistration/view/StakeholderRegistrationViewItem';

function StakeholderCalendarsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <ActivityListViewItem
        label={i18n('entities.stakeholderCalendars.fields.activity')}
        value={record.activity}
      />

      <StakeholderRegistrationViewItem
        label={i18n('entities.stakeholderCalendars.fields.stakeholder')}
        value={record.stakeholder}
      />

      <TextViewItem
        label={i18n('entities.stakeholderCalendars.fields.allocationStart')}
        value={record.allocationStart}
      />

      <TextViewItem
        label={i18n('entities.stakeholderCalendars.fields.allocationEnds')}
        value={record.allocationEnds}
      />
    </div>
  );
}

export default StakeholderCalendarsView;
