import React from 'react';

export const FormContext = React.createContext({
	isValid: false,
	errorMsg: '',
	isDismissed: false,
	dismissHandler: () => {},
	checkValidity: (value: string) => {},
});
