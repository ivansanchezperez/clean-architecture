import { rest } from 'msw';

// Mock Data
export const mailBoxes = [
	{
		responsibleId: 1,
		emailResponsible: 'mailbox@uab.cat',
		mailBoxId: 1,
		mailBoxName: 'mailbox'
	}
];

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
	rest.get(`${import.meta.env.VITE_API}mailboxes`, (req, res, ctx) => {
		req.url.searchParams.get('responsibleId');

		return res(ctx.status(200), ctx.json(mailBoxes));
	})
];
