import { useContext } from 'react';
import HeroSection from './components/HeroSection';
import FormSection from './components/FormSection';
import ConfirmationSection from './components/ConfirmationSection';
import { FormContext } from './context/form-context';

import './App.scss';

const App = () => {
	const formCtx = useContext(FormContext);

	let content;

	if (!formCtx.isValid || formCtx.isDismissed) {
		content = (
			<>
				<HeroSection />
				<FormSection />
			</>
		);
	}

	if (formCtx.isValid && !formCtx.isDismissed) {
		content = <ConfirmationSection />;
	}

	return <main className='main'>{content}</main>;
};

export default App;
