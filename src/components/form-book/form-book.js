import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { showAlert, hideAlert, addedBook, editBook, formClearBook } from '../../actions'
import { withRouter } from 'react-router-dom'
import Alert from '../alert'

const FormBook = ({ history }) => {
	const { alert, form } = useSelector(({ alert, form }) => ({ alert, form }))
	const dispatch = useDispatch()

	const [title, setTitle] = useState('Добавление')
	const [name, setName] = useState('')
	const [author, setAuthor] = useState('')
	const [year, setYear] = useState('')
	const [img, setImg] = useState('')

	useEffect(() => {
		if (form !== null) {
			setTitle(form.title)
			setName(form.name)
			setAuthor(form.author)
			setYear(form.year)
			setImg(form.img)
		}
	}, [form])

	const clearField = () => {
		setName('')
		setAuthor('')
		setYear('')
		setImg('')
		history.push('/')
		dispatch(formClearBook())
		dispatch(hideAlert())
	}

	const submitForm = (e) => {
		e.preventDefault()
		if (name.length < 3) {
			dispatch(showAlert('name'))
			return
		}
		if (author.length < 3) {
			dispatch(showAlert('author'))
			return
		}
		if (+year < 2017) {
			dispatch(showAlert('year'))
			return
		}
		if (!/\.(png|jpe?g|gif)$/i.test(img) && !/^https?:\/\//i.test(img)) {
			dispatch(showAlert('images'))
			return
		}
		if (title === '' || title === 'Добавление') {
			const newBook = {
				title: name,
				author,
				year,
				coverImage: img,
			}
			dispatch(addedBook(newBook))
			dispatch(hideAlert())
			clearField()
		} else {
			const editBooks = {
				id: form.id,
				title: name,
				author,
				year,
				coverImage: img,
			}
			dispatch(editBook(editBooks))
			dispatch(hideAlert())
			clearField()
		}
	}

	return (
		<form className="form-book" onSubmit={submitForm}>
			<h3 className="form-book__title">{title} книги</h3>
			<div className="form-book__name">
				<Alert {...alert[0]} />
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
				<Alert {...alert[1]} />
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
				<Alert {...alert[2]} />
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
				<Alert {...alert[3]} />
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
	history: PropTypes.object.isRequired,
}

export default withRouter(FormBook)
