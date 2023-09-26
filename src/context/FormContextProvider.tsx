import { useState } from 'react';
import { FormContext } from './form-context';
import { useSubmit } from '../hooks/useSubmit';

interface ProviderProps {
	children: React.ReactNode;
}

export const FormContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isDismissed, setIsDismissed] = useState(false);
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
		setIsDismissed(true);
	};

	return (
		<FormContext.Provider
			value={{
				isValid,
				errorMsg,
				isDismissed,
				isLoading,
				dismissHandler,
				checkValidity,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};
