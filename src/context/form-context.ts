import React from 'react';
import { Context } from '../models/interfaces';

export const FormContext = React.createContext<Context>({
	isValid: false,
	errorMsg: '',
	isLoading: false,
	dismissHandler: () => {},
	checkValidity: (value: string) => {},
});
