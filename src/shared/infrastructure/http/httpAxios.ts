import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { Http } from './http';
import { createId } from '@paralleldrive/cuid2';
import { TelemetryService } from '../telemetry/telemetry-service';
import { DistributedLoggingIds } from '../telemetry/distributed-logging-ids';

export class HttpAxios implements Http {
	private readonly axiosInstance: AxiosInstance;
	private distributedLoggingIds: DistributedLoggingIds;

	constructor(private readonly telemetryService: TelemetryService) {
		this.axiosInstance = axios.create({
			baseURL: `${import.meta.env.VITE_API}`,
			withCredentials: true
		});
		this.axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
		this.axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] =
			'http://localhost:5173, https://localhost:44387/uab/, https://shrdmbx-bet.local:8553/, https://shrdmbx-bet.local';

		this.axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
			const traceId = createId();
			const spanId = createId();

			this.distributedLoggingIds = {
				traceId: traceId,
				parentId: traceId,
				spanId: spanId
			};

			config.headers['X-B3-TraceId'] = this.distributedLoggingIds.traceId;
			config.headers['X-B3-ParentId'] = this.distributedLoggingIds.traceId;
			config.headers['X-B3-SpanId'] = this.distributedLoggingIds.spanId;

			return config;
		});
		this.telemetryService = telemetryService;
	}

	public async get<T>(path: string, params?: Record<string, unknown>, config?: object): Promise<T> {
		const response = await this.axiosInstance.get(path, { ...config, params: params });

		this.telemetryService.information(`[SPA] GET to path: ${path} successfully performed`, this.distributedLoggingIds);

		return response.data as T;
	}

	public async post<T>(path: string, params?: Record<string, unknown>, config?: object): Promise<T> {
		const response = await this.axiosInstance.post(path, { ...params }, { ...config });

		this.telemetryService.information(`[SPA] POST to path: ${path} successfully performed`, this.distributedLoggingIds);

		return response.data as T;
	}

	public async put<T>(path: string, params?: Record<string, unknown>, config?: object): Promise<T> {
		const response = await this.axiosInstance.put(path, { ...params }, { ...config });

		this.telemetryService.information(`[SPA] PUT to path: ${path} successfully performed`, this.distributedLoggingIds);

		return response.data as T;
	}

	public async delete<T>(path: string, params?: unknown, config?: object): Promise<T> {
		const response = await this.axiosInstance.delete(path, { ...config, params: params });

		this.telemetryService.information(`[SPA] DELETE to path: ${path} successfully performed`, this.distributedLoggingIds);

		return response.data as T;
	}
}
