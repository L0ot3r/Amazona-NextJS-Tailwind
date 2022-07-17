import React, { useContext } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { Layout } from '../../../components';
import { data } from '../../../constants';
import { CART_ADD_ITEM } from '../../../constants/actionTypes';
import { Store } from '../../../utils/Store';

export default function ProductDetails() {
	const { state, dispatch } = useContext(Store);
	const { query } = useRouter();
	const router = useRouter();
	const { slug } = query;
	const product = data.products.laptop.find(
		(x) => x.name.toLowerCase().replace(/ /g, '-') === slug
	);

	if (!product) return <div>Product Not Found</div>;

	const addToCartHandler = () => {
		const existItem = state.cart.cartItems.find(
			(x) =>
				x.name.toLowerCase().replace(/ /g, '-') ===
				product.name.toLowerCase().replace(/ /g, '-')
		);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		const productType = 'laptop'

		if (product.countInStock < quantity) {
			alert('Sorry. Product out of stock !');
			return;
		}
		dispatch({ type: CART_ADD_ITEM, payload: { ...product, quantity, productType } });
		router.push('/cart');
	};


	return (
		<Layout title={product.name}>
			<div className='py-2'>
				<button type='button' className='secondary-button'>
					<Link href='/'>Back to Products</Link>
				</button>
			</div>
			<div className='grid md:grid-cols-4 md:gap-3 p-3 bg-white rounded-xl'>
				<div className='md:col-span-2'>
					<Image
						src={product.image}
						alt={product.name}
						width={640}
						height={640}
						layout='responsive'
						className='rounded-lg'
					/>
				</div>

				<div className='mb-5'>
					<h2 className='text-lg font-bold'>{product.name}</h2>
					<h4>{product.category}</h4>
					<h4>{product.brand}</h4>
					<p>
						{product.rating} of {product.numReviews} reviews
					</p>
					<p>Description:</p>
					<p>{product.description}</p>
				</div>

				<div>
					<div className='card p-5'>
						<div className='mb-2 flex justify-between'>
							<div>Prix</div>
							<div>{product.price} €</div>
						</div>
						<div className='mb-2 flex justify-between'>
							<div>Status</div>
							<div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
						</div>
						<button
							className='primary-button w-full'
							onClick={addToCartHandler}
						>
							Ajouter au panier
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
