import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/procurementStatementWorkRegister/procurementStatementWorkRegisterSelectors';

function ProcurementStatementWorkRegisterListItem(props) {
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
            to={`/procurement-statement-work-register/${record.id}`}
          >
            {record.descriptionItemPurchased}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.descriptionItemPurchased}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

ProcurementStatementWorkRegisterListItem.propTypes = {
  value: PropTypes.any,
};

export default ProcurementStatementWorkRegisterListItem;
