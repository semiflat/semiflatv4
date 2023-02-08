<script setup lang="ts">
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import NicImage from '~/assets/employees/nic.jpeg'
import EwaImage from '~/assets/employees/ewa.jpeg'
import ApoloniaImage from '~/assets/employees/apolonia.jpeg'
import ChrystianImage from '~/assets/employees/chrystian.jpeg'
import PaulinaImage from '~/assets/employees/paulina.jpeg'
import NataliaImage from '~/assets/employees/natalia.jpeg'
import MagdaImage from '~/assets/employees/magda.jpeg'
import BarryImage from '~/assets/employees/barry.png'
import MaciejImage from '~/assets/employees/maciej.jpeg'
import SarahImage from '~/assets/employees/sarah.png'
import ArekImage from '~/assets/employees/arek.jpeg'
import MartynaImage from '~/assets/employees/martyna.jpeg'
import KubaImage from '~/assets/employees/kuba.jpeg'
import MarcinImage from '~/assets/employees/marcin.jpeg'
import PatrycjaImage from '~/assets/employees/patrycja.jpeg'

const employees = [
    NicImage,
    EwaImage,
    ApoloniaImage,
    ChrystianImage,
    PaulinaImage,
    NataliaImage,
    MagdaImage,
    BarryImage,
    MaciejImage,
    SarahImage,
    ArekImage,
    MartynaImage,
    KubaImage,
    MarcinImage,
    PatrycjaImage,

]

</script>

<template>
    <div class="relative page-content">
        <BackgroundMobileLeft class="absolute pointer-events-none top-28 left-0 md:hidden" />
        <BackgroundDesktop class="hidden pointer-events-none absolute -left-42 md:block -top-57" />
        <div class=" mt-3.5rem md:hidden">
            <h1 class="hero-title md:text-[2.5rem] md:leading-[120%]  md:mt-6">Meet the team behind your next project_
            </h1>
            <p class="mt-6 text-blue-200 ">
                We are a remote team of 17 product designers, laser focused on delivering top tier SaaS product design
                to <br /> world’s most innovative startups.
            </p>
            <div class="mt-2.5rem">
                <AppButton>See open positions</AppButton>
            </div>
        </div>
        <div class="hidden md:block ">
            <div class="md:mt-40 md:text-center">
                <h1 class="hero-title md:text-[2.5rem] md:leading-[120%]  md:mt-6">Designer, welcome home_
                </h1>
                <p class="mt-6 text-blue-200 ">
                    Founded by a designer as a place where designers can thrive, we know the needs of creative minds and
                    work <br /> tirelessly to make sure they proudly call Semiflat their home.
                </p>
                <div class="mt-2.5rem">
                    <AppButton>See open positions</AppButton>
                </div>
            </div>
            <div class="md:mt-40 relative z-1">
                <div class="flex gap-7 w-fit mx-auto">
                    <img
v-for="person in employees.slice(0, 10)" :key="person" :src="person"
                        class="w-14 h-14 rounded-full object-cover" />
                </div>
                <div class="flex gap-7 w-fit mx-auto mt-7">
                    <img
v-for="person in employees.slice(10, 15)" :key="person" :src="person"
                        class="w-14 h-14 rounded-full object-cover" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hero-title {
    @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}
</style> 