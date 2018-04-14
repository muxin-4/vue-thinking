<template lang='html'>
  <Panel title="精品活动" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.doubleBanner">
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt="">
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264" alt="">
        </div>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/components/core/panel.vue'
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
@import '../../css/element';
.panel {
	@include panel;
  .content {
    .doubleBanner {
      width: 100%;
      @include flex(row);
      .item {
        height: inherit;
        overflow: hidden;
        display: block;
        text-align: center;
        flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
