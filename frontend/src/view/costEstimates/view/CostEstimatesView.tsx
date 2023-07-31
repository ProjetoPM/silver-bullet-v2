import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CostEstimatesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.costEstimates.fields.estimatedCost')}
        value={record.estimatedCost}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.cumulativeEstimatedCost')}
        value={record.cumulativeEstimatedCost}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.replantedCost')}
        value={record.replantedCost}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.contingencyReserve')}
        value={record.contingencyReserve}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.sumWorkPackages')}
        value={record.sumWorkPackages}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.contingencyReservePackages')}
        value={record.contingencyReservePackages}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.baseline')}
        value={record.baseline}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.budget')}
        value={record.budget}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.cumulativeReplantedCost')}
        value={record.cumulativeReplantedCost}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.realCost')}
        value={record.realCost}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.cumulativeRealCost')}
        value={record.cumulativeRealCost}
      />

      <TextViewItem
        label={i18n('entities.costEstimates.fields.managementReserve')}
        value={record.managementReserve}
      />
    </div>
  );
}

export default CostEstimatesView;
