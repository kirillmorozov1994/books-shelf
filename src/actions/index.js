import { ALERT, BOOKS, FORM, SEARCH } from '../types'

const showAlert = (prop) => ({
	type: ALERT.VISIBLE,
	payload: prop,
})

const hideAlert = () => ({
	type: ALERT.HIDE,
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

const formEditBook = (book) => ({
	type: FORM.EDIT,
	payload: book,
})

const formClearBook = () => ({
	type: FORM.CLEAR,
})

const searchBooks = (term) => ({
	type: SEARCH,
	payload: term,
})

export {
	showAlert,
	hideAlert,
	addedBook,
	editBook,
	removeBook,
	formEditBook,
	formClearBook,
	searchBooks,
}
