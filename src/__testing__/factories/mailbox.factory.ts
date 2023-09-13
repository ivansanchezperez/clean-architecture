import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import { MailBoxesDTO } from '../../dashboard/infrastructure/dto/MailBoxesDTO';

const mailboxFactory = Factory.define<MailBoxesDTO>(({ params }) => ({
	mailBoxId: params.mailBoxId ?? faker.number.int(),
	responsibleId: params.responsibleId ?? faker.number.int(),
	emailResponsible: params.emailResponsible ?? faker.internet.email(),
	mailBoxEmail: params.mailBoxEmail ?? faker.internet.email(),
	mailBoxDisplayName: params.mailBoxDisplayName ?? faker.string.sample(10),
	mailBoxNIUEmail: params.mailBoxNIUEmail ?? faker.internet.email()
}));

export const mailBox = mailboxFactory.build();
export const mailBoxIdError = mailboxFactory.build({ mailBoxId: faker.number.int({ min: -1, max: 0 }) });
export const mailBoxResponsibleIdError = mailboxFactory.build({ responsibleId: faker.number.int({ min: -1, max: 0 }) });
