import { mailBox, mailBoxIdError, mailBoxResponsibleIdError } from '../../__testing__/factories';
import { DomainValidationError } from '../../shared/infrastructure/error/domain-validation-error';
import { MailBox } from './entity/MailBox';

describe('MailBox', () => {
	it('creation', () => {
		const mailbox = new MailBox(
			mailBox.mailBoxId,
			mailBox.responsibleId,
			mailBox.emailResponsible,
			mailBox.mailBoxEmail,
			mailBox.mailBoxDisplayName,
			mailBox.mailBoxNIUEmail
		);

		expect(mailbox.mailBoxId).toBe(mailBox.mailBoxId);
		expect(mailbox.responsibleId).toBe(mailBox.responsibleId);
		expect(mailbox.emailResponsible).toBe(mailBox.emailResponsible);
		expect(mailbox.mailBoxEmail).toBe(mailBox.mailBoxEmail);
		expect(mailbox.mailBoxDisplayName).toBe(mailBox.mailBoxDisplayName);
		expect(mailbox.mailBoxNIUEmail).toBe(mailBox.mailBoxNIUEmail);
	});

	it('throws error if mailbox id is negative', () => {
		const mailBox = mailBoxIdError;
		const incorrectMailBoxCreation = (): void => {
			new MailBox(
				mailBox.mailBoxId,
				mailBox.responsibleId,
				mailBox.emailResponsible,
				mailBox.mailBoxEmail,
				mailBox.mailBoxDisplayName,
				mailBox.mailBoxNIUEmail
			);
		};
		expect(incorrectMailBoxCreation).toThrow(DomainValidationError);
		expect(incorrectMailBoxCreation).toThrow('id must be greater than zero');
	});

	it('throws error if responsible id is negative', () => {
		const mailBox = mailBoxResponsibleIdError;
		const incorrectMailBoxCreation = (): void => {
			new MailBox(
				mailBox.mailBoxId,
				mailBox.responsibleId,
				mailBox.emailResponsible,
				mailBox.mailBoxEmail,
				mailBox.mailBoxDisplayName,
				mailBox.mailBoxNIUEmail
			);
		};
		expect(incorrectMailBoxCreation).toThrow(DomainValidationError);
		expect(incorrectMailBoxCreation).toThrow('id must be greater than zero');
	});
});
