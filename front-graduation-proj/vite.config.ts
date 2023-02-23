import path from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig(({ command }) => {
    if (command === 'build') {
        return {}
    }
    return {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            port: 3333,
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/index.scss";',
                },
            },
        },
        plugins: [
            vue(),
            vueJsx(),
            viteMockServe({
                mockPath: 'src/mock',
                localEnabled: command === 'serve',
            }),
            AutoImport({
                imports: ['vue'],
                resolvers: [ElementPlusResolver()],
                dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
            }),
            Components({
                dirs: ['src/'],
                resolvers: [ElementPlusResolver()],
                dts: path.resolve(pathSrc, 'components.d.ts'),
            }),
        ],
    }
})
