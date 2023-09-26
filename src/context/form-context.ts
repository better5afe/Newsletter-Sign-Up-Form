import React from 'react';

export const FormContext = React.createContext({
	isValid: false,
	errorMsg: '',
	isDismissed: false,
	isLoading: false,
	dismissHandler: () => {},
	checkValidity: (value: string) => {},
});
