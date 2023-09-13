/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { inject } from '../shared/infrastructure/dependency-injection/dependency-injector';
import { ListMailBoxesUseCase } from './application/ListMailBoxesUseCase';
import { useNavigate } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';
import { InfrastructureLayerError } from '../shared/infrastructure/error/infrastructure-layer-error';
import { ApplicationLayerError } from '../shared/infrastructure/error/application-layer-error';
import Spinner from '../shared/components/spinner/spinner';
import { MailBoxMapper } from './application/ListMailBoxesMapper';

const Dashboard = (): JSX.Element => {
	const listMailBoxesUseCase = inject(ListMailBoxesUseCase);

	const navigate = useNavigate();
	const { showBoundary } = useErrorBoundary();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [mailboxes, setMailBoxes] = useState<any>();

	useEffect(() => {
		setIsLoading(true);
	}, []);

	const handleState = (idRowSelected: string): void => {
		navigate('/delegates');
	};

	const fetchMailBoxes = async (NIUResponsible: string): Promise<void> => {
		try {
			const mailBoxes = await listMailBoxesUseCase.getMailBoxes(NIUResponsible);

			setMailBoxes(mailBoxes);
			setIsLoading(false);
		} catch (e) {
			if (e instanceof InfrastructureLayerError || e instanceof ApplicationLayerError) {
				if (e.statusCode === 401) navigate('/not-authorized');
				showBoundary(e);
			} else {
				showBoundary(e);
			}
		}
	};

	return (
		<div>
			{isLoading ? (
				<main className="flex justify-center items-center">
					<Spinner />
				</main>
			) : (
				<h1>CLEAN ARCHITECTURE</h1>
			)}
		</div>
	);
};

export default Dashboard;
