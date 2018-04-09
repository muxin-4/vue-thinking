<template lang="html">
  <div>
    <Heador />
    <Slider />
    <FinancingChoice />
  </div>
</template>

<script>
import Heador from '@/components/public/header.vue'
import Slider from './hslider.vue'
import FinancingChoice from './financing-choice.vue'

export default {
  components: {
    Heador,
    Slider,
    FinancingChoice
  }
}
</script>

<style lang="scss" module>
</style>
