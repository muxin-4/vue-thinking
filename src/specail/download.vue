<template lang='html'>
  <Panel title="下载APP" :class="$style.panel">
    <section :class="$style.content">
      <p>立即下载</p>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/components/core/panel.vue'
export default {
	components: {
		Panel,
	},
	data() {
		return {
      customizeClass: 'ui-body'
    }
	},
	beforeCreate: function() {
		document.getElementsByTagName('body')[0].className = 'ui-body'
	},
	beforeDestroy: function() {
		document.body.removeAttribute('class', 'ui-body')
	},
}
</script>
<style lang='scss' module>
@import '../css/element';
html,
body {
	background-color: #fff;
}
.panel {
	position: relative;
	@include panel;
	margin: 0 !important;
	width: 100%;
	height: 100%;

	> h4 {
		display: none;
	}
	.content {
		@include flex;
		align-items: center;

		> p {
			@include btn($size: 32px, $color: #fff, $bgcolor: #F1443E, $padding: 5px, $radius: 5px);
			width: 552px;
			height: 100px;
			line-height: 100px;
			background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
			box-shadow: 0 6px 16px 0 rgba(255, 159, 135, 0.6);
			position: fixed;
			bottom: 0;
			margin-bottom: 5rem;
		}
	}

	@media screen and (max-width: 360px) {
		.content {
			> p {
				margin-bottom: 5.2rem;
			}
		}
	}

	@media screen and (max-width: 320px) {
		.content {
			> p {
				margin-bottom: 3rem;
			}
		}
	}
}
</style>
