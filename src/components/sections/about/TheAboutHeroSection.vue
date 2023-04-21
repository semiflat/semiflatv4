<script setup lang="ts">
const hero = {
  title: 'Meet the team behind your next project_',
  description:
    'We are a remote team of product designers, laser focused on delivering top tier SaaS product design to world’s most innovative startups.',
  buttons: [
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/semiflat_demo/30min',
      isTargetBlank: true,
    },
  ],
}
</script>

<template>
  <AppHero :title="hero.title" :description="hero.description" :buttons="hero.buttons"></AppHero>
</template>
