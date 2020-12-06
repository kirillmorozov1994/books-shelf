import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(thunk)
		)
	)

	return store
}

export default configStore
