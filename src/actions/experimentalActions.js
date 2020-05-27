const PREFIX = 'EXPERIMENTAL_ACTIONS/';
export const TOGGLE_SELECTION = PREFIX + 'TOGGLE_SELECTION';
export const toggleSelection = (id) => {
    return {
        id,
        type: TOGGLE_SELECTION,
    };
};
