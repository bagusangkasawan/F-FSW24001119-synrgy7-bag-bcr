import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ["jquery"],
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8686',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
