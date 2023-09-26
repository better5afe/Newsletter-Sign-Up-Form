import { ButtonProps } from '../../models/interfaces';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
	return (
		<button type={type} onClick={onClick} className='button'>
			{text}
			<div className='button__reflection'>&nbsp;</div>
		</button>
	);
};

export default Button;
