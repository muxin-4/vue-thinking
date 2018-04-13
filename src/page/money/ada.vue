<template lang='html'>
  <Panel title="信用卡还款广告" :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from '@/components/core/panel.vue';
export default {
  components: {
    Panel
  },
  data () {
    return {
    }
  },
}
</script>
<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  @include panel;
  >h4 {
    display: none;
  }
  .content {
    img {
      width: 100%;
      height: 230px;
      display: block;
    }
  }
}
</style>
