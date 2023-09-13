import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { inject } from './shared/infrastructure/dependency-injection/dependency-injector';
import { I18nextProvider } from 'react-i18next';
import { I18nConfigGenerator } from './shared/infrastructure/i18n/i18n-config-generator';

const i18nConfigGenerator: I18nConfigGenerator = inject(I18nConfigGenerator);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18nConfigGenerator.get()}>
			<App />
		</I18nextProvider>
	</React.StrictMode>
);
