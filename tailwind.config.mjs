/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sunset-gold': '#e7a054',
				'flame-orange': '#e84900',
				'cream-white' : '#e9dac4',
				'mocha-brown' : '#5b3330'
			},
			fontFamily: {
				main: ['Poppins', 'sans-serif'],
				cursive: ['Satisfy', 'cursive']
			},
			backgroundImage: {
				'hero-texture': "url('/images/coffee-beans-bg.svg')"
			}
		},
	},
	plugins: [],
}