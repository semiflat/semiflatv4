import path from 'path'
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
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
}

export default config
