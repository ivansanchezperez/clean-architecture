import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './shared/views';

import { AppLayout } from './app.layout';
import React from 'react';
import { getRelativePath } from './shared/infrastructure/routing';

const DashboardPage = React.lazy(() => import('./dashboard/dashboard'));

export const AppRouter = (): JSX.Element => (
	<Routes>
		<Route path={getRelativePath('root')} element={<AppLayout />}>
			<Route path={getRelativePath('root')} element={<Navigate to={getRelativePath('dashboard')} replace />} />
			<Route path={getRelativePath('dashboard')} element={<DashboardPage />} />
			<Route path="*" element={<PageNotFound />} />
		</Route>
	</Routes>
);
