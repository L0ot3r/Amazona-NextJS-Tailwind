import { useState } from 'react';
import { Layout, ProductItem } from '../components';
import { data } from '../constants';

export default function Home() {
	const [categories, setCategories] = useState('laptop');
	const product = data.products;

	return (
		<Layout title='Home Page'>
			<div className='mb-4'>
				<select
					name='categories'
					className='select-box'
					id='productCategory'
					onChange={(e) => setCategories(e.target.value)}
				>
					<option value='laptop'>Laptop</option>
					<option value='clothes'>Clothes</option>
				</select>
			</div>

			<h3 className='text-xl font-bold mb-4 text-center'>
				{categories.charAt(0).toUpperCase() + categories.slice(1)}
			</h3>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
				{product[categories].map((item) => (
					<ProductItem
						product={item}
						category={categories}
						slug={item.name.toLowerCase().replace(/ /g, '-')}
						key={item.name.toLowerCase().replace(/ /g, '-')}
					/>
				))}
			</div>
		</Layout>
	);
}
