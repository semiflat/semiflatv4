<script lang="ts" setup>
import LogoDesktop from '~/assets/logo-desktop.svg?component'
import LogoMobile from '~/assets/logo-mobile.svg?component'
import HamburgerMenu from '~/assets/icons/hamburger-menu.svg?component'
import ChevronRight from '~/assets/icons/chevron-right.svg?component'
import Close from '~/assets/icons/close.svg?component'

const links = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Work',
    path: '/work',
  },
  {
    label: 'Services',
    path: '/services',
  },
  {
    label: 'Culture',
    path: '/culture',
  },
]

const context = usePageContext()

const openMenu = ref(false)

onMounted(() => {
  const navbar = document.querySelector('.mobile-nav')

  window.onscroll = () => {
    if (window.pageYOffset > 0) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }
  }
})
</script>

<template>
  <div>
    <nav class="relative md:hidden">
      <div
        class="px-6 flex fixed -top-1px w-full items-center justify-between h-3.5rem z-20 duration-500 mobile-nav"
      >
        <LogoMobile class="" />
        <HamburgerMenu class="-mr-2" @click="openMenu = true" />
      </div>
      <div v-if="openMenu" class="fixed h-200vh top-0 bg-white w-full z-100">
        <div class="px-6 flex items-center justify-between h-3.5rem relative z-10">
          <LogoMobile class="" />
          <Close class="-mr-2" @click="openMenu = false" />
        </div>
        <div
          class="safari-fix bg-gradient-left bg-turquoise-100/80 rounded-full blur-[120px] h-[28.125rem] w-[28.125rem] absolute -left-50 -top-18 md:w-[43.75rem] md:h-[43.75rem] md:-left-90 md:top-26 md:blur-[240px]"
        />
        <div
          class="safari-fix bg-gradient-right bg-turquoise-200 rounded-full blur-[120px] h-[12.5rem] w-[12.5rem] absolute -right-15 -top-17 md:h-[18.75rem] md:w-[18.75rem] md:blur-200px"
        />
        <ul
          class="text-sm flex flex-col px-6 text-primary font-semibold divide-y divide-[#BCDCDC] relative z-10 mt-18"
        >
          <li v-for="link in links" :key="link.path">
            <a :href="link.path" class="flex justify-between py-4" @click="openMenu = false">
              {{ link.label }}
              <component :is="ChevronRight" class="text-primary" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="items-center page-content justify-between h-3.5rem md:h-16 relative !hidden md:!flex"
    >
      <a href="/">
        <LogoDesktop class="hidden md:block" />
      </a>
      <ul class="gap-6 text-sm hidden md:flex text-primary font-semibold">
        <li v-for="link in links" :key="link.path">
          <a
            :href="link.path"
            class="cursor-pointer py-1.5 px-4 rounded-[8rem] transition-colors duration-500 hover:bg-turquoise-100/50"
            :class="{ 'bg-turquoise-100': context.urlPathname === link.path }"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
      <AppButton
        class="!hidden md:!inline-flex"
        href="mailto:hello@semiflat.com"
        :class="[context.pageProps?.pageShell?.button]"
        >Get in touch</AppButton
      >
    </nav>
  </div>
</template>

<style>
.mobile-nav {
  transition-property: box-shadow, background-color;
  will-change: box-shadow, background-color;
}

.scrolled {
  box-shadow: 0px 4px 12px -2px rgba(17, 24, 28, 0.12), 0px 1px 2px rgba(17, 24, 28, 0.16);
  @apply bg-white;
}
</style>
