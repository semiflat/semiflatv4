import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'page-content',
      'max-w-[69rem] mx-auto px-6 lg:px-0',
    ],
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
    [
      'bg-gradient-checkbox-checked',
      'bg-gradient-linear-[(0deg,_rgba(37,_211,_102,_0.1),_rgba(37,_211,_102,_0.1))] bg-white',
    ],
  ],
  rules: [
    [
      'shadow-light',
      {
        'box-shadow': '0px 0px 2px rgba(0, 0, 0, 0.2)',
        '-webkit-box-shadow': '0px 0px 2px rgba(0, 0, 0, 0.2)',
      },
    ],
    [
      'shadow-medium',
      {
        'box-shadow': '0px 0px 1px rgba(17, 24, 28, 0.16), 0px 1px 4px rgba(17, 24, 28, 0.16)',
        '-webkit-box-shadow': '0px 0px 1px rgba(17, 24, 28, 0.16), 0px 1px 4px rgba(17, 24, 28, 0.16)',
      },
    ],
    [
      'shadow-primary',
      {
        'box-shadow': '0px 1px 0px rgba(17, 24, 28, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.08)',
        '-webkit-box-shadow': '0px 1px 0px rgba(17, 24, 28, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.08)',
      },
    ],
    [
      'gradient-text',
      {
        'background': 'linear-gradient(225deg, #407A7A 0%, #002832 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
        'text-fill-color': 'transparent',
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Archia',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    breakpoints: {
      xxs: '375px',
      xs: '500px',
      sm: '768px',
      md: '1024px',
      lg: '1366px',
      xl: '1600px',
      xxl: '1920px',
    },
    colors: {
      primary: '#002832',
      blue: {
        100: '#ADBFBF',
        200: '#577578',
        300: '#002832',
      },
      turquoise: {
        100: '#C9F7E8',
        200: '#96EBD6',
        300: '#64DCC8',
        400: '#54ABA3'
      },
      gray: {
        0: '#F2F2F2',
        100: '#EEEEEE',
        200: '#E6E6E6',
        300: '#DADADA',
        400: '#C9C9C9',
        500: '#B1B1B1',
        600: '#929292',
        700: '#6A6A6A',
        800: '#3C3C3C',
        850: '#1F1F1F',
        900: '#0D0D0D',
      },
      tomate: '#E03E1A',
      dark: {
        500: '#232323',
      },
    },
    boxShadow: {
      DEFAULT: '0px 0px 2px rgba(0, 0, 0, 0.2)',
    },
  },
})
