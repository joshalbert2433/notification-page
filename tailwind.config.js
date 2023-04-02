/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				LightGrayishBlueVery: "hsl(210, 60%, 98%)",
				LightGrayishBlue1: "hsl(211, 68%, 94%)",
				LightGrayishBlue2: "hsl(205, 33%, 90%)",
				GrayishBlue: "hsl(219, 14%, 63%)",
				GrayishBlueDark: "hsl(219, 12%, 42%)",
				BlueVeryDark: "hsl(224, 21%, 14%)",
				BlueCustom: "hsl(219, 85%, 26%)",
				RedCustom: "hsl(1, 90%, 64%)",
			},
		},
	},
	plugins: [],
};
