import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

import Layout from '../components/Layout/Layout';
import { getError } from '../utils/actions';

const LoginScreen = () => {
	const router = useRouter()
	const { redirect } = router.query;

	const { data: session } = useSession()

	useEffect(() => {
		if (session?.user) {
			router.push(redirect || '/')
		}
	}, [redirect, router, session])
	

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const submitHandler = async ({ email, password }) => {
		try {
			const result = await signIn('credentials', {
				redirect: false,
				email,
				password,
			});
			if (result.error) {
				toast.error(result.error);
			}
		} catch (err) {
			toast.error(getError(err));
		}
	};

	return (
		<Layout title='Login'>
			<form
				className='mx-auto max-w-screen-md'
				onSubmit={handleSubmit(submitHandler)}
			>
				<h1 className='mb-4 text-xl'>Login</h1>
				<div className='mb-4'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						{...register('email', {
							required: 'Veuillez entrer votre Email',
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
								message: 'Adresse mail non valide',
							},
						})}
						className='w-full'
						id='email'
						autoFocus
					/>
					{errors.email && (
						<span className='text-red-500'>{errors.email.message}</span>
					)}
				</div>
				<div className='mb-4'>
					<label htmlFor='password'>Mot de passe</label>
					<input
						type='password'
						{...register('password', {
							required: 'Veuillez entrer votre mot de passe',
							minLength: {
								value: 6,
								message: 'Le mot de passe doit contenir au moins 5 caractères',
							},
						})}
						className='w-full'
						id='password'
						autoFocus
					/>
					{errors.pwd && (
						<span className='text-red-500'>{errors.pwd.message}</span>
					)}
				</div>
				<div className='mb-4'>
					<button className='primary-button'>Se connecter</button>
				</div>
				<div className='mb-4'>
					Vous n&apos;avez pas encore de compte ? &nbsp;
					<Link href={'register'}>S&apos;enregistrer</Link>
				</div>
			</form>
		</Layout>
	);
};

export default LoginScreen;
