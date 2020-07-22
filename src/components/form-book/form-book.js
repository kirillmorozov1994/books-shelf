import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { showAlert, hideAllAlert, addedBook, editBook } from '../../actions'
import { withRouter } from 'react-router-dom'
import Alert from '../alert'

const FormBook = ({ match, history }) => {
	const bookId = match?.params?.id
	const alerts = useSelector(({ alert }) => alert)
	const currentBook = useSelector(({ books }) => books.find(({ id }) => +bookId === id))
	const dispatch = useDispatch()

	const [title, setTitle] = useState('Добавление')
	const [name, setName] = useState('')
	const [author, setAuthor] = useState('')
	const [year, setYear] = useState('')
	const [img, setImg] = useState('')

	useEffect(() => {
		if (currentBook !== undefined) {
			setTitle('Редактирование')
			setName(currentBook.title)
			setAuthor(currentBook.author)
			setYear(currentBook.year)
			setImg(currentBook.coverImage)
		}
		//eslint-disable-next-line
	}, [])

	const validateForm = () => {
		let validator = true
		if (name.length < 3) {
			dispatch(showAlert('name'))
			validator = false
		}
		if (author.length < 3) {
			dispatch(showAlert('author'))
			validator = false
		}
		if (+year < 2017) {
			dispatch(showAlert('year'))
			validator = false
		}
		if (!/\.(png|jpe?g|gif)$/i.test(img) && !/^https?:\/\//i.test(img)) {
			dispatch(showAlert('images'))
			validator = false
		}
		return validator
	}

	const clearField = () => {
		setName('')
		setAuthor('')
		setYear('')
		setImg('')
		history.push('/')
		dispatch(hideAllAlert())
	}

	const submitForm = (e) => {
		e.preventDefault()
		if (validateForm()) {
			if (currentBook === undefined) {
				const newBook = {
					title: name,
					author,
					year,
					coverImage: img,
				}
				dispatch(addedBook(newBook))
				clearField()
			} else {
				const editBooks = {
					...currentBook,
					title: name,
					author,
					year,
					coverImage: img,
				}
				dispatch(editBook(editBooks))
				clearField()
			}
		}
	}

	return (
		<form className="form-book" onSubmit={submitForm}>
			<h3 className="form-book__title">{title} книги</h3>
			<div className="form-book__name">
				<Alert {...alerts[0]} />
				<label htmlFor="book-name">Наименование</label>
				<input
					id="book-name"
					type="text"
					placeholder="Введите название книги"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-book__author">
				<Alert {...alerts[1]} />
				<label htmlFor="book-author">Автор</label>
				<input
					id="book-author"
					type="text"
					placeholder="Введите автора книги"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</div>
			<div className="form-book__year">
				<Alert {...alerts[2]} />
				<label htmlFor="book-year">Год выпуска</label>
				<input
					id="book-year"
					type="number"
					placeholder="Введите год выпуска книги"
					value={year}
					onChange={(e) => setYear(e.target.value)}
				/>
			</div>
			<div className="form-book__images">
				<Alert {...alerts[3]} />
				<label htmlFor="book-images">Изображение</label>
				<input
					id="book-images"
					type="text"
					placeholder="Укажите ссылку на изображение"
					value={img}
					onChange={(e) => setImg(e.target.value)}
				/>
			</div>
			<div className="form-book__buttons">
				<button type="submit" className="save">
					Сохранить
				</button>
				<button type="button" className="cancel" onClick={clearField}>
					Отмена
				</button>
			</div>
		</form>
	)
}

FormBook.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object.isRequired,
}

export default withRouter(FormBook)
