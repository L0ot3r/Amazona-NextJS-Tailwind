import React, { useContext, useState } from 'react';
import { useSession } from 'next-auth/react';

import Head from 'next/head';
import Link from 'next/link';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Store } from '../../utils/Store';
import { useEffect } from 'react';

export default function Layout({ children, title }) {
	const { status, data: session } = useSession();

	const { state } = useContext(Store);
	const { cart } = state;
	const [cartItemsCount, setCartItemsCount] = useState(0);
	useEffect(() => {
		setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
	}, [cart.cartItems]);

	return (
		<>
			<Head>
				<title>{title ? title + ' - Amazona' : 'Amazona'}</title>
				<meta name='description' content='Ecommerce website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ToastContainer position='bottom-center' limit={1} />

			<div className='flex min-h-screen flex-col justify-between'>
				<header>
					<nav className='flex h-12 px-4 justify-between items-center shadow-md bg-white'>
						<Link href='/'>
							<a className='text-lg font-bold '>amazona</a>
						</Link>
						<div className='flex justify-center items-center'>
							{status === 'loading' ? (
								'Loading'
							) : session?.user ? (
								session.user.name
							) : (
								<Link href='/login'>
									<a className='p-2'>Se connecter</a>
								</Link>
							)}
							<Link href='/cart'>
								<a className='p-2 flex'>
									{cartItemsCount > 0 && (
										<div className='badge'>{cartItemsCount}</div>
									)}
									Panier
								</a>
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
