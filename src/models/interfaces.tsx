export interface ButtonProps {
	type: 'submit' | 'button';
	text: string;
	onClick?: () => void;
}

export interface ErrorInterface {
	isError: boolean;
	errorMessage: string;
}

export interface Context {
	isValid: boolean,
	errorMsg: string,
	isLoading: boolean,
	dismissHandler: () => void,
	checkValidity: (value: string) => void
}

export interface ProviderProps {
	children: React.ReactNode;
}

