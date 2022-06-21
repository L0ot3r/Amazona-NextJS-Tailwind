/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product, slug }) {
	return (
		<div className='card relative'>
			<Link href={`/product/${slug}`}>
				<a>
					<img
						src={product.image}
						alt={product.name}
						className='rounded shadow '
					/>
				</a>
			</Link>

			<div className='flex flex-col justify-between p-3'>
				<Link href={`/product/${slug}`}>
					<a>
						<h2 className='text-lg font-bold'>{product.name}</h2>
					</a>
				</Link>
				<div className='flex flex-row justify-between items-center'>
					<p className='text-lg'> {product.brand} </p>
					<p>$ {product.price}</p>
				</div>
				<button className='primary-button mt-5' type='button'>
					Add to cart
				</button>
			</div>
		</div>
	);
}
