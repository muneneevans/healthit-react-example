import { combineReducers } from "redux"

import postsReducer from "./Posts/reducers"


const rootReducer = combineReducers({
    postsReducer
})

export default rootReducer