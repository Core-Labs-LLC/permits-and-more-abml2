import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300
			}
		})
	}
};

export default config;
