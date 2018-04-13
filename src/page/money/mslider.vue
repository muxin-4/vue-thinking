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
		Slider,
	},
	data() {
		return {
			items: [
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400',
				},
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400',
				},
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400',
				},
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
