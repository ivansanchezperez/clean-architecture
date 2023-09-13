import 'reflect-metadata';

import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { PageError } from './../page-error';

describe('Page Error screen', () => {
	it('renders the error message', async () => {
		// Arrange + Act
		render(<PageError />);

		// Assert
		expect(screen.getByText('Error inesperado')).toBeInTheDocument();
	});
});
