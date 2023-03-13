/// <reference types="vitest" />
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
//import runtimeConfig from 'vite-plugin-runtime-config';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueI18n({
            include: resolve(__dirname, './src/locales/**'),
            runtimeOnly: true,
            compositionOnly: true,
        }),
        eslintPlugin(),
        //runtimeConfig(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    envPrefix: 'VCA_PUBLIC_',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: [
            './vitest.setup.ts', //setupfile for vitest
        ],
        deps: {
            inline: ['@vue', '@vueuse'],
        },
    },
    server: { port: 8080 },
});
