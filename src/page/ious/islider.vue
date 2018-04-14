<template lang='html'>
  <Panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <Slider :items="items" :cname="$style.slider"></Slider>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/components/core/panel.vue'
import Slider from '@/components/core/slider.vue'
export default {
  components: {
    Panel,
    Slider
  },
  data () {
    return {
      	items: [
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320',
				}
			],
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
		.slider {
			margin-top: 120px;
		}
	}
}
</style>
