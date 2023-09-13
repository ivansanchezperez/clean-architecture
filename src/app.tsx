import { AppRouter } from './app.router';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from './shared/views';
import { TelemetryService } from './shared/infrastructure/telemetry/telemetry-service';
import { inject } from './shared/infrastructure/dependency-injection/dependency-injector';

const App = (): JSX.Element => {
	const telemetryService = inject(TelemetryService);
	telemetryService.information('SPA application has been started');

	return (
		<ErrorBoundary fallback={<PageError />} onError={(error: Error): void => telemetryService.error(error)}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default App;
