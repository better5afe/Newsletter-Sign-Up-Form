import { useState } from 'react';

interface ErrorInterface {
	isError: boolean;
	errorMessage: string;
}

export const useSubmit = () => {
	const [isValid, setIsValid] = useState(false);
	const [error, setError] = useState<ErrorInterface>({
		isError: false,
		errorMessage: '',
	});

	const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const checkValue = (value: string) => {
		if (value.trim().length === 0) {
			setIsValid(false);
			setError({
				isError: true,
				errorMessage: 'No value provided',
			});
			return;
		}

		if (!regExp.test(value)) {
			setIsValid(false);
			setError({
				isError: true,
				errorMessage: 'Valid email required',
			});
			return;
		}

		if (localStorage.getItem(value)) {
			setIsValid(false);
			setError({
				isError: true,
				errorMessage: 'Email already registered',
			});
			return;
		}

		localStorage.setItem(value, value);

		setError({
			isError: false,
			errorMessage: '',
		});
		setIsValid(true);
	};

	return { isValid, error, checkValue };
};
