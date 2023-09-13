import type { InlineConfig } from 'vitest';
import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}
const vitestConfig: VitestConfigExport = {
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./setupTests.ts'],
		css: false,
		coverage: {
			provider: 'istanbul',
			reporter: ['cobertura']
		}
	}
};

export default defineConfig({
	plugins: [react()],
	test: vitestConfig.test,
	build: {
		target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
	}
} as VitestConfigExport);
