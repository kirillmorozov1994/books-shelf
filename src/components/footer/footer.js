import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-box">
				<div className="footer-box__author" title="Автор проекта">
					Кирилл Морозов
				</div>
				<div className="footer-box__contacts">
					<div className="icon icon-github">
						<a
							href="https://github.com/kirillmorozov1994"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github-img" />
						</a>
					</div>
					<div className="icon icon-telegramm">
						<a href="https://t.me/Kirll_1994" target="_blank" rel="noopener noreferrer">
							<img
								src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
								alt="telegramm-img"
							/>
						</a>
					</div>
					<div className="icon icon-vk">
						<a href="https://vk.com/kirson.morozov" target="_blank" rel="noopener noreferrer">
							<img src="https://img.icons8.com/ios-filled/50/000000/vk-circled.png" alt="vk-img" />
						</a>
					</div>
					<div className="icon icon-mail">
						<a href="mailto:kirill.morozov_1994@mail.ru" target="_blank" rel="noopener noreferrer">
							<img
								src="https://img.icons8.com/ios-filled/50/000000/important-mail.png"
								alt="mail-img"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
