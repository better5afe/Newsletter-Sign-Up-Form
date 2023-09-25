import NewsletterInfo from './subcomponents/NewsletterInfo';
import Form from './subcomponents/Form';

import './FormSection.scss';

const FormSection = () => {
	return (
		<section className='sign-up'>
			<NewsletterInfo />
			<Form />
		</section>
	);
};

export default FormSection;
