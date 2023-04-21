<script setup lang="ts">
import CTABannerDesktopImage from '~/assets/case-study/cta_banner.png'

const ctaBanner = {
  title: 'Want to partner with design experts in SaaS?',
  description: 'We’re excited to talk to you about your project requirements and business goals.',
  buttons: [
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/semiflat_demo/30min',
      isTargetBlank: true,
    },
  ],
  image: {
    urlDesktop: CTABannerDesktopImage,
    altText: 'App dashboard designed by Semiflat',
  },
}
</script>
<template>
  <AppBlock>
    <div class="page-content">
      <AppCTABanner class="work-cta-section" v-bind="ctaBanner" />
    </div>
  </AppBlock>
</template>

<style lang="scss" scoped>
.work-cta-section {
  &:deep(.app-button:not(.is-text)) {
    color: var(--accent-color-dark);
  }

  &:deep(.cta-banner__description) {
    opacity: .72;
  }
}
</style>
