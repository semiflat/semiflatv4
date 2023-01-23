<script lang="ts" setup>
import BottleIcon from '~/assets/icons/bottle-icon.svg?component'
import TheAboutComponent from '~/components/about/TheAboutComponent.vue';
import box from '~/assets/box.jpeg'
import convent from '~/assets/convent.jpeg'


const content = [
    {
        title: 'We are value driven',
        text: 'Our team is comprised of high-achieving individuals passionate about their craft and striving to be best at it.',
        bgImage: `url(${convent})`
    },
    {
        title: 'From a freelancing gig to a 17 people agency. Read now about how it all started.',
    },
    {
        title: 'We’re building a home for designers',
        text: 'Team retreats at Semiflat are legendary. As a remote team we get together every couple of months.',
        bgImage: `url(${box})`
    },
]

</script>

<template>
    <TheAboutComponent :content="content" :icon="BottleIcon"  />
</template>
