<script lang="ts" setup>
import Dashboard from '~/assets/useful/useful-dashboard.png'
import UsefulLogo from '~/assets/useful/useful-logo.svg?component'
const context = usePageContext()

const scrollToTestimonial = () => {
  document?.getElementById('testimonial')?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="page-content">
    <div class="hero mt-3.5rem md:mt-30 md:text-center">
      <div class="hero__inner">
        <UsefulLogo class="mx-auto hidden md:block" />
        <h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-16">
          Helping Useful raise $5M to
          <br class="hidden md:block" />empower continuous delivery tech
          <br class="hidden md:block" />
          teams
        </h1>
        <p class="mt-6">
          Turn customer calls into Product gold. Transcribe, highlight, and share important
          <br class="hidden md:block" />
          moments from customer calls. Excite and inform teammates to build products your
          <br class="hidden md:block" />
          customers will love.
        </p>
        <div class="mt-2.5rem">
          <AppButton
            :class="[context.pageProps?.pageShell?.bgColor]"
            href="https://useful.com"
            target="_blank"
            >See the live version</AppButton
          >
          <AppButton text @click="scrollToTestimonial">Read testimonial</AppButton>
        </div>
      </div>
    </div>
  </div>

  <div class="relative h-[370px] sm:h-[690px] mt-10 mt-20 ml-6 md:ml-0">
    <img
      :src="Dashboard"
      class="h-full object-cover object-top-left dashboard-mask mx-auto border-1 border-[#D8DFE5] md:rounded-6"
    />
  </div>
  <div class="page-content mt-10 md:mt-20">
    <div class="flex flex-col items-center sm:grid gap-6 md:gap-8 sm:grid-cols-3 justify-center">
      <div
        class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full overflow-hidden"
      >
        <div class="bg-[url(~/assets/pocus/pocus-timeline.svg)] h-[7.5rem] bg-center" />
        <div class="py-4 px-6 text-center">
          <p class="font-semibold">2 months</p>
          <p class="text-gray-600">Timeline</p>
        </div>
      </div>
      <div
        class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full overflow-hidden"
      >
        <div class="bg-[url(~/assets/pocus/pocus-location.svg)] h-[7.5rem] bg-center" />
        <div class="py-4 px-6 text-center">
          <p class="font-semibold">Austin, TX</p>
          <p class="text-gray-600">Location</p>
        </div>
      </div>
      <div
        class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full overflow-hidden"
      >
        <div class="bg-[url(~/assets/pocus/pocus-funding.svg)] h-[7.5rem] bg-center" />
        <div class="py-4 px-6 text-center">
          <p class="font-semibold">$5M</p>
          <p class="text-gray-600">Total funding</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  left: 75vw;
  top: -40vw;
  filter: blur(32vw);
  background: #d2bef8;
}

.hero::after {
  content: '';
  position: absolute;
  width: 450px;
  height: 450px;
  right: 40vw;
  top: -50vw;
  filter: blur(32vw);
  background: #f2ecfd;
}

@media (min-width: 768px) {
  .hero::before {
    width: 20vw;
    height: 20vw;
    left: 85vw;
    top: -5vw;
    filter: blur(14vw);
  }

  .hero::after {
    width: 50vw;
    height: 50vw;
    right: 78vw;
    top: 15rem;
    filter: blur(16vw);
  }
}

.hero__inner {
  position: relative;
  z-index: 1;
}

.hero-title {
  @apply text-[1.75rem] font-semibold leading-[34px];
}

.dashboard-mask {
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 29%);
  mask-image: linear-gradient(to top, transparent 0%, black 29%);
}

@media (min-width: 768px) {
  .dashboard-mask {
    -webkit-mask-image: none;
    mask-image: none;
    box-shadow: 0px 12px 24px -2px rgba(17, 24, 28, 0.08);
    filter: drop-shadow(0px 1px 2px rgba(17, 24, 28, 0.12));
    border-radius: 24px;
  }
}
</style>
