import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Header from '../header'
import { PageBooks, PageFormBooks, NotFound } from '../pages'
import Footer from '../footer'

const App = () => {
	const routes = [
		{ path: '/books-shelf/', Component: PageBooks },
		{ path: '/books-shelf/form/:id?', Component: PageFormBooks },
		{ path: '/books-shelf/:error404', Component: NotFound },
	]

	return (
		<>
			<Header />
			<div className="app">
				<div className="app-box">
					<div className="page">
						{routes.map(({ path, Component }) => {
							if (path === '/books-shelf/:error404') {
								return (
									<Route key={path} path={path}>
										{({ match }) => (
											<CSSTransition
												in={match !== null && match.params.error404 !== 'form'}
												timeout={1000}
												classNames="page"
												appear
												unmountOnExit
											>
												<Component />
											</CSSTransition>
										)}
									</Route>
								)
							} else {
								return (
									<Route key={path} path={path} exact>
										{({ match }) => (
											<CSSTransition
												in={match !== null}
												timeout={1000}
												classNames="page"
												appear
												unmountOnExit
											>
												<Component />
											</CSSTransition>
										)}
									</Route>
								)
							}
						})}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App
