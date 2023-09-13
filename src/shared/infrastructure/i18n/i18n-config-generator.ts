import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';
import translationEN from '../../../assets/locales/en/translation.json';
import translationES from '../../../assets/locales/es/translation.json';
import i18next, { i18n } from 'i18next';

export class I18nConfigGenerator {
	private readonly i18nInstance: i18n;

	constructor() {
		const resources = {
			en: {
				translation: translationEN
			},
			es: {
				translation: translationES
			}
		};

		this.i18nInstance = i18next.createInstance();
		this.i18nInstance
			.use(LanguageDetector)
			.use(initReactI18next)
			.init({
				debug: false,
				fallbackLng: 'es',
				interpolation: {
					escapeValue: false,
					formatSeparator: ','
				},
				supportedLngs: ['en', 'es'],
				resources
			});
	}

	public get(): i18n {
		return this.i18nInstance;
	}
}
