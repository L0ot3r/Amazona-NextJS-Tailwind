/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Store } from '../../utils/Store';
import { CART_ADD_ITEM } from '../../constants/actionTypes';

export default function ProductItem({ product, slug, category }) {
	const { state, dispatch } = useContext(Store);
	const router = useRouter()

	const addToCartHandler = () => {
		const existItem = state.cart.cartItems.find(
			(x) =>
				x.name.toLowerCase().replace(/ /g, '-') ===
				product.name.toLowerCase().replace(/ /g, '-')
		);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		const productType = category

		if (product.countInStock < quantity) {
			alert('Sorry. Product out of stock !');
			return;
		}
		dispatch({ type: CART_ADD_ITEM, payload: { ...product, quantity, productType } });
		router.push('/cart');
	};

	return (
		<div className='card'>
			<Link href={`/product/${category}/${slug}`}>
				<a>
					<img
						src={product.image}
						alt={product.name}
						className='rounded shadow'
					/>
				</a>
			</Link>

			<div className='flex flex-col justify-between p-3'>
				<Link href={`/product/${category}/${slug}`}>
					<a>
						<h2 className='text-lg font-bold'>{product.name}</h2>
					</a>
				</Link>
				<div className='flex flex-row justify-between items-center'>
					<p className='text-lg'> {product.brand} </p>
					<p>{product.price} €</p>
				</div>
				<button className='primary-button mt-5' type='button' onClick={addToCartHandler}>
					Ajouter au panier
				</button>
			</div>
		</div>
	);
}
