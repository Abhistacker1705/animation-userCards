/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			keyframes: {
				fade: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			},
			animation: {
				fadeIn: "fade 1s linear 1"
			}
		}
	},
	plugins: []
}
