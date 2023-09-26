import { useState, useContext } from 'react';
import Button from '../reusable/Button';
import { FormContext } from '../../context/form-context';

import './Form.scss';

const Form = () => {
	const [inputValue, setInputValue] = useState('');

	const formCtx = useContext(FormContext);

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();
		formCtx.checkValidity(inputValue);
		setInputValue('');
	};

	return (
		<form className='form' onSubmit={submitFormHandler}>
			<div className='form__info'>
				<label htmlFor='email' className='form__info-label'>
					Email address
				</label>
				{!formCtx.isValid &&
					formCtx.errorMsg.trim().length !== 0 &&
					!formCtx.isLoading && (
						<p className='form__info-error'>{formCtx.errorMsg}</p>
					)}
			</div>
			<input
				type='text'
				placeholder='email@company.com'
				value={inputValue}
				id='email'
				className={`form__input ${
					!formCtx.isValid &&
					formCtx.errorMsg.trim().length !== 0 &&
					!formCtx.isLoading &&
					'form__input form__input--error'
				}`}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button type='submit' text='Subscribe to monthly newsletter' />
		</form>
	);
};

export default Form;
