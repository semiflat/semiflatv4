<script setup lang='ts'>

const timeline = [
    {
        date: 'Q1 2020',
        header: 'The company is formed under Semiflat Studio',
        text: 'It all began when Nic quit his job at an NYC tech startup to launch his own business. What started as a freelancing career soon turned into a small design studio serving its first B2B SaaS customers.'
    },
    {
        date: 'Q1 2020',
        header: 'Signing the first client',
        text: 'Nic had signed appfleet - his first client in February. '
    },
    {
        date: 'Q3 2020',
        header: 'First full-time designer joins Semiflat',
        text: 'After a few months of successful freelancing it was clear that working 16-hour days is not the way to scale the company. That’s why in July the first full-time designer joined Nic to build the future of SaaS. '
    },
    {
        date: 'Q3 2021',
        header: 'First ever team retreat',
        text: 'Semiflat is a remote-first company. We didn’t have back then so July 2021 was the first time we’ve all met face to face.'
    },
]
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
            What started out as a one-man-operation, quickly <br class="hidden md:block"/> turned into a robust design house_</h2>
        <div class="mt-12 md:mt-16">
            <div class="flex-col flex gap-3 md:items-center">
                <div v-for="(event, i) in timeline" :key="i" class="flex gap-4 md:gap-8">
                    <p
class="text-blue-300 font-semibold shrink-0"
                        :class="{ 'invisible': event.date === (i > 0 ? timeline[i - 1].date : timeline[timeline.length - 1].date) }">
                        {{ event.date }}</p>
                    <div class="flex gap-4 md:gap-8">
                        <div class="bg-turquoise-300 w-3 h-3 rounded-full shrink-0 m-1.5 !mr-1.25" />
                        <div class="">
                            <div>
                                <h3 class="text-blue-300 font-semibold">{{ event.header }}</h3>
                                <div class="pt-4 pb-12 border-l-2  border-[#BCDCDC] -ml-7 pl-7 md:-ml-11 md:pl-11 md:mt-1.5">
                                    <p class="text-blue-200 md:w-[41.812rem]">{{ event.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                <p class="text-blue-300 font-semibold shrink-0 invisible">Q1 2020</p>
                <div class="flex gap-4">
                    <div class="bg-turquoise-300 w-3 h-3 rounded-full shrink-0 m-1.5 !mr-1.25" />
                    <div class="md:w-[41.812rem]">
                        <div>
                            <AppButton text class="!text-turquoise-400 font-semibold !py-0 !px-0">Read more history</AppButton>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
