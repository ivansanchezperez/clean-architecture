import 'reflect-metadata';

import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { PageNotFound } from './../page-not-found';

describe('Page not found screen', () => {
	it('renders the not found error message', async () => {
		// Arrange + Act
		render(<PageNotFound />);

		// Assert
		expect(screen.getByText('Página no encontrada')).toBeInTheDocument();
	});
});
