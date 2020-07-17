class BooksApi {
	books = [
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
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			year: 2018,
			coverImage:
				'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
		},
		{
			id: 4,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			year: 2017,
			coverImage:
				'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
		},
		{
			id: 5,
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			year: 2018,
			coverImage:
				'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
		},
		{
			id: 6,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			year: 2017,
			coverImage:
				'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
		},
	]

	getBooks = () => {
		return this.books
	}
}

export default BooksApi
