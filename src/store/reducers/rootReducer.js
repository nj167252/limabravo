import authReducer from './authReducer'
import flightLogReducer from './flightLogReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  flightLog: flightLogReducer,
  firestore: firestoreReducer
})

export default rootReducer