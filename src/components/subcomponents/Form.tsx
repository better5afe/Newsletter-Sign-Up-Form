import Button from '../reusable/Button';

import './Form.scss';

const Form = () => {
	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();
		
		console.log('Form Submitted!');
	};

	return (
		<form className='form' onSubmit={submitFormHandler}>
			<div className='form__info'>
				<label htmlFor='' className='form__info-label'>
					Email address
				</label>
				<p className='form__info-error'>Valid email required</p>
			</div>
			<input
				type='text'
				placeholder='email@company.com'
				className='form__input'
			/>
			<Button type='submit' text='Subscribe to monthly newsletter' />
		</form>
	);
};

export default Form;
