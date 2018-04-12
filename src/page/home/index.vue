<template lang="html">
  <div>
    <Heador />
    <Slider />
    <FinancingChoice />
    <Product />
  </div>
</template>

<script>
import Heador from '@/components/public/header.vue'
import Slider from './hslider.vue'
import FinancingChoice from './financing-choice.vue'
import Product from './product.vue'

export default {
  components: {
    Heador,
    Slider,
    FinancingChoice,
    Product
  }
}
</script>

<style lang="scss" module>
</style>
