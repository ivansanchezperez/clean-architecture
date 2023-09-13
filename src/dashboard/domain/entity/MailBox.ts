import { ensureGreaterThanZero } from '../../../shared/domain/utils';

export class MailBox {
	public readonly mailBoxId!: number;
	private _responsibleId!: number;
	private _emailResponsible!: string;
	private _mailBoxEmail!: string;
	private _mailBoxDisplayName!: string;
	private _mailBoxNIUEmail!: string;

	constructor(
		private readonly idMailbox: number,
		private readonly idResponsable: number,
		private readonly responsibleEmail: string,
		private readonly emailMailbox: string,
		private readonly displayNameMailbox: string,
		private readonly NIUEmailMailbox: string
	) {
		ensureGreaterThanZero(idMailbox);
		ensureGreaterThanZero(idResponsable);

		this.mailBoxId = this.idMailbox;
		this.responsibleId = this.idResponsable;
		this.emailResponsible = this.responsibleEmail;
		this.mailBoxEmail = this.emailMailbox;
		this.mailBoxDisplayName = this.displayNameMailbox;
		this.mailBoxNIUEmail = this.NIUEmailMailbox;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public get responsibleId(): number {
		return this._responsibleId;
	}

	public set responsibleId(responsibleId: number) {
		ensureGreaterThanZero(responsibleId);
		this._responsibleId = responsibleId;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public get emailResponsible(): string {
		return this._emailResponsible;
	}

	public set emailResponsible(emailResponsible: string) {
		this._emailResponsible = emailResponsible;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public get mailBoxEmail(): string {
		return this._mailBoxEmail;
	}

	public set mailBoxEmail(mailBoxEmail: string) {
		this._mailBoxEmail = mailBoxEmail;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public get mailBoxDisplayName(): string {
		return this._mailBoxDisplayName;
	}

	public set mailBoxDisplayName(mailBoxDisplayName: string) {
		this._mailBoxDisplayName = mailBoxDisplayName;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public get mailBoxNIUEmail(): string {
		return this._mailBoxNIUEmail;
	}

	public set mailBoxNIUEmail(mailBoxNIUEmail: string) {
		this._mailBoxNIUEmail = mailBoxNIUEmail;
	}

	public static create(
		idMailbox: number,
		idResponsable: number,
		responsibleEmail: string,
		emailMailbox: string,
		displayNameMailbox: string,
		NIUEmailMailbox: string
	): MailBox {
		const post = new MailBox(
			idMailbox,
			idResponsable,
			responsibleEmail,
			emailMailbox,
			displayNameMailbox,
			NIUEmailMailbox
		);
		return post;
	}
}
