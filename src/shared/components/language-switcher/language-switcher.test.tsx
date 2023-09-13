import 'reflect-metadata';

import { describe, expect, it, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './language-switcher';
import { useTranslation } from 'react-i18next';

vi.mock('react-i18next', () => ({
	useTranslation: vi.fn().mockReturnValue({
		t: vi.fn(),
		i18n: {
			changeLanguage: vi.fn(),
			resolvedLanguage: vi.fn()
		}
	}),
	initReactI18next: {
		type: '3rdParty',
		init: vi.fn()
	}
}));

describe('Language switcher selector', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('renders correctly and changes language', async () => {
		// Arrange
		render(<LanguageSwitcher />);

		const selectElement = screen.getByRole('combobox');

		// Act
		fireEvent.change(selectElement, { target: { value: 'ca' } });

		// Assert
		expect(selectElement).toBeInTheDocument();

		const options = screen.getAllByRole('option');
		expect(options).toHaveLength(2);

		const changeLanguageSpy = useTranslation().i18n.changeLanguage;
		expect(changeLanguageSpy).toHaveBeenCalledWith('ca');
	});
});
