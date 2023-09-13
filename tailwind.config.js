/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'verd-uab': '#40ae33',
				tropic: '#007e11',
				collserola: '#004b0a',
				fiji: '#53ff69',
				'marro-uab': '#a25127',
				stradivari: '#932f0a'
			}
		},
		screens: {
			sm: '360px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
};
