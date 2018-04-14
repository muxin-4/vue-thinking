<template lang='html'>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
        <div :class="$style.info">
          <span :class="$style.name">月度理财</span>
          <span :class="$style.desc">预期年化收益率4.50%</span>
        </div>
        <div :class="$style.benifit">去赚钱</div>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
        <div :class="$style.info">
          <span :class="$style.name">季度理财</span>
          <span :class="$style.desc">历史年化回报率5.50%</span>
        </div>
        <div :class="$style.benifit">去赚钱</div>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
        <div :class="$style.info">
          <span :class="$style.name">一年理财</span>
          <span :class="$style.desc">历史年化回报率5.80%</span>
        </div>
        <div :class="$style.benifit">去赚钱</div>
      </div>
    </section>
  </Panel>
</template>

<script>
const Panel = () => import('@/components/core/panel.vue')
export default {
	components: {
		Panel,
	},
	data() {
		return {}
	},
}
</script>
<style lang='scss' module>
@import '../../css/element';
.panel {
  @include panel;
  margin: 20px 0  0;
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
      -webkit-transform: scaleY(.5);
      -ms-transform: scaleY(.5);
      transform: scaleY(.5);
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
        -webkit-transform: scaleY(.5);
        -ms-transform: scaleY(.5);
        transform: scaleY(.5);
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
				width: 80px;
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
					color: #ff3232;
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
