import React from 'react'
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

export default Alert
