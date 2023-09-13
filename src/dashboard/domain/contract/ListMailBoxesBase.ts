import { MailBoxesDTO } from '../../infrastructure/dto/MailBoxesDTO';

export abstract class ListMailBoxesBase {
	public abstract getMailBoxes: (NIUResponsible: string) => Promise<MailBoxesDTO[]>;
}
