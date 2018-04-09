<template lang="html">
  <section :class="[panelClass, canme]">
    <h4>- {{ title }} -</h4>
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: "",
    }
  },
  data () {
    return {
      panelClass: "panel",
    };
  }
}

</script>
<style lang='scss' module>
</style>
