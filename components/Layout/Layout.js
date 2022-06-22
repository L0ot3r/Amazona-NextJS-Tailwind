import React, { useContext } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Store } from '../../utils/Store';

export default function Layout({ children, title }) {
	const { state } = useContext(Store);
	const { cart } = state;
	return (
		<>
			<Head>
				<title>{title ? title + ' - Amazona' : 'Amazona'}</title>
				<meta name='description' content='Ecommerce website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='flex min-h-screen flex-col justify-between '>
				<header>
					<nav className='flex h-12 px-4 justify-between items-center shadow-md '>
						<Link href='/'>
							<a className='text-lg font-bold '>amazona</a>
						</Link>
						<div>
							<Link href='/cart'>
								<a className='p-2'>
									{cart.cartItems.length > 0 && (
										<span className='badge'>
											{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
										</span>
									)}
									Cart
								</a>
							</Link>
							<Link href='/login'>
								<a className='p-2'>Login</a>
							</Link>
						</div>
					</nav>
				</header>

				<main className='container m-auto mt-4 px-4 '>{children}</main>

				<footer className=' flex h-10 justify-center items-center shadow-inner '>
					<p>Copyright &copy; 2022 Amazona </p>
				</footer>
			</div>
		</>
	);
}
