import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import selectors from 'src/modules/procurementManagementPlan/procurementManagementPlanSelectors';

function ProcurementManagementPlanViewItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link
            className="text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400"
            to={`/procurement-management-plan/${record.id}`}
          >
            {record.productsServicesWillBeObtained}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.productsServicesWillBeObtained}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <div className="mb-4">
      <label className="text-medium text-gray-600 dark:text-gray-400">
        {props.label}
      </label>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </div>
  );
}

ProcurementManagementPlanViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default ProcurementManagementPlanViewItem;