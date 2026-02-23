import { defineConfig } from "vite"

export default defineConfig({
    base: process.env.VITE_BASE_PATH || "/marma/",
    clearScreen: false,
    server: {
        host: "127.0.0.1",
        port: 1999,
        strictPort: false,
        watch: {
            ignored: ["**/tests/**"]
        }
    }
})