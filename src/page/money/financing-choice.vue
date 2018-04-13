<template lang='html'>
  <Panel title="精选推荐" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.title">
        <p :class="$style.title">
          <span>{{ item.title }}</span><label>{{ item.sub }}</label>
        </p>
        <p :class="$style.value">{{ item.rate }}</p>
        <p :class="$style.desc">{{ item.text }}</p>
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
		return {
      items: [{
        title: '定期理财',
        sub: '理财首选',
        rate: '5.60%',
        text: '历史年化回报率'
      },
      {
        title: '年年盈',
        sub: '理财推荐',
        rate: '5.80%',
        text: '综合年化收益率'
      },
      {
        title: '基智账户',
        sub: '组合投资',
        rate: '8%-10%',
        text: '止盈年化收益率'
      },
      {
        title: '小白基金',
        sub: '超短期',
        rate: '5.00%',
        text: '7日年化收益率'
      }],
    }
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

    &:after {
      content: "";
      width: 100%;
      height: 0;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      transform: scaleY(.5);
      transform-origin: 0 0;
      position: relative;
      top: -208px;
    }
		.item {
			width: 50%;
			padding-left: 32px;
			height: 218px;
			box-sizing: border-box;
			position: relative;

      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 1px;
        display: block;
        background: #eee;
        -webkit-transform: scaleX(.5);
        -ms-transform: scaleX(.5);
        transform: scaleX(.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        height: 136px;
        top: 40px;
      }
      &:nth-child(2n) {
        &:after {
          display: none;
        }
      }
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
