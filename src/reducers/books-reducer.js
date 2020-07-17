import { BOOKS } from '../types'

const initialState = [
	{
		id: 1,
		title: 'Production-Ready Microservices',
		author: 'Susan J. Fowler',
		year: 2018,
		coverImage:
			'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
	},
	{
		id: 2,
		title: 'Release It!',
		author: 'Michael T. Nygard',
		year: 2017,
		coverImage:
			'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
	},
	{
		id: 3,
		title: 'React и Redux. Функциональная веб-разработка',
		author: 'Бэнкс Алекс, Порселло Ева',
		year: 2018,
		coverImage: 'https://cdn1.ozone.ru/multimedia/c650/1021367273.jpg',
	},
]

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case BOOKS.ADDED:
			let newBook = action.payload
			if (state[0]?.id === undefined) {
				newBook = { ...newBook, id: 1 }
			} else {
				newBook = { ...newBook, id: state[state.length - 1].id + 1 }
			}
			return [...state, newBook]
		case BOOKS.EDIT:
			const editBook = action.payload
			const indexBooks = state.findIndex(({ id }) => id === editBook.id)
			return [...state.slice(0, indexBooks), editBook, ...state.slice(indexBooks + 1)]
		case BOOKS.REMOVE:
			const idBook = action.payload
			const indexBook = state.findIndex(({ id }) => id === idBook)
			return [...state.slice(0, indexBook), ...state.slice(indexBook + 1)]
		default:
			return state
	}
}

export default booksReducer
