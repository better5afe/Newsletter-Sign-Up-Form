import ReactDOM from 'react-dom';
import { useContext } from 'react';
import HeroSection from './components/HeroSection';
import FormSection from './components/FormSection';
import ConfirmationSection from './components/ConfirmationSection';
import LoadingModal from './components/subcomponents/LoadingModal';
import { FormContext } from './context/form-context';

import './App.scss';

const App = () => {
	const formCtx = useContext(FormContext);

	let content;

	if (!formCtx.isValid || formCtx.isLoading) {
		content = (
			<>
				<HeroSection />
				<FormSection />
			</>
		);
	}

	if (formCtx.isValid && !formCtx.isLoading) {
		content = <ConfirmationSection />;
	}

	return (
		<main
			className={`main ${
				formCtx.isValid && !formCtx.isLoading && 'main main--confirmation'
			}`}
		>
			{content}
			{formCtx.isLoading &&
				ReactDOM.createPortal(
					<LoadingModal />,
					document.getElementById('modal')!
				)}
		</main>
	);
};

export default App;
