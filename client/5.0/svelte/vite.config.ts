import { sveltekit } from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import path from 'node:path';

const rootDir = path.resolve(__dirname, '../../../');

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'shared': path.resolve(rootDir, './shared'),
		}
	},
});
