import { Http } from '../../../shared/infrastructure/http/http';
import { ListMailBoxesBase } from '../../domain/contract/ListMailBoxesBase';
import { MailBoxesDTO } from '../dto/MailBoxesDTO';
import { InfrastructureLayerError } from '../../../shared/infrastructure/error/infrastructure-layer-error';

export class ListMailBoxesRepository implements ListMailBoxesBase {
	constructor(private readonly http: Http) {
		this.http = http;
	}

	public async getMailBoxes(NIUResponsible: string): Promise<MailBoxesDTO[]> {
		try {
			const response = await this.http.get<MailBoxesDTO[]>(`mailboxes?responsibleId=${NIUResponsible}`);

			return response as MailBoxesDTO[];
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			const status = err.response.status || 500;
			throw new InfrastructureLayerError('Failed to get MailBoxes', status);
		}
	}
}
