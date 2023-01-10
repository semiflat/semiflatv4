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
        'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.15)',
        '-webkit-box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.15)',
      },
    ],
    [
      'shadow-primary',
      {
        'box-shadow': '0px 0px 0px 3px #25D366',
        '-webkit-box-shadow': '0px 0px 0px 3px #25D366',
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
        sans: 'Poppins',
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
      primary: '#25D366',
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
