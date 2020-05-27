import {useSelector} from 'react-redux';
import {selectRow, selectRowIds} from '../selectors/experimentalSelectors';

export const useRowIds = () => {
    return useSelector(selectRowIds);
};
export const useRow = (id) => {
    return useSelector(state => selectRow(state, id));
};
