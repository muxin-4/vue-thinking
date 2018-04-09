<template lang='html'>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <p :class="$style.title">
          <span>定期理财</span><label>90天可质押</label>
        </p>
        <p :class="$style.value">5.50%</p>
        <p :class="$style.desc">历史年化结算利率</p>
      </div>
      <div :class="$style.item">
        <p :class="$style.title">
          <span>定期理财</span><label>90天可质押</label>
        </p>
        <p :class="$style.value">5.50%</p>
        <p :class="$style.desc">历史年化结算利率</p>
      </div>
      <div :class="$style.item">
        <p :class="$style.title">
          <span>定期理财</span><label>90天可质押</label>
        </p>
        <p :class="$style.value">5.50%</p>
        <p :class="$style.desc">历史年化结算利率</p>
      </div>
      <div :class="$style.item">
        <p :class="$style.title">
          <span>定期理财</span><label>90天可质押</label>
        </p>
        <p :class="$style.value">5.50%</p>
        <p :class="$style.desc">历史年化结算利率</p>
      </div>
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
		return {}
	},
}
</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
	@include panel;
	h4 {
		max-width: 40%;
		font-size: 32px;
		font-weight: 700;
		height: 112px;
		width: 100%;
		max-width: none;
		text-align: center;
		box-sizing: border-box;
		line-height: 112px;
		padding: 0 32px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.content {
		@include list(row);
		.item {
			width: 50%;
			padding-left: 32px;
			height: 218px;
			box-sizing: border-box;
			position: relative;

			.title {
				font-family: PingFangSC-Medium;
				color: #333;
				height: 42px;
				line-height: 42px;
				box-sizing: border-box;
				margin: 34px 0 16px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				span {
					color: #333;
					font-weight: 700;
					font-size: 30px;
					display: block;
					float: left;
					height: 42px;
					line-height: 42px;
				}
				label {
					height: 34px;
					line-height: 34px;
					font-size: 22px;
					padding: 0 8px;
					color: #ff5155;
					float: left;
					position: relative;
					top: 3px;
					left: 8px;
					text-align: center;
				}
				label:before {
					min-width: 104px;
					line-height: 34px;
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 200%;
					height: 200%;
					display: block;
					-webkit-transform: scale(0.5, 0.5);
					-ms-transform: scale(0.5, 0.5);
					transform: scale(0.5, 0.5);
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					box-sizing: border-box;
					border: 1px solid #ff5155;
				}
			}
			.value {
				font-weight: 700;
				font-size: 44px;
				height: 58px;
				line-height: 58px;
				color: #ff5155;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.desc {
				font-size: 24px;
				height: 34px;
				line-height: 34px;
				color: #999;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
      }
    }
	}
}
</style>
