import { useState } from 'react';
import { FormContext } from './form-context';
import { useSubmit } from '../hooks/useSubmit';

interface ProviderProps {
	children: React.ReactNode;
}

export const FormContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isDismissed, setIsDismissed] = useState(false);
	const { isValid, errorMsg, checkValue } = useSubmit();

	const checkValidity = (value: string) => {
		setIsDismissed(false);
		checkValue(value);
	};

	const dismissHandler = () => {
		setIsDismissed(true);
	};

	return (
		<FormContext.Provider
			value={{ isValid, errorMsg, isDismissed, dismissHandler, checkValidity }}
		>
			{children}
		</FormContext.Provider>
	);
};
