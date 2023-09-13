export abstract class Http {
	public get: <T>(path: string, params?: Record<string, unknown>, config?: object) => Promise<T | unknown>;
	public post: <T>(path: string, params?: Record<string, unknown>, config?: object) => Promise<T | unknown>;
	public put: <T>(path: string, params?: Record<string, unknown>, config?: object) => Promise<T | unknown>;
	public delete: <T>(path: string, params?: unknown, config?: object) => Promise<T | unknown>;
}
