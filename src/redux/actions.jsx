const ON_FM_VIEW_MODE_CHANGE = 'ON_FM_VIEW_MODE_CHANGE'
export const REDUX_ACTION_TYPES = {
    ON_FM_VIEW_MODE_CHANGE
}

const onFmViewModeChange = (fileManagerViewMode) => {
    return {
        type: REDUX_ACTION_TYPES.ON_FM_VIEW_MODE_CHANGE,
        fileManagerViewMode
    }
}
export const REDUX_ACTION_CREATORS = {
    onFmViewModeChange
}
