import 'reflect-metadata';

import { Mock, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';
import { customRender } from '../../../__testing__';

const mockedUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
	const actual: object = await vi.importActual('react-router-dom');

	return {
		...actual,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		useNavigate: (): Mock<any, any> => mockedUseNavigate
	};
});

vi.mock('react-i18next', async () => {
	const actual: object = await vi.importActual('react-i18next');
	return {
		...actual
	};
});

describe('Dashboard delegates screen', () => {
	it('renders the screen with the delegate table', () => {
		// Arrange + Act
		customRender(<Breadcrumbs />);

		// Assert
		expect(screen.getByText(/Delegats/i)).toBeInTheDocument();
	});
});
