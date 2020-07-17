import React from 'react'
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

export default withRouter(BooksListItem)
