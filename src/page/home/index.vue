<template lang="html">
  <div>
    <Heador />
    <Slider />
    <FinancingChoice />
    <Product />
    <Life />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
import Heador from '@/components/public/header.vue'
import Footor from '@/components/public/footer.vue'
import Navbar from '@/components/public/navbar.vue'
import Slider from './hslider.vue'
import FinancingChoice from './financing-choice.vue'
import Product from './product.vue'
import Life from './life.vue'

export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Slider,
    FinancingChoice,
    Product,
    Life
  }
}
</script>

<style lang="scss" module>
</style>
