<template lang="html">
  <section :class="[panelClass, canme]">
    <h4>-{{ title }}-</h4>
    <div>{{ content }}</div>
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
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
@import '../../css/element.scss';
.panel {
  @include panel;
}
</style>
