import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchBooks } from '../../actions'

const SearchPanel = () => {
	const term = useSelector(({ term }) => term)
	const dispatch = useDispatch()

	return (
		<div className="search">
			<input
				className="search-input"
				type="text"
				placeholder="Введите название книги"
				value={term}
				onChange={(e) => dispatch(searchBooks(e.target.value))}
			/>
		</div>
	)
}

export default SearchPanel
