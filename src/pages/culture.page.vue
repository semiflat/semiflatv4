import TheCultureImagesSlider from '~/components/sections/culture/TheCultureImagesSlider.vue';
import TheCultureOpenRoles from '~/components/sections/culture/TheCultureOpenRoles.vue'; import
TheCultureSeeOurWork from '~/components/sections/culture/TheCultureSeeOurWork.vue'; import
TheCultureAboutSection from '~/components/sections/culture/TheCultureAboutSection.vue'; import
TheCulturePerksSection from '~/components/sections/culture/TheCulturePerksSection.vue'; import
TheCultureHeroSection from '~/components/sections/culture/TheCultureHeroSection.vue';

<template>
  <div class="overflow-hidden">
    <TheCultureHeroSection class="section" />
    <TheCulturePerksSection class="section" />
    <TheCultureAboutSection class="section" />
    <TheCultureOurServices class="section" />
    <TheCultureSeeOurWork />
    <!-- <TheCultureOpenRoles /> -->
    <TheCultureImagesSlider class="section" />
    <TheCultureFaqSections class="section" />
    <TheCTABottomSection class="section" />
  </div>
</template>
