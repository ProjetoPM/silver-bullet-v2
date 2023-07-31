import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'src/modules/resourceBreakdownStructure/list/resourceBreakdownStructureListActions';

const ResourceBreakdownStructureListFilter = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ResourceBreakdownStructureListFilter;