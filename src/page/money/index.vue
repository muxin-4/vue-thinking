<template lang="html">
  <div>
    <Heador />
    <Slider />
    <Ada />
    <FinancingChoice />
    <Adb />
    <Finance />
    <Footor cname='mfooter'/>
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
import Finance from './finance'

export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Slider,
    Ada,
    Adb,
    FinancingChoice,
    Finance
  }
}
</script>

<style lang="scss">
.mfooter {
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
