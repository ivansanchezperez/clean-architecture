import { MailBox } from '../domain/entity/MailBox';
import { ListMailBoxesBase } from '../domain/contract/ListMailBoxesBase';
import { ApplicationLayerError } from '../../shared/infrastructure/error/application-layer-error';
import { MailBoxMapper } from './ListMailBoxesMapper';

export class ListMailBoxesUseCase {
	constructor(private readonly listMailBoxesRepository: ListMailBoxesBase) {}

	public async getMailBoxes(NIUResponsible: string): Promise<object[]> {
		try {
			const mailboxes = await this.listMailBoxesRepository.getMailBoxes(NIUResponsible);
			const result = mailboxes.map(
				(post): MailBox =>
					MailBox.create(
						post.mailBoxId,
						post.responsibleId,
						post.emailResponsible,
						post.mailBoxEmail,
						post.mailBoxDisplayName,
						post.mailBoxNIUEmail
					)
			);

			const table = MailBoxMapper.createTableDataStructureValue(result);

			return table;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			const status = err.statusCode || 500;

			throw new ApplicationLayerError('Failed to get MailBoxes', status);
		}
	}
}
