import { useTranslation } from 'react-i18next';
import { resources } from '../../infrastructure/i18n/resources';

const LanguageSwitcher = (): JSX.Element => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.resolvedLanguage;

	const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<select
			defaultValue={currentLanguage}
			onChange={changeLanguage}
			className="cursor-pointer py-2 md:py-[9.6px] px-2 md:px-4 text-sm md:text-base min-w-[110px] max-w-[110px] md:min-w-[150px] md:max-w-[150px] border-s-transparent rounded-lg"
			style={{ fontFamily: 'inherit' }}
		>
			{Object.keys(resources).map((lng) => (
				<option key={lng} className="cursor-pointer" value={lng}>
					{resources[lng].nativeName}
				</option>
			))}
		</select>
	);
};
export default LanguageSwitcher;
