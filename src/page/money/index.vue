<template lang="html">
  <div>
    <Heador />
    <Slider />
    <Ada />
    <FinancingChoice />
    <Adb />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
import Heador from '@/components/public/header.vue'
import Footor from '@/components/public/footer.vue'
import Slider from './mslider.vue'
import FinancingChoice from './financing-choice.vue'
import Ada from './ada.vue'
import Adb from './adb.vue'
import Navbar from '@/components/public/navbar.vue'

export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Slider,
    Ada,
    Adb,
    FinancingChoice
  }
}
</script>

<style lang="scss" module>
</style>
