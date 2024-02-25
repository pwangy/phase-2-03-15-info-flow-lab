import { useState } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'
import itemData from '../data/items'

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false)

  const onDarkModeClick = () => {
		setIsDarkMode(isDarkMode => !isDarkMode)
	}

	return (
		<div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
			<Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
			<ShoppingList items={itemData} />
		</div>
)}

export default App