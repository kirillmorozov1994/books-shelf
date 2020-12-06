import { BOOKS } from '../types'
import { saveBooksInLocalStorage } from '../actions'

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

const booksReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case BOOKS.INIT:
			const books = localStorage.getItem('books');
			if(books === null) {
				localStorage.clear();
				saveBooksInLocalStorage(state);
				return state;
			} else {
				return JSON.parse(books);
			}
		case BOOKS.ADDED:
		case BOOKS.EDIT:
		case BOOKS.REMOVE:
			return payload
		default:
			return state
	}
}

export default booksReducer
