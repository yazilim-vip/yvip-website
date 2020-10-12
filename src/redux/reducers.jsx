import { actionTypes } from './actions';
import howtoRequestParser from '../util/HowtoRequestParser'

const initialState = {
    error: null,
    isLoaded: false,
    path: null,
    rootCategory: null,
    selectedCategory: null,
    selectedHowto: null,
    query: "",
    categoryHits: [],
    howtoHits: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // howto
        case actionTypes.ON_ERROR:
            return Object.assign({}, state, {
                error: action.error,
                isLoaded: false
            })
        case actionTypes.CHANGE_PATH:
            return Object.assign({}, state, howtoRequestParser(action.path))
        case actionTypes.CHANGE_ROOT_CATEGORY:
            return Object.assign({}, state, {
                rootCategory: action.rootCategory,
                isLoaded: true
            })
        case actionTypes.CHANGE_SELECTED_CATEGORY:
            return Object.assign({}, state, action.selectedCategory)
        case actionTypes.CHANGE_SELECTED_HOWTO:
            return Object.assign({}, state, action.selectedHowto)
        // howtoBrowser
        case actionTypes.CHANGE_QUERY:
            return Object.assign({}, state, action.query)
        case actionTypes.CHANGE_CATEGORY_HITS:
            return Object.assign({}, state, action.categoryHits)
        case actionTypes.CHANGE_HOWTO_HITS:
            return Object.assign({}, state, action.howtoHits)
        default:
            return state
    }
};

export default reducer