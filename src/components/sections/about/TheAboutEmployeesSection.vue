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
  {
    img: NicImage,
    name: 'Nic',
    position: 'Founder',
  },
  {
    img: EwaImage,
    name: 'Ewa',
    position: 'Scrum Master',
  },
  {
    img: ApoloniaImage,
    name: 'Apolonia',
    position: 'Senior Product Designer',
  },
  {
    img: ChrystianImage,
    name: 'Chrystian',
    position: 'Senior UX Designer',
  },
  {
    img: PaulinaImage,
    name: 'Paulina',
    position: 'Senior Product Designer',
  },
  {
    img: NataliaImage,
    name: 'Natalia',
    position: 'Senior UI Designer',
  },
  {
    img: MagdaImage,
    name: 'Magda',
    position: 'Senior Product Designer',
  },
  {
    img: BarryImage,
    name: 'Barry',
    position: 'Product Designer',
  },
  {
    img: MaciejImage,
    name: 'Maciej',
    position: 'Product Designer',
  },
  {
    img: SarahImage,
    name: 'Sarah',
    position: 'Account Manager',
  },
  {
    img: ArekImage,
    name: 'Arek',
    position: 'Product Designer',
  },
  {
    img: MartynaImage,
    name: 'Martyna',
    position: 'Senior UI Designer',
  },
  {
    img: KubaImage,
    name: 'Kuba',
    position: 'Senior Product Designer',
  },
  {
    img: MarcinImage,
    name: 'Marcin',
    position: 'Product Designer',
  },
  {
    img: PatrycjaImage,
    name: 'Patrycja',
    position: 'Product Designer',
  },
]
</script>

<template>
  <div class="page-content mt-[4rem] md:mt-[10rem]">
    <h2
      class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"
    >
      Meet the team working on your product_
    </h2>
    <div
      class="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-y-[3.5rem] gap-x-[3.5rem]"
    >
      <div v-for="(employee, i) in employees" :key="i" class="mx-auto">
        <img
          v-if="employee.img"
          :src="employee.img"
          class="w-[9.437rem] md:w-[14.625rem] h-[9.437rem] md:h-[14.625rem] rounded-4 object-cover bg-[#C4C4C4]"
        />
        <div
          v-else
          class="w-[9.437rem] md:w-[14.625rem] h-[9.437rem] md:h-[14.625rem] rounded-4 border border-[#BCDCDC]"
        />
        <p class="leading-[150%] text-blue-300 font-semibold mt-4">{{ employee.name }}</p>
        <p class="text-blue-200 leading-[150%] mt-1">{{ employee.position }}</p>
      </div>
    </div>
  </div>
</template>
