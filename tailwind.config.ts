import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
    daisyui: {
        themes: ["retro"],
    },
    plugins: [require("daisyui")],
    theme: {
        container: {
            center: true,
        },
    },
};
export default config;
