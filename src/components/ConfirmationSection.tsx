import Button from './reusable/Button';

import './ConfirmationSection.scss';

const ConfirmationSection = () => {
	const dismissHandler = () => {
		console.log('Dismiss message!');
	};

	return (
		<section className='confirmation'>
			<div>
				<div className='confirmation__icon'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='64'
						height='64'
						viewBox='0 0 64 64'
					>
						<defs>
							<linearGradient id='a' x1='100%' x2='0%' y1='0%' y2='100%'>
								<stop offset='0%' stopColor='#FF6A3A' />
								<stop offset='100%' stopColor='#FF527B' />
							</linearGradient>
						</defs>
						<g fill='none'>
							<circle cx='32' cy='32' r='32' fill='url(#a)' />
							<path
								stroke='#FFF'
								strokeWidth='4'
								d='m18.286 34.686 8.334 7.98 19.094-18.285'
							/>
						</g>
					</svg>
				</div>
				<h2 className='confirmation__title'>Thanks for subscribing!</h2>
				<p className='confirmation__info'>
					A confirmation email has been sent to{' '}
					<strong>ash@loremcompany.com</strong>. Please open it and click the
					button inside to confirm your subscription.
				</p>
			</div>
			<Button
				type='button'
				text='Dismiss message'
				onClick={dismissHandler}
			></Button>
		</section>
	);
};

export default ConfirmationSection;
