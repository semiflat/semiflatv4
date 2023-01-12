import { t } from '~/i18n'

const LocaleText = defineComponent({
  setup(_, { slots }) {
    const getText = () => {
      const children = slots.default ? slots.default()[0]?.children : undefined
      return typeof children === 'string' ? children : ''
    }

    const text = getText()
    const textLocalized = t(text)
    return () => textLocalized
  },
})

export default LocaleText
