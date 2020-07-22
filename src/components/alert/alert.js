import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { hideAlert } from '../../actions'

const Alert = ({ title, text, visible, field }) => {
	const dispatch = useDispatch()

	return (
		<CSSTransition in={visible} timeout={500} classNames="alert-animation" unmountOnExit>
			<div className="alert">
				<div className="alert-title">{title}!</div>
				<div className="alert-text">{text}</div>
				<div className="alert-close" onClick={() => dispatch(hideAlert(field))}></div>
			</div>
		</CSSTransition>
	)
}

Alert.defaultProps = {
	title: 'Внимание',
	text: 'Некорректный тип поля',
	visible: false,
}

Alert.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	visible: PropTypes.bool,
}

export default Alert
