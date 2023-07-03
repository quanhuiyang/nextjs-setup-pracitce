import '@styles/global.css'
import { children } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
	title: 'AI Prompt共享',
	description: '探索與分享我的AI Prompts'
}

const RootLayout = ({children}) => {
	return (
		<html lang='zh'>
			<body>
				<Provider>
					<div className='main'>
						<div className="gradient"/>
					</div>
					<main className="app">
						<Nav/>
						{children}
					</main>
				</Provider>
			</body>
		</html>
	)
}

export default RootLayout
