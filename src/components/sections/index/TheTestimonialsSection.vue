<script setup lang='ts'>
import PhenomLogo from '~/assets/logos/phenom.svg?component'
import DefaultLogo from '~/assets/logos/default.svg?component'
import PocusLogo from '~/assets/logos/pocus.svg?component'
import YuzedataLogo from '~/assets/logos/yuzedata.svg?component'
import UsefulLogo from '~/assets/logos/useful.svg?component'
import OnwardLogo from '~/assets/logos/onward.svg?component'
import LithalAvatar from '~/assets/avatars/lithal.png'
import IsaacAvatar from '~/assets/avatars/isaac.png'
import MikeAvatar from '~/assets/avatars/mike.png'
import ErinAvatar from '~/assets/avatars/erin.png'
import NicoAvatar from '~/assets/avatars/nico.png'
import ColemanAvatar from '~/assets/avatars/coleman.png'
import CirclesBackground from '~/assets//webm/circles-horiz.webm'

const testimonials = [
    {
        logo: PhenomLogo,
        text: '“All who are involved are super cooperative and it feels like there is always someone to count on when problems arise.”',
        name: 'Lital Dvir',
        position: 'Product Manager',
        avatar: LithalAvatar
    },
    {
        logo: PocusLogo,
        text: '“We are very happy with the work Nic and his team have done. They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”',
        name: 'Isaac Pohl-Zaretsky',
        position: 'Co-Founder, CTO',
        avatar: IsaacAvatar
    },
    {
        logo: UsefulLogo,
        text: '“We were looking for true partnership, not just great execution. Paulina, Nic, and Ewa were all of that and more. ”',
        name: 'Mike Ottavi-Brannon',
        position: 'Co-Founder',
        avatar: MikeAvatar
    },
    {
        logo: YuzedataLogo,
        text: '“I’ve been managing IT and design projects for decades and was still impressed with how smooth the project was moving along.”',
        name: 'Erin Joseph',
        position: 'Product Manager',
        avatar: ErinAvatar
    },
    {
        logo: DefaultLogo,
        text: `“We're super happy with the work the team is producing. Only regret is not working together sooner. I recommend Semiflat to all my founder friends!”`,
        name: 'Nico Ferreyra',
        position: 'Co-Founder',
        avatar: NicoAvatar
    },
    {
        logo: OnwardLogo,
        text: `“We're super happy with the work the team is producing. Only regret is not working together sooner. I recommend Semiflat to all my founder friends!”`,
        name: 'Coleman Oates',
        position: 'Co-Founder',
        avatar: ColemanAvatar
    },
]

</script>

<template>
    <!-- <div class="mask max-w-80rem mx-auto bg-red"> -->
    <div class="page-content mt-16 md:mt-40 relative">
        <!-- <div class="absolute w-120% left-1/2 transform -translate-x-1/2  h-full top-16 mask" /> -->
        <h2
            class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
            Dozens of trailblazing startups loving our work <br class="hidden md:block" /> can’t be wrong_</h2>
        <div class="grid gap-6 md:grid-cols-3 md:hidden">
            <TheTestimonialComponent v-for="(testimonial, i) in testimonials" :key="i" :testimonial="testimonial" />
            <div class="px-8 py-10 bg-dark-blue rounded-4 relative md:static">
                <p class="text-white text-xl mb-8 font-semibold">Want to see what the buzz is all about?</p>
                <AppButton class="!bg-white !text-blue-300">See our work</AppButton>
                <video playsinline autoplay muted loop class="absolute right-6 bottom-4 h-22">
                    <source :src="CirclesBackground" type="video/webm">
                </video>

            </div>
        </div>
        <div class="hidden md:flex gap-8">
            <div class="flex flex-col gap-8 max-w-[346px] justify-center relative">
                <div class="h-[360px] w-full  absolute -top-78 rounded-4 rotating-border" />
                <TheTestimonialComponent :testimonial="testimonials[0]" />
                <div class="h-[360px] w-full  absolute -left-[calc(100%+2rem)] rounded-4 rotating-border" />
                <TheTestimonialComponent :testimonial="testimonials[1]" />
                <div class="h-[360px] w-full absolute -bottom-78 rounded-4 rotating-border" />

            </div>
            <div class="flex flex-col gap-8 max-w-[346px] relative">
                <div class="h-[360px] w-full  absolute -top-98 rounded-4  rotating-border" />
                <TheTestimonialComponent :testimonial="testimonials[2]" />
                <div class="px-8 py-10 bg-dark-blue rounded-4 relative">
                    <p class="text-white text-xl mb-8 font-semibold">Want to see what the buzz is all about?</p>
                    <AppButton class="!bg-white !text-blue-300">See our work</AppButton>
                    <video playsinline autoplay muted loop class="absolute right-6 bottom-4 h-22">
                        <source :src="CirclesBackground" type="video/webm">
                    </video>
                </div>
                <TheTestimonialComponent :testimonial="testimonials[3]" />
                <div class="h-[360px] w-full absolute -bottom-98 rounded-4 rotating-border" />

            </div>
            <div class="flex flex-col gap-8 max-w-[346px] justify-center relative">
                <div class="h-[360px] w-full absolute -top-74 rounded-4 rotating-border" />
                <TheTestimonialComponent :testimonial="testimonials[4]" />
                <div class="h-[360px] w-full  absolute -right-[calc(100%+2rem)] rounded-4 rotating-border" />
                <TheTestimonialComponent :testimonial="testimonials[5]" />
                <div class="h-[360px] w-full absolute -bottom-74 rounded-4 rotating-border" />

            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<style scoped>
.bg-dark-blue {
    background: radial-gradient(57.03% 76.98% at 100% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #031C26;
    background-blend-mode: overlay, normal;
}


.rotating-border {
    width: 100%;
    background: linear-gradient(90deg, #BCDCDC 50%, transparent 50%), linear-gradient(90deg, #BCDCDC 50%, transparent 50%), linear-gradient(0deg, #BCDCDC 50%, transparent 50%), linear-gradient(0deg, #BCDCDC 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 15px 1px, 15px 1px, 1px 15px, 1px 15px;
    padding: 10px;
    animation: border-dance 36s infinite linear;
    border-radius: 16px !important;
    overflow: hidden;

}

.mask-test {
    /* mask-image: radial-gradient(242.44% 50% at 50% 50%, #D9D9D9 0%, rgba(217, 217, 217, 0.9) 57.81%, rgba(217, 217, 217, 0) 92.71%); */
    /* -webkit-mask-image: radial-gradient(242.44% 50% at 50% 50%, #D9D9D9 0%, rgba(217, 217, 217, 0.9) 57.81%, rgba(217, 217, 217, 0) 92.71%); */
    -webkit-mask-image: radial-gradient(50% 50% at 50% 50%, #D9D9D9 55.46%, rgba(217, 217, 217, 0) 100%);
    width: 1600px;

}

@keyframes border-dance {
    0% {
        background-position: 0 0, 100% 100%, 0 100%, 100% 0;
    }

    100% {
        background-position: 100% 0, 0 100%, 0 0, 100% 100%;
    }
}
</style>