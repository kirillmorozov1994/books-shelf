import { ALERT } from '../types'

const templateWarning = {
	title: 'Внимание',
	visible: false,
}

const initialState = [
	{
		...templateWarning,
		field: 'name',
		text: 'Название книги не может быть меньше 3 букв',
	},
	{
		...templateWarning,
		field: 'author',
		text: 'Инициалы автора не могут быть меньше 3 букв',
	},
	{
		...templateWarning,
		field: 'year',
		text: 'Издание книги должны быть не раньше 2017 года',
	},
	{
		...templateWarning,
		field: 'images',
		text: 'Тип поля должен быть ссылкой на изображение',
	},
]

const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALERT.VISIBLE:
			const nameAlert = action.payload
			const indexAlert = state.findIndex(({ field }) => field === nameAlert)
			const alertVisible = {
				...state[indexAlert],
				visible: true,
			}
			return [...state.slice(0, indexAlert), alertVisible, ...state.slice(indexAlert + 1)]
		case ALERT.HIDE:
			return [...state.map((item) => ({ ...item, visible: false }))]
		default:
			return state
	}
}

export default alertReducer
