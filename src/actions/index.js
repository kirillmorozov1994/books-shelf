import { ALERT, BOOKS, SEARCH } from '../types'

const showAlert = (prop) => ({
	type: ALERT.VISIBLE,
	payload: prop,
})

const hideAlert = (prop) => ({
	type: ALERT.HIDE,
	payload: prop,
})

const hideAllAlert = () => ({
	type: ALERT.ALL_HIDE,
})

const addedBook = (book) => ({
	type: BOOKS.ADDED,
	payload: book,
})

const editBook = (book) => ({
	type: BOOKS.EDIT,
	payload: book,
})

const removeBook = (id) => ({
	type: BOOKS.REMOVE,
	payload: id,
})

const searchBooks = (term) => ({
	type: SEARCH,
	payload: term,
})

export { showAlert, hideAlert, hideAllAlert, addedBook, editBook, removeBook, searchBooks }
