import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Layout from '../components/Layout/Layout';

const RegisterScreen = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

	return (
		<Layout title='Register'>
			<form
				className='mx-auto max-w-screen-md'
				onSubmit={handleSubmit(submitHandler)}
			>
				<h1 className='mb-4 text-xl'>Register</h1>
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
					<label htmlFor='confirmPassword'>Confirmez le mot de passe</label>
					<input
						type='password'
						{...register('confirmPassword', {
							required: 'Veuillez entrer votre mot de passe',
							minLength: {
								value: 6,
								message: 'Le mot de passe doit contenir au moins 5 caractères',
							},
						})}
						className='w-full'
						id='confirmPassword'
						autoFocus
					/>
					{errors.pwd && (
						<span className='text-red-500'>{errors.pwd.message}</span>
					)}
				</div>
				<div className='mb-4'>
					<button className='primary-button'>S&apos;enregistrer</button>
				</div>
				<div className='mb-4'>
					Vous n&apos;avez pas encore de compte ? &nbsp;
					<Link href={'login'}>Se connecter</Link>
				</div>
			</form>
		</Layout>
	);
};

export default RegisterScreen;
