import React from 'react'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import BooksListItem from '../books-list-item'

const BooksList = () => {
	const books = useSelector(({ books }) => books)
	const search = useSelector(({ term }) => term)
	const booksList = books
		.filter(({ title }) => title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
		.map((book) => (
			<CSSTransition key={book.id} timeout={750} classNames="list-item-animation">
				<BooksListItem {...book} />
			</CSSTransition>
		))

	return (
		<table className="table-books">
			<tbody className="table-books__body">
				{booksList.length === 0 ? (
					<tr className="list-empty__row">
						<td className="list-empty__col">Полка книг пуста</td>
					</tr>
				) : (
					<TransitionGroup enter exit component={null}>
						{booksList}
					</TransitionGroup>
				)}
			</tbody>
		</table>
	)
}

export default BooksList
