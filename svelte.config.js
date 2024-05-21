// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { preprocess } from 'svelte/compiler';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	},
// 	// preprocess: vitePreprocess()
// 	preprocess: preprocess({
// 		postcss: true,
// 		typescript: true,
// 	}),
// 	compilerOptions: {
// 		dev: !process.env.NODE_ENV === 'production'
// 	},
// };

// export default config;

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import * as dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	preprocess: preprocess({
		postcss: true,
	}),
};

export default config;
