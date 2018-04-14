<template lang='html'>
  <div :class="$style.header">
    <div :class="$style.wrap">
      <span :class="$style.left">
        <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
      </span>
      <img src="//m.jr.jd.com/spe/qyy/main/images/jr-logo.png" alt="">
      <btn :class="$style.btnDownload">APP下载</btn>
    </div>
  </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
	components: {
		btn,
	},
	data() {
		return {}
	},
}
</script>
<style lang='scss' module>
@import '../../css/element.scss';
.header {
	color: #666;
	height: 100px;
	line-height: 100px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	font-size: 32px;
	background-color: #fff;
	z-index: 999;

	.wrap {
    @include flex(row);
    justify-content: space-between;
    align-items: center;
    height: 100%;
		.left {
			font-size: 28px;
			height: 30px;
			line-height: 30px;
      color: #666;
      margin: 16px 0 0 24px;
		}
		img {
			width: 210px;
			margin: 9px auto;
			display: block;
		}
		.btnDownload {
			font-size: 24px;
			border-width: 0;
			height: 56px;
			line-height: 56px;
			min-width: 120px;
			padding: 0;
      border-radius: 4px;
      margin-right: 24px;
		}
	}
}
</style>
