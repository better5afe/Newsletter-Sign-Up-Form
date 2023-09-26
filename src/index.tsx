import ReactDOM from 'react-dom/client';
import App from './App';
import { FormContextProvider } from './context/FormContextProvider';

import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<FormContextProvider>
		<App />
	</FormContextProvider>
);
