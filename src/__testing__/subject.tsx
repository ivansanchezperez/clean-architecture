import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Queries, RenderResult, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { I18nConfigGenerator } from '../shared/infrastructure/i18n/i18n-config-generator';
import { inject } from '../shared/infrastructure/dependency-injection/dependency-injector';
import i18n from 'i18next';

import { UserProvider } from '../login/infrastructure/user.context';
import { User } from '../login/domain';

type SubjectProps = {
	userData?: User | null;
};

const Subject = ({ userData = null, children }: React.PropsWithChildren<SubjectProps>): JSX.Element => (
	<UserProvider initialUserState={{ user: userData }}>
		<div id="wrapper">{children}</div>
	</UserProvider>
);

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}): RenderResult<Queries, HTMLElement, HTMLElement> => {
	window.history.pushState({}, '', route);

	return render(ui, { wrapper: BrowserRouter });
};

const renderWithi18next = (Component: JSX.Element): RenderResult => {
	const i18nConfigGenerator: I18nConfigGenerator = inject(I18nConfigGenerator);

	const Comp = React.cloneElement(Component, {
		changeLanguage: (lng: string) => {
			i18n.changeLanguage(lng);
			rerender(<I18nextProvider i18n={i18nConfigGenerator.get()}>{Comp}</I18nextProvider>);
		}
	});
	const defaultRender = render(<I18nextProvider i18n={i18nConfigGenerator.get()}>{Comp}</I18nextProvider>);
	const { rerender } = defaultRender;
	return defaultRender;
};

const customRender = (ui: JSX.Element, { route = '/' } = {}): RenderResult => {
	window.history.pushState({}, '', route);

	const i18nConfigGenerator: I18nConfigGenerator = inject(I18nConfigGenerator);

	const Comp = React.cloneElement(ui, {
		changeLanguage: (lng: string) => {
			i18n.changeLanguage(lng);
			rerender(<I18nextProvider i18n={i18nConfigGenerator.get()}>{Comp}</I18nextProvider>);
		}
	});

	const defaultRender = render(
		<UserProvider
			initialUserState={{
				user: { NIU: '' }
			}}
		>
			{ui}
		</UserProvider>,
		{ wrapper: BrowserRouter }
	);
	const { rerender } = defaultRender;
	return defaultRender;
};

export { Subject, renderWithRouter, renderWithi18next, customRender };
