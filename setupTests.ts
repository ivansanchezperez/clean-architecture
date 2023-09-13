import matchers from '@testing-library/jest-dom/matchers';
import { server } from './src/shared/mocks/server';
import { expect } from 'vitest';

expect.extend(matchers);

beforeAll(() => {
	// Enable the mocking in tests.
	server.listen();
});

afterEach(() => {
	// Reset any runtime handlers tests may use.
	server.resetHandlers();
});

afterAll(() => {
	// Clean up once the tests are done.
	server.close();
});
