<script lang="ts" setup>
import LogoDesktop from '~/assets/logo-desktop.svg?component'
import LogoMobile from '~/assets/logo-mobile.svg?component'
import HamburgerMenu from '~/assets/icons/hamburger-menu.svg?component'
const links = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Work',
        path: '/work'
    },
    {
        label: 'Services',
        path: '/services'
    },
    {
        label: 'Culture',
        path: '/culture'
    },
]

const pageContext = usePageContext()
</script>

<template>
    <nav class="flex items-center page-content justify-between h-3.5rem md:h-16 relative">
        <LogoDesktop class="hidden md:block" />
        <LogoMobile class="md:hidden" />
        <ul class="gap-6 text-sm hidden md:flex text-primary font-semibold">
            <li
v-for="link in links" :key="link.path" class="cursor-pointer py-1.5 px-4 rounded-[8rem]"
                :class="{ 'bg-[#F6F6F7]': pageContext.urlPathname === link.path }">
                <a :href="link.path">
                    {{ link.label }}
                </a>
            </li>
        </ul>
        <AppButton class="!hidden md:!inline-flex">Send email</AppButton>
        <HamburgerMenu class="md:hidden" />
    </nav>
</template>