export class ApplicationLayerError extends Error {
	public readonly statusCode: number;

	constructor(message: string, status: number) {
		super(message);
		this.name = 'ApplicationLayerError';
		this.statusCode = status;
	}
}
