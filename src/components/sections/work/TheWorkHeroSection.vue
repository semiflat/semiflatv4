<script setup lang="ts">
const hero = {
  title: 'Designing for SaaS is in our DNA_',
  description:
    'Our main focus from the beginning was to bring world-class design to emerging superstars in the SaaS space. From workflow builders to CRM systems, we’ve done it before.',
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
