import {Map, OrderedMap, List} from 'immutable';
import {TEST_ROW} from '../consts/configs';
import {TOGGLE_SELECTION} from '../actions/experimentalActions';

const initState = Map({
        rows: OrderedMap(TEST_ROW.map((row) => {
            return [row.id, row];
        })),
        rowIds: List(TEST_ROW.map(({id}) => id)),
    },
);
const toggleSelection = (state, action) => {
    const {
        id,
    } = action;
    if (id) {
        state = state.update('rows', rows => {
            return rows.update(id, row => {
                return {
                    ...row,
                    selected: !row.selected,
                };
            });
        });
    }
    return state;
};
export default (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_SELECTION:
            return toggleSelection(state, action);
    }
    return state;
}
