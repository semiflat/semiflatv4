<script setup lang="ts">
import PhenomLogo from '~/assets/logos/phenom.svg?component'
import DefaultLogo from '~/assets/logos/default.svg?component'
import PocusLogo from '~/assets/logos/pocus.svg?component'
import YuzedataLogo from '~/assets/logos/yuzedata.svg?component'
import UsefulLogo from '~/assets/logos/useful.svg?component'
import YeticLogo from '~/assets/logos/jetic.svg?component'
import LithalAvatar from '~/assets/avatars/lithal.png'
import IsaacAvatar from '~/assets/avatars/isaac.png'
import MikeAvatar from '~/assets/avatars/mike.png'
import ErinAvatar from '~/assets/avatars/erin.png'
import NicoAvatar from '~/assets/avatars/nico.png'
import AndreAvatar from '~/assets/avatars/andre.png'

const testimonials = [
  {
    logo: PhenomLogo,
    text: '“All who are involved are super cooperative and it feels like there is always someone to count on when problems arise.”',
    name: 'Lital Dvir',
    position: 'Product Manager',
    avatar: LithalAvatar,
  },
  {
    logo: PocusLogo,
    text: '“We are very happy with the work Nic and his team have done. They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”',
    name: 'Isaac Pohl-Zaretsky',
    position: 'Co-Founder, CTO',
    avatar: IsaacAvatar,
  },
  {
    logo: UsefulLogo,
    text: '“We were looking for true partnership, not just great execution. Paulina, Nic, and Ewa were all of that and more. ”',
    name: 'Mike Ottavi-Brannon',
    position: 'Co-Founder',
    avatar: MikeAvatar,
  },
  {
    logo: YuzedataLogo,
    text: '“I’ve been managing IT and design projects for decades and was still impressed with how smooth the project was moving along.”',
    name: 'Erin Joseph',
    position: 'Product Manager',
    avatar: ErinAvatar,
  },
  {
    logo: DefaultLogo,
    text: `“We're super happy with the work the team is producing. Only regret is not working together sooner. I recommend Semiflat to all my founder friends!”`,
    name: 'Nico Ferreyra',
    position: 'Co-Founder',
    avatar: NicoAvatar,
  },
  {
    logo: YeticLogo,
    text: `“Everything, from scoping out and communication to final designs, was delivered with high quality. Our expectations were met and exceeded, and we keep coming back to Semiflat for continuous collaboration.”`,
    name: 'Andre Sluczka',
    position: 'Founder and CEO',
    avatar: AndreAvatar,
  },
]
</script>

<template>
  <AppBlock class="testimonials-section">
    <div class="page-content">
      <h2 class="testimonials-section__title gradient-text">
        Dozens of trailblazing startups loving our work can’t be wrong_
      </h2>

      <div class="testimonials-section__inner">
        <div class="testimonials-section__column">
          <TheTestimonialComponent :testimonial="testimonials[0]" />
          <TheTestimonialComponent :testimonial="testimonials[1]" />
        </div>

        <div class="testimonials-section__column">
          <TheTestimonialComponent :testimonial="testimonials[2]" />

          <div class="testimonials-section__banner px-8 py-10 bg-dark-blue rounded-4 relative">
            <p class="text-white text-xl mb-8 font-semibold">
              Want to see what the buzz is all about?
            </p>
            <AppButton class="!bg-white !text-blue-300 relative z-1" href="/work"
              >See our work</AppButton
            >
            <AppCirclesHorizontal id="circles-md" class="absolute right-0 bottom-0 h-51" />
          </div>

          <TheTestimonialComponent :testimonial="testimonials[3]" />
        </div>

        <div class="testimonials-section__column">
          <TheTestimonialComponent :testimonial="testimonials[4]" />
          <TheTestimonialComponent :testimonial="testimonials[5]" />
        </div>
      </div>
    </div>
  </AppBlock>
</template>

<style lang="scss" scoped>
$testimonials-section-bp: 1024px;
.testimonials-section {
  &__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;

    @media (min-width: $testimonials-section-bp) {
      flex-direction: row;
      align-items: flex-start;
      gap: 2rem;
      padding: 5rem 0;
      -webkit-mask-image: radial-gradient(
        50% 46% at 50% 50%,
        #d9d9d9 84.46%,
        rgba(217, 217, 217, 0) 150%
      );
    }
  }

  &__column {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 45ch;
    margin: 0 auto;

    &:nth-child(even) {
      @media (max-width: #{$testimonials-section-bp - 1px}) {
        order: 1;
      }
    }

    @media (min-width: $testimonials-section-bp) {
      flex: 1 1 0;
      gap: 2rem;

      &::before {
        content: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346 216'%3E%3Crect x='.5' y='-39.5' width='345' height='255' rx='15.5' stroke='%23BCDCDC' stroke-dasharray='4 4'/%3E%3C/svg%3E");
        position: absolute;
        bottom: calc(100% + 2rem);
        left: 0;
        width: 100%;
      }

      &::after {
        content: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346 216'%3E%3Crect x='.5' y='-39.5' width='345' height='255' rx='15.5' stroke='%23BCDCDC' stroke-dasharray='4 4'/%3E%3C/svg%3E");
        position: absolute;
        top: calc(100% + 2rem);
        left: 0;
        width: 100%;
        transform: scaleY(-1);
      }

      &:nth-child(odd) {
        margin-top: 6.5rem;
      }
    }
  }

  &__banner {
    @media (max-width: #{$testimonials-section-bp - 1px}) {
      order: 1;
    }
  }

  &__decor {
    display: none;

    @media (min-width: $testimonials-section-bp) {
      display: block;
    }
  }

  &__title {
    max-width: 30ch;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 120%;

    @media (min-width: 768px) {
      margin: 0 auto;
      text-align: center;
    }

    @media (min-width: 1024px) {
      margin: 0 auto;
      font-size: 1.75rem;
    }
  }
}
.bg-dark-blue {
  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
}





</style>
