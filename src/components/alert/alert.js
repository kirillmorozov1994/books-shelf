import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

const Alert = ({ title, text, visible }) => {
	return (
		<CSSTransition in={visible} timeout={500} classNames="alert-animation" mountOnEnter>
			<div className="alert">
				<div className="alert-title">{title}!</div>
				<div className="alert-text">{text}</div>
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
