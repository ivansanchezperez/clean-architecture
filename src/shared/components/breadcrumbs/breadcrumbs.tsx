import './breadcrumbs.css';
import { breadcrumbsRouting } from '../../infrastructure/routing';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = (): JSX.Element => {
	const location = useLocation();
	const { t } = useTranslation();

	const idCurrentLocation = (): number => {
		const defaultLocationId = breadcrumbsRouting[0].id;
		const idCurrentLocation = breadcrumbsRouting.find((breadcrumb) => breadcrumb.path === location.pathname)?.id;

		return idCurrentLocation ? idCurrentLocation : defaultLocationId;
	};

	const isActive = (routePath: string, index: number): string => {
		const isCurrentLocation = routePath === location.pathname;
		const isPreviousLocation = idCurrentLocation() > index;

		if (isCurrentLocation || isPreviousLocation) return 'breadcrumb-active';
		return 'breadcrumb-not-active';
	};

	const isFirstRoute = (index: number): boolean => {
		return index === 0;
	};

	return (
		<article className="mb-5">
			{breadcrumbsRouting.map(({ path, breadcrumb }, index) => (
				<NavLink key={path} to={path} className={isActive(path, index)} role="button">
					{isFirstRoute(index) ? <></> : <span className="breadcrumb-arrow">&gt;</span>}
					<span>{t(breadcrumb)}</span>
				</NavLink>
			))}
		</article>
	);
};

export default Breadcrumbs;
