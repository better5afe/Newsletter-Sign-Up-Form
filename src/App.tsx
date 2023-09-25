import HeroSection from './components/HeroSection';
import FormSection from './components/FormSection';
import ConfirmationSection from './components/ConfirmationSection';

import './App.scss'

const App = () => {
	return (
		<main className='main'>
			<HeroSection />
			<FormSection />
			<ConfirmationSection />
		</main>
	);
};

export default App;
