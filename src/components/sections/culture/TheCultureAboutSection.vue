<script lang="ts" setup>
import NotesIcon from '~/assets/icons/notes-icon.svg?component'
import TheAboutComponent from '~/components/about/TheAboutComponent.vue';
import smiling from '~/assets/smiling-person.jpeg'
import girls from '~/assets/girls.jpeg'


const content = [
    {
        title: 'Team love at Semiflat knows no bounds',
        text: 'We put our heart and soul into everything we do. From designing top-tier interfaces to planning retreats or creating custom gadgets. Everything and everyone at Semiflat is top-notch quality. ',
        bgImage: `url(${smiling})`
    },
    {
        title: 'Semiflat was created with an ambitious vision in mind. Read the letter from our founder.',
    },
    {
        title: 'Good times ahead',
        text: 'As a remote team we get together every couple of months to catch up, unwind and have a good time. We plan our retreats with similar passion to the app designs we do. We want every time we meet to feel special for everyone.',
        bgImage: `url(${girls})`
    },
]

</script>

<template>
    <TheAboutComponent :content="content" :icon="NotesIcon" />
</template>
