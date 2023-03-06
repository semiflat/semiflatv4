<script lang="ts" setup>
import HandsIcon from '~/assets/icons/hands-icon.svg?component'
import TheAboutComponent from '~/components/about/TheAboutComponent.vue';
import people from '~/assets/people.jpeg'
import meetup from '~/assets/meetup.jpeg'


const content = [
    {
        title: 'Tight-knit team of experts you can count on',
        text: 'Our team is comprised of high-achieving individuals passionate about their craft and striving to be best at it.',
        bgImage: `url(${people})`
    },
    {
        title: 'Quality is everything to us. Read our mission statement',
    },
    {
        title: 'Always looking for the next big thing in tech.',
        text: 'We stay up to date with industry trends by participating in conferences and constantly exploring new technologies.',
        bgImage: `url(${meetup})`
    },
]

</script>

<template>
    <TheAboutComponent :content="content" :icon="HandsIcon" />
</template>
