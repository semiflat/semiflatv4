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
import CirclesBackground from '~/assets/circles-bg1.svg?component'
import CirclesBackground2 from '~/assets/circles-bg2.svg?component'

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
    <div class="page-content mt-16 md:mt-40">
        <h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">We design tools that help millions of professionals <br class="hidden md:block" /> be more effective at their job_</h2>
        <div class="grid gap-6 md:grid-cols-3 md:hidden">
            <TheTestimonialComponent v-for="(testimonial, i) in testimonials" :key="i" :testimonial="testimonial" />
            <div class="px-8 py-10 bg-dark-blue rounded-4 relative md:static">
                    <p class="text-white text-xl mb-8 font-semibold">Want to see what the buzz is all about?</p>
                    <AppButton class="!bg-white !text-blue-300">See our work</AppButton>
                    <CirclesBackground class="absolute bottom-0 right-0" />
                    
                </div>
        </div>
        <div class="hidden md:flex gap-8">
            <div class="flex flex-col gap-8 max-w-[346px] justify-center">
                <TheTestimonialComponent :testimonial="testimonials[0]" />
                <TheTestimonialComponent :testimonial="testimonials[1]" />
            </div>
            <div class="flex flex-col gap-8 max-w-[346px]">
                <TheTestimonialComponent :testimonial="testimonials[2]" />
                <div class="px-8 py-10 bg-dark-blue rounded-4 relative">
                    <p class="text-white text-xl mb-8 font-semibold">Want to see what the buzz is all about?</p>
                    <AppButton class="!bg-white !text-blue-300">See our work</AppButton>
                    <CirclesBackground2 class="absolute bottom-0 right-0" />
                </div>
                <TheTestimonialComponent :testimonial="testimonials[3]" />
            </div>
            <div class="flex flex-col gap-8 max-w-[346px] justify-center">
                <TheTestimonialComponent :testimonial="testimonials[4]" />
                <TheTestimonialComponent :testimonial="testimonials[5]" />
            </div>
        </div>
    </div>
</template>

<style>
.bg-dark-blue {
    background: radial-gradient(57.03% 76.98% at 100% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)
        , #031C26;
    background-blend-mode: overlay, normal;
}
</style>