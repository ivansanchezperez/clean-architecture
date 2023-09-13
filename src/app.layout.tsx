import { Outlet } from 'react-router-dom';

import { Waiting } from './shared/components/waiting/waiting';
import Breadcrumbs from './shared/components/breadcrumbs/breadcrumbs';
import { useMsal } from '@azure/msal-react';

export const AppLayout = (): JSX.Element => {
	const { accounts } = useMsal();
	const isUserLogged = accounts.length > 0;

	return (
		<>
			<Waiting>
				<div className="p-2 md:p-11">
					{isUserLogged && <Breadcrumbs />}
					<Outlet />
				</div>
			</Waiting>
		</>
	);
};
