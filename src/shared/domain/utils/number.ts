import { DomainValidationError } from '../../infrastructure/error/domain-validation-error';

const ensureGreaterThanZero = (value: number): void => {
	if (value <= 0) {
		throw new DomainValidationError('id must be greater than zero');
	}
};

export { ensureGreaterThanZero };
