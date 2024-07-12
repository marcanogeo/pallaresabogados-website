/** @type {import('tailwindcss').Config} */
module.exports =  {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			'2xl': '1920px'
		},
		colors: {
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#273444',
			'gray': '#8492a6',
			'gray-light': '#d3dce6',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Lato', 'serif'],
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {},
	},
	plugins: [],
};
