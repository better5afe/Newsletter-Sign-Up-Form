import { useState } from 'react';
import { useSubmit } from '../../hooks/useSubmit';
import Button from '../reusable/Button';

import './Form.scss';

const Form = () => {
	const [inputValue, setInputValue] = useState('');
	const { error, checkValue } = useSubmit();

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();
		checkValue(inputValue);
		setInputValue('');
	};

	return (
		<form className='form' onSubmit={submitFormHandler}>
			<div className='form__info'>
				<label htmlFor='email' className='form__info-label'>
					Email address
				</label>
				{error.isError && (
					<p className='form__info-error'>{error.errorMessage}</p>
				)}
			</div>
			<input
				type='text'
				placeholder='email@company.com'
				value={inputValue}
				id='email'
				className={`form__input ${error.isError && 'form__input--error'}`}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button type='submit' text='Subscribe to monthly newsletter' />
		</form>
	);
};

export default Form;
