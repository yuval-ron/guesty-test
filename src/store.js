import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import simpleReducer from './simplePackage/reducers/reducer'
import complexReducer from './complexPackage/reducers'

const rootReducer = combineReducers({
  simplePackage: simpleReducer,
  complexPackage: complexReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
