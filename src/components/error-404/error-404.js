import React from 'react'
import error404 from '../../assets/img/error-404.png'
import { Link } from 'react-router-dom'

const Error404 = () => {
	return (
		<>
			<h1 className="title">По данному адресу страница не найдена</h1>
			<div className="home">
				<img src={error404} alt="error-img" />
				<Link to="/">Перейти на главную</Link>
			</div>
		</>
	)
}

export default Error404
