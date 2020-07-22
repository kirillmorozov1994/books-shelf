import { combineReducers } from 'redux'
import booksReducer from './books-reducer'
import alertReducer from './alert-reducer'
import searchReducer from './search-reducer'

const rootReducer = combineReducers({
	books: booksReducer,
	alert: alertReducer,
	term: searchReducer,
})

export default rootReducer
