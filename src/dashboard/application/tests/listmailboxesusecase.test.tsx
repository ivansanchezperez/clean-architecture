import { expect, vi } from 'vitest';
import { ListMailBoxesUseCase } from '../ListMailBoxesUseCase';
import { ApplicationLayerError } from '../../../shared/infrastructure/error/application-layer-error';
import { ListMailBoxesBase } from '../../domain/contract/ListMailBoxesBase';

describe('ListMailBoxesUseCase', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('getMailBoxes throws ApplicationLayerError when getMailBoxes fails', async () => {
		// Arrange
		const mockedError = new Error('Mocked error');
		const listMailBoxesRepositoryMock: ListMailBoxesBase = {
			getMailBoxes: vi.fn().mockRejectedValueOnce(mockedError)
		};

		const listMailBoxesUseCase = new ListMailBoxesUseCase(listMailBoxesRepositoryMock);

		// Act + Assert
		expect.assertions(2);

		try {
			await listMailBoxesUseCase.getMailBoxes('0');
		} catch (e: unknown) {
			const applicationLayerError = e as ApplicationLayerError;

			expect(applicationLayerError).toBeInstanceOf(ApplicationLayerError);
			expect(applicationLayerError.message).toBe('Failed to get MailBoxes');
		}
	});
});
