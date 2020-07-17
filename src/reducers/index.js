import { combineReducers } from 'redux'
import booksReducer from './books-reducer'
import alertReducer from './alert-reducer'
import controlForm from './control-form'
import searchReducer from './search-reducer'

const rootReducer = combineReducers({
	books: booksReducer,
	alert: alertReducer,
	form: controlForm,
	term: searchReducer,
})

export default rootReducer
