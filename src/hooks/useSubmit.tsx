import { useState } from 'react';

export const useSubmit = () => {
	const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const [isValid, setIsValid] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const checkValue = (value: string) => {
		if (value.trim().length === 0) {
			setIsValid(false);
			setErrorMsg('Empty value provided');
			return;
		}

		if (!regExp.test(value)) {
			setIsValid(false);
			setErrorMsg('Valid email required');
			return;
		}

		if (localStorage.getItem(value)) {
			setIsValid(false);
			setErrorMsg('Email already registered');
			return;
		}

		setIsValid(true);
		setErrorMsg('');
		localStorage.setItem(value, value);
	};

	return { isValid, errorMsg, checkValue };
};
