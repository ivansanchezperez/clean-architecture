export class InfrastructureLayerError extends Error {
	public readonly statusCode: number;
	constructor(message: string, status: number) {
		super(message);
		this.name = 'InfrastructureLayerError';
		this.statusCode = status;
	}
}
