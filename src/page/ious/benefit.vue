<template lang='html'>
  <Panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
        <div :class="$style.info">
          <span :class="$style.name">开通白条</span>
          <span :class="$style.desc">送百元元礼包</span>
        </div>
        <div :class="$style.benifit">立即查看</div>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
        <div :class="$style.info">
          <span :class="$style.name">白条提额</span>
          <span :class="$style.desc">金融app专享提额礼包</span>
        </div>
        <div :class="$style.benifit">去提额</div>
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
@import '../../css/element.scss';
.panel {
	@include panel;
	margin: 20px 0 0;
	> h4 {
		position: relative;
		&:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			display: block;
			background: #eee;
			-webkit-transform: scaleY(0.5);
			-ms-transform: scaleY(0.5);
			transform: scaleY(0.5);
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
		}
	}
	.content {
		@include flex;
		.item {
			height: 140px;
			position: relative;
			overflow: hidden;

			&:before {
				content: '';
				position: absolute;
				height: 1px;
				display: block;
				left: 0;
				width: 100%;
				background: #eee;
				-webkit-transform: scaleY(0.5);
				-ms-transform: scaleY(0.5);
				transform: scaleY(0.5);
				-webkit-transform-origin: left bottom;
				transform-origin: left bottom;
				margin-left: 68px;
				bottom: 1px;
			}
			&:last-child:before {
				display: none;
			}

			> img {
				float: left;
				width: 88px;
				height: 88px;
				margin: 24px 32px 0;
			}
			> div {
				height: 88px;
				line-height: 88px;
				margin: 26px 0 0;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}

			.info {
				float: left;
				font-size: 32px;
				color: #333;
				display: block;
				height: 88px;
				line-height: 88px;
				margin: 26px 0 0;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				width: 334px;

				.name {
					font-size: 32px;
					color: #333;
					display: block;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					line-height: 1.8;
				}

				.desc {
					font-size: 24px;
					color: #999;
					display: block;
					line-height: 1.1;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}

			.benifit {
				float: right;
				display: inline-block;
				font-size: 28px;
				max-width: 39%;
				color: #ff801a;
				padding: 0 36px 0 20px;
				margin-right: 32px;
				background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
				background-size: 18px 30px;
				text-align: left;
				float: right;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
}
</style>
