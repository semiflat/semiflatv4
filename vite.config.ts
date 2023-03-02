import path from 'path'
import { promises as fsPromises } from 'fs'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import yaml from '@rollup/plugin-yaml'
import svgLoader from 'vite-svg-loader'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr(),
    Unocss(),
    VitePluginFonts({
      google: {
        families: ['Poppins:wght@400;500;600;700;800'],
      },
    }),
    svgLoader({
      svgo: false,
    }),
    yaml(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    {
      name: 'fix-swipper-css',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper.css') return 'fix-swiper.css'
      },
      async load(id) {
        if (id === 'fix-swiper.css') {
          return await fsPromises.readFile('./node_modules/swiper/swiper.min.css', 'utf-8')
        }
      },
    },
    {
      name: 'fix-swipper-navigation-css',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper-navigation.css') return 'fix-swiper-navigation.css'
      },
      async load(id) {
        if (id === 'fix-swiper-navigation.css') {
          return await fsPromises.readFile(
            './node_modules/swiper/modules/navigation/navigation.min.css',
            'utf-8'
          )
        }
      },
    },
    {
      name: 'fix-swipper-autoplay-css',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper-autoplay.css') return 'fix-swiper-autoplay.css'
      },
      async load(id) {
        if (id === 'fix-swiper-autoplay.css') {
          return await fsPromises.readFile(
            './node_modules/swiper/modules/autoplay/autoplay.min.css',
            'utf-8'
          )
        }
      },
    },
    {
      name: 'fix-swipper-pagination-css',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper-pagination.css') return 'fix-swiper-pagination.css'
      },
      async load(id) {
        if (id === 'fix-swiper-pagination.css') {
          return await fsPromises.readFile(
            './node_modules/swiper/modules/pagination/pagination.min.css',
            'utf-8'
          )
        }
      },
    },
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  ssr: {
    // format: 'esm',
    noExternal: ['gsap'],
  },
}

export default config
