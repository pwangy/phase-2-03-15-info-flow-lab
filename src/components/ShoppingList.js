import { useState } from 'react'
import Filter from './Filter'
import Item from './Item'

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (e) => {
		onCategoryChange(e.target.value)
	}

	const itemsToDisplay = items.filter((item) => {
		if (selectedCategory === 'All') return true
		return item.category === selectedCategory
	})

  const onCategoryChange = e => setSelectedCategory(e.target.value)

	return (
		<div className='ShoppingList'>
      <Filter onCategoryChange={onCategoryChange} handleCategoryChange={handleCategoryChange} />
			<ul className='Items'>
				{itemsToDisplay.map((item) => (
					<Item
						key={item.id}
						name={item.name}
						category={item.category}
					/>
				))}
			</ul>
		</div>
)}

export default ShoppingList