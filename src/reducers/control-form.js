import { FORM } from '../types'

const initialState = null

const controlForm = (state = initialState, action) => {
	switch (action.type) {
		case FORM.EDIT:
			const { id, title, author, year, coverImage } = action.payload
			return {
				title: 'Редактирование',
				id,
				name: title,
				author: author,
				year: year,
				img: coverImage,
			}
		case FORM.CLEAR:
			return initialState
		default:
			return state
	}
}

export default controlForm
