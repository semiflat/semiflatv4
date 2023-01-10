import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-md'
import ssr from 'vite-plugin-ssr/plugin'
import Unocss from 'unocss/vite'
import { UserConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import yaml from '@rollup/plugin-yaml'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'



const config: UserConfig = {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    md(),
    ssr({ prerender: true }),
    Unocss(),
    svgLoader({
      svgo: false,
    }),
    yaml(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
  ],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: { include: ['cross-fetch'] }
}

export default config
