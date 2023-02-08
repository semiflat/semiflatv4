<script setup lang='ts'>
import SeniorDesigner from '~/assets/icons/senior-designer.svg?component'
import PM from '~/assets/icons/project-manager.svg?component'
import RegularDesigner from '~/assets/icons/regular-designer.svg?component'

const roles = [
    {
        icon: SeniorDesigner,
        role: 'Senior Product Designer',
        desc: 'Are you looking for the next step in your design career? Join Semiflat where we shape the future od SaaS.'
    },
    {
        icon: PM,
        role: 'Project Manager',
        desc: 'Making things happen and overseeing the delivery of complex projects is your superpower? We need you!'
    },
    {
        icon: RegularDesigner,
        role: 'Regular Product Designer',
        desc: 'Do you want to shape products that have real impact on the world? '
    },
]
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">Want to join Semiflat? Here are our open roles_</h2>
        <div class="grid gap-6 md:grid-cols-2 md:gap-8">
            <div v-for="(el, i) in roles" :key="i" class="p-8 rounded-4 border border-[#BCDCDC] role transition-all duration-300 relative">
                <component :is="el.icon" class="mb-6" />
                <p class="font-semibold text-xl mb-2 text-blue-300">{{ el.role }}</p>
                <p class="text-blue-200">{{ el.desc }}</p>
                <span class="text-turquoise-400 font-semibold text-base inline-block mt-6 hover:text-white hover:bg-turquoise-400 px-0.5 cursor-pointer">Learn about the role</span>
            </div>
        </div>
    </div>
</template>

<style>
.role:after {
    content: "";
    z-index: -1;
    background: radial-gradient(50% 100% at 100% 100%, rgba(201, 247, 232, 0.64) 0%, rgba(201, 247, 232, 0) 100%), transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0;
    transition: all 0.3s ease-out;
}
.role:hover:after {
    opacity: 100%;
}
</style>