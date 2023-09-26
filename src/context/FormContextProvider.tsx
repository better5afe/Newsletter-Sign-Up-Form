import { useState } from 'react';
import { FormContext } from './form-context';
import { useSubmit } from '../hooks/useSubmit';
import { ProviderProps } from '../models/interfaces';

export const FormContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const { isValid, errorMsg, checkValue } = useSubmit();

	const checkValidity = (value: string) => {
		setIsLoading(true);

		setTimeout(() => {
			checkValue(value);
			setIsLoading(false);
		}, 2000);
	};

	const dismissHandler = () => {
		window.location.reload();
	};

	return (
		<FormContext.Provider
			value={{
				isValid,
				errorMsg,
				isLoading,
				dismissHandler,
				checkValidity,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};
