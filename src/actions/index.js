import { ALERT, BOOKS, SEARCH } from '../types'

export const saveBooksInLocalStorage = (books) => localStorage.setItem('books', JSON.stringify(books))

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

const addedBook = (book) => (dispatch, getState) => {
	const { books } = getState()
	let newBook;
	if (books[0]?.id === undefined) {
		newBook = { ...book, id: 1 }
	} else {
		newBook = { ...book, id: books[books.length - 1].id + 1 }
	}
	const newListBooks = [...books, newBook];
	saveBooksInLocalStorage(newListBooks);
	dispatch({
		type: BOOKS.ADDED,
		payload: newListBooks,
	})
}

const editBook = (book) => (dispatch, getState) => {
	const { books } = getState()
	const indexBooks = books.findIndex(({ id }) => id === book.id)
	const editListBooks = [...books.slice(0, indexBooks), book, ...books.slice(indexBooks + 1)]
	saveBooksInLocalStorage(editListBooks)
	dispatch({
		type: BOOKS.EDIT,
		payload: editListBooks,
	})
}

const removeBook = (idBook) => (dispatch, getState) => {
	const { books } = getState()
	const roundListBooks = books.filter(({id}) => id !== idBook)
	saveBooksInLocalStorage(roundListBooks)
	dispatch({
		type: BOOKS.REMOVE,
		payload: roundListBooks,
	})
}

const searchBooks = (term) => ({
	type: SEARCH,
	payload: term,
})

export { showAlert, hideAlert, hideAllAlert, addedBook, editBook, removeBook, searchBooks }
