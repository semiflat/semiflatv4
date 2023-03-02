<script setup lang='ts'>
import Function1 from '~/assets/pocus/illustration-1.svg'
import Function2 from '~/assets/pocus/illustration-2.svg?component'
import Function3 from '~/assets/pocus/illustration-3.svg?component'

</script>

<template>
    <div class="page-content mt-16 md:mt-40 hidden md:block">
        <div class="pt-14 bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]">
            <h3 class="font-semibold text-[20px] mb-4">Powerful query builder</h3>
            <p class="text-[#545959] max-w-[33.5rem] mx-auto">The signal builder allows users to build lists of accounts
                based on multiple
                conditions across their data
                stack. </p>
            <component :is="Function1" class="-mt-16" />
        </div>
        <div class="grid grid-cols-2 gap-8 mt-8">
            <div class="bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]">
                <component :is="Function2" />
                <div class="mt-2 px-10 pb-14">
                    <h3 class="font-semibold text-[20px] mb-2">Powerful query builder</h3>
                    <p class="text-[#545959] max-w-[33.5rem] mx-auto">Define your perfect customers and let Pocus deliver
                        them to your inbox. </p>
                </div>
            </div>
            <div class="bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]">
                <component :is="Function3" />
                <div class="mt-2 px-10 pb-14">
                    <h3 class="font-semibold text-[20px] mb-2">How the magic is done</h3>
                    <p class="text-[#545959] max-w-[33.5rem] mx-auto">Pocus connects your product data with your customer
                        data to deliver insights. </p>
                </div>
            </div>
        </div>
    </div>
</template>

