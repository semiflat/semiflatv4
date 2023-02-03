<script setup lang='ts'>
import SisuLogo from '~/assets/logos/sisu.svg?component'
import OdonataLogo from '~/assets/logos/odonata.svg?component'
import PhenomLogo from '~/assets/logos/phenom.svg?component'
import DefaultLogo from '~/assets/logos/default.svg?component'
import ClickmagicLogo from '~/assets/logos/clickmagick.svg?component'
import PocusLogo from '~/assets/logos/pocus.svg?component'
import YuzedataLogo from '~/assets/logos/yuzedata.svg?component'
import StepsizeLogo from '~/assets/logos/stepsize.svg?component'
import CloudstoreLogo from '~/assets/logos/cloudstore.svg?component'
import LhotseLogo from '~/assets/logos/lhotse.svg?component'
import UsefulLogo from '~/assets/logos/useful.svg?component'
import JeticLogo from '~/assets/logos/jetic.svg?component'
import HalyconLogo from '~/assets/logos/halycon.svg?component'
import CoreLogo from '~/assets/logos/core.svg?component'
import OnwardLogo from '~/assets/logos/onward.svg?component'


const logos = [
    OdonataLogo,
    SisuLogo,
    PhenomLogo,
    DefaultLogo,
    ClickmagicLogo,
    PocusLogo,
    StepsizeLogo,
    CloudstoreLogo,
    LhotseLogo,
    UsefulLogo,
    JeticLogo,
    HalyconLogo,
    CoreLogo,
    OnwardLogo
]
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="">
            <h2
                class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
                Meet some of the startups who we’ve supported_
            </h2>
        </div>
        <div class="grid grid-cols-2 gap-y-8 md:grid-cols-3 mt-12 lg:hidden">
            <component :is="logo" v-for="logo in logos" :key="logo" class="mx-auto h-38px grayscale" />
        </div>
        <div class="mt-20 hidden lg:flex flex-col gap-8 mask">
            <div class="flex">
                <div v-for="logo in logos.slice(0, 5)" :key="logo" class="w-[15rem] py-5">
                    <component :is="logo" class="mx-auto h-38px grayscale" />
                </div>
            </div>
            <div class="flex justify-center">
                <div v-for="logo in logos.slice(5, 9)" :key="logo" class="w-[15rem] py-5">
                    <component :is="logo" class="mx-auto h-38px grayscale" />
                </div>
            </div>
            <div class="flex justify-center">
                <div v-for="logo in logos.slice(9, 12)" :key="logo" class="w-[15rem] py-5">
                    <component :is="logo" class="mx-auto h-38px grayscale" />
                </div>
            </div>
        </div>
    </div>
</template>

<style >
.mask {
  -webkit-mask-image: radial-gradient(circle at 50% -153%, black 71%, transparent 83%);
  mask-image: radial-gradient(circle at 50% -153%, black 71%, transparent 83%);
}
</style>