import { DistributedLoggingIds } from './distributed-logging-ids';

export class TelemetryService {
	public information(message: string, distributedLoggingIds?: DistributedLoggingIds): void {
		console.info(message, distributedLoggingIds);
	}

	public warning(message: string, distributedLoggingIds?: DistributedLoggingIds): void {
		console.warn(message, distributedLoggingIds);
	}

	public error(e: Error, distributedLoggingIds?: DistributedLoggingIds): void {
		console.error(e, distributedLoggingIds);
	}
}
