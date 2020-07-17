import React from 'react'
import { Link } from 'react-router-dom'

const AddBook = () => {
	return (
		<Link className="btn-add-book" to="form">
			Добавить книгу
		</Link>
	)
}

export default AddBook
