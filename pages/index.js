import { Layout, ProductItem } from '../components';
import { data } from '../constants';

export default function Home() {
	const product = data.products.laptop;
	
	return (
		<Layout title='Home Page'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
				{product.map((item) => (
					<ProductItem 
						product={item}
						slug={item.name.toLowerCase().replace(/ /g, '-')} 
						key={item.name.toLowerCase().replace(/ /g, '-')} 
					/>
				))}
			</div>
		</Layout>
	);
}
