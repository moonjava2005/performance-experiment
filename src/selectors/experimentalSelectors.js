export const selectRows = (state) => {
    return state.experimentalState.get('rows');
};
export const selectRowIds = (state) => {
    return state.experimentalState.get('rowIds');
};
export const selectRow = (state, id) => {
    const rows = selectRows(state);
    if (rows && id) {
        return rows.get(id);
    }
    return null;
};
