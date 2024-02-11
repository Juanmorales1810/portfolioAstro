/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                jumbo: {
                    from: { "background-position": "50% 50%, 50% 50%" },
                    to: { "background-position": "350% 50%, 350% 50%" },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
