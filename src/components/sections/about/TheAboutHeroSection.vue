<script setup lang="ts">
const hero = {
  title: 'Meet the team behind your next project_',
  description:
    'We are a remote team of 17 product designers, laser focused on delivering top tier SaaS product design to world’s most innovative startups.',
  buttons: [
    {
      label: 'Get in touch',
      href: 'mailto:hello@semiflat.com',
    },
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction',
      isTargetBlank: true,
      isText: true,
    },
  ],
}
</script>

<template>
  <AppHero :title="hero.title" :description="hero.description" :buttons="hero.buttons"></AppHero>
</template>
