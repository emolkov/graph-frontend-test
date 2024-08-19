import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(async _ => ({
    plugins: [react()],
    test: {
        environment: "jsdom",
        setupFiles: ["./setup.tests.ts"],
    }
}));
