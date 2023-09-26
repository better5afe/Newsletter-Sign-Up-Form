export interface ButtonProps {
	type: 'submit' | 'button';
	text: string;
	onClick?: () => void;
}

export interface ErrorInterface {
	isError: boolean;
	errorMessage: string;
}

