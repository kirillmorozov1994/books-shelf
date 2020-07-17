import React from 'react'
import AddBook from '../add-book'
import SearchPanel from '../search-panel'
import BooksList from '../books-list'

const PageBooks = () => {
	return (
		<div className="page-books">
			<AddBook />
			<SearchPanel />
			<BooksList />
		</div>
	)
}

export default PageBooks
