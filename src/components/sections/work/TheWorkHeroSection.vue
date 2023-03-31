<script setup lang="ts">
const hero = {
  title: 'Designing for SaaS is in our DNA_',
  description:
    'Our main focus from the beginning was to bring world-class design to emerging superstars in the SaaS space. From workflow builders to CRM systems, we’ve done it before.',
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
