// ---------------------------
//  External Dependencies
// ---------------------------
import { LOCATION_CHANGE } from 'connected-react-router'

// ---------------------------
//  Internal Dependencies
// ---------------------------
import { parsePathAndSetContent, createSearchIndex } from '../util'
import { HOWTO_ACTION_TYPES } from './howToActionTypes'

export const howToReducer = (state = [], action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            //! eslint gives error
            // eslint-disable-next-line no-case-declarations
            const path = action.payload.location.pathname
            if (path.startsWith('/howto') && state.rootCategory) {
                return {
                    ...state,
                    ...parsePathAndSetContent(state.rootCategory, path),
                    query: ''
                }
            } else {
                return {
                    ...state
                }
            }

        case HOWTO_ACTION_TYPES.ON_API_SUCCESS:
            return {
                ...state,
                rootCategory: action.rootCategory,
                isLoaded: true,
                ...parsePathAndSetContent(action.rootCategory, action.path),
                searchIndex: createSearchIndex(action.rootCategory),
                query: ''
            }

        case HOWTO_ACTION_TYPES.ON_API_ERROR:
            return {
                ...state,
                error: action.error,
                isLoaded: true
            }

        case HOWTO_ACTION_TYPES.ON_SEARCH:
            return {
                ...state,
                query: action.query,
                categoryHits: action.categoryHits,
                howtoHits: action.howtoHits
            }
        default:
            return state
    }
}
