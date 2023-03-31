<script setup lang="ts">
import NicImage from '~/assets/employees/nic.jpeg'
import EwaImage from '~/assets/employees/ewa.jpeg'
import ApoloniaImage from '~/assets/employees/apolonia.jpeg'
import ChrystianImage from '~/assets/employees/chrystian.jpeg'
import PaulinaImage from '~/assets/employees/paulina.jpeg'
import NataliaImage from '~/assets/employees/natalia.jpeg'
import MagdaImage from '~/assets/employees/magda.jpeg'
import BarryImage from '~/assets/employees/barry.png'
import MaciejImage from '~/assets/employees/maciej.jpeg'
import SarahImage from '~/assets/employees/sarah.png'
import ArekImage from '~/assets/employees/arek.jpeg'
import MartynaImage from '~/assets/employees/martyna.jpeg'
import KubaImage from '~/assets/employees/kuba.jpeg'
import MarcinImage from '~/assets/employees/marcin.jpeg'
import PatrycjaImage from '~/assets/employees/patrycja.jpeg'

const employees = [
  NicImage,
  EwaImage,
  ApoloniaImage,
  ChrystianImage,
  PaulinaImage,
  NataliaImage,
  MagdaImage,
  BarryImage,
  MaciejImage,
  SarahImage,
  ArekImage,
  MartynaImage,
  KubaImage,
  MarcinImage,
  PatrycjaImage,
]

const hero = {
  title: 'Designer, welcome home_',
  description:
    'Founded by a designer as a place where designers can thrive, we know the needs of creative minds and work tirelessly to make sure they proudly call Semiflat their home.',
  buttons: [
    {
      label: 'Get in touch',
      href: 'mailto:careers@semiflat.com',
    },
  ],
}
</script>

<template>
  <AppHero :title="hero.title" :description="hero.description" :buttons="hero.buttons">
    <div class="hidden md:block">
      <div class="md:mt-40 relative z-1">
        <div class="flex gap-7 w-fit mx-auto">
          <img
            v-for="person in employees.slice(0, 10)"
            :key="person"
            :src="person"
            class="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div class="flex gap-7 w-fit mx-auto mt-7">
          <img
            v-for="person in employees.slice(10, 15)"
            :key="person"
            :src="person"
            class="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </AppHero>
</template>
