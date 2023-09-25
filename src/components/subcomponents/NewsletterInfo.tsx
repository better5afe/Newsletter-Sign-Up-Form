import './NewsletterInfo.scss';

const NewsletterInfo = () => {
	return (
		<>
			<h2 className='sign-up__title'>Stay updated!</h2>
			<p className='sign-up__description'>
				Join 60,000+ product managers receiving monthly updates on:
			</p>
			<div className='sign-up__list'>
				<p className='sign-up__list-item'>
					<span className='sign-up__list-item--icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='21'
							height='21'
							viewBox='0 0 21 21'
						>
							<g fill='none'>
								<circle cx='10.5' cy='10.5' r='10.5' fill='#FF6155' />
								<path
									stroke='#FFF'
									strokeWidth='2'
									d='M6 11.381 8.735 14 15 8'
								/>
							</g>
						</svg>
					</span>
					Product discovery and building what matters
				</p>
				<p className='sign-up__list-item'>
					<span className='sign-up__list-item--icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='21'
							height='21'
							viewBox='0 0 21 21'
						>
							<g fill='none'>
								<circle cx='10.5' cy='10.5' r='10.5' fill='#FF6155' />
								<path
									stroke='#FFF'
									strokeWidth='2'
									d='M6 11.381 8.735 14 15 8'
								/>
							</g>
						</svg>
					</span>{' '}
					Measuring to ensure updates are a success
				</p>
				<p className='sign-up__list-item'>
					<span className='sign-up__list-item--icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='21'
							height='21'
							viewBox='0 0 21 21'
						>
							<g fill='none'>
								<circle cx='10.5' cy='10.5' r='10.5' fill='#FF6155' />
								<path
									stroke='#FFF'
									strokeWidth='2'
									d='M6 11.381 8.735 14 15 8'
								/>
							</g>
						</svg>
					</span>{' '}
					And much more!
				</p>
			</div>
		</>
	);
};

export default NewsletterInfo;
