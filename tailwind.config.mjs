/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
    plugins: [require("tailwindcss-animated")],
};
