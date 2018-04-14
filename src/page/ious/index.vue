<template lang="html">
  <div>
    <Heador />
    <Slider />
    <Benefit />
    <Activity />
    <Serve />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
import Heador from '@/components/public/header.vue'
import Footor from '@/components/public/footer.vue'
import Navbar from '@/components/public/navbar.vue'
import Slider from './islider.vue'
import Benefit from './benefit.vue'
import Activity from './activity'
import Serve from './serve'

export default {
  components: {
    Benefit,
    Heador,
    Footor,
    Navbar,
    Slider,
    Activity,
    Serve
  }
}
</script>

<style lang="scss" module>
</style>
