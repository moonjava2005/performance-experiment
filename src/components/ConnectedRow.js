import React from 'react';
import {useRow} from '../hooks/experimentalHooks';
import PureRow from './PureRow';
import {get} from 'lodash';
import {useDispatch} from 'react-redux';
import {toggleSelection as toggleSelectionAction} from '../actions/experimentalActions';

const ConnectedRow = React.memo((props) => {
    const {
        style,
        id,
    } = props;
    const dispatch = useDispatch();
    const onPress = React.useCallback(() => {
        dispatch(toggleSelectionAction(id));
    }, [id]);
    const row = useRow(id);
    return (<PureRow
        style={style}
        id={id}
        text={get(row, 'text')}
        selected={get(row, 'selected', false)}
        onPress={onPress}
    />);
});
export default ConnectedRow;
