import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { formEditBook, removeBook } from '../../actions'

const BooksListItem = ({ id, title, author, year, coverImage, history }) => {
	const dispatch = useDispatch()
	const editBooks = () => {
		const book = {
			id,
			title,
			author,
			year,
			coverImage,
		}
		dispatch(formEditBook(book))
		history.push('/form')
	}

	const removeBooks = () => dispatch(removeBook(id))

	return (
		<tr className="list-item__row">
			<td className="list-item__col">
				<div className="item-img">
					<img src={coverImage} alt="book-img" />
				</div>
				<div className="item-desc">
					<div className="item-desc-name">
						<a
							href={`https://www.google.com/search?q=${title.split(' ').join('+')}&oq=${title
								.split(' ')
								.join('+')}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{title}
						</a>
					</div>
					<div className="item-desc-author">{author}</div>
					<div className="item-desc-year">{year} г.</div>
				</div>
				<div className="item-panel">
					<button className="item-panel-edit panel-btn" onClick={editBooks}>
						Редактировать
					</button>
					<button className="item-panel-delete panel-btn" onClick={removeBooks}>
						Удалить
					</button>
				</div>
			</td>
		</tr>
	)
}

BooksListItem.defaultProps = {
	id: 1,
	title: 'Заголов книги',
	author: 'Автор книги',
	year: 'Год выпуска книги',
	coverImage: 'https://cdn1.ozone.ru/multimedia/1031049553.jpg',
}

BooksListItem.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	author: PropTypes.string,
	year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	coverImage: PropTypes.string,
	history: PropTypes.object.isRequired,
}

export default withRouter(BooksListItem)
