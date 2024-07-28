import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			height: {
				"30": "7.5rem",
				"46": "11.5rem",
			},
			width: {
				"68": "17rem",
				"70": "17.5rem",
				"72": "18rem",
				"88": "22rem",
			},
		},
		colors: {
			linen: "#F5EEE6",
			blackChocolate: "#1D150B",
			tan: "#DABB94",
			coyoteBrown: "#7C5627",
			mapleSyrup: "#CD934C",
		},
	},
	plugins: [],
};
export default config;
