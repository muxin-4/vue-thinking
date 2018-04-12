<template lang="html">
  <div>
    <Heador />
    <Slider />
    <FinancingChoice />
    <Product />
    <Life />
    <Footor />
  </div>
</template>

<script>
import Heador from '@/components/public/header.vue'
import Footor from '@/components/public/footer.vue'
import Slider from './hslider.vue'
import FinancingChoice from './financing-choice.vue'
import Product from './product.vue'
import Life from './life.vue'

export default {
  components: {
    Heador,
    Footor,
    Slider,
    FinancingChoice,
    Product,
    Life
  }
}
</script>

<style lang="scss" module>
</style>
