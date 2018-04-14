<template lang='html'>
  <Panel title="更多服务" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.row">
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
          <span>小白卡</span>
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135" alt="">
          <span>白条商城</span>
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135" alt="">
          <span>消费分期</span>
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120" alt="">
          <span>借钱</span>
        </div>
      </div>
      <div :class="$style.row">
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135" alt="">
          <span>白条提额</span>
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135" alt="">
          <span>白条闪付</span>
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135" alt="">
          <span>小白会玩</span>
        </div>
        <div :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135" alt="">
          <span>钢镚</span>
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
  padding-bottom: 40px;

  .content {
    .row {
      @include flex(row);
      justify-content: space-between;
      width: 100%;
      min-height: 67.5px;
      overflow: hidden;
      background-color: #fff;
      padding-bottom: 40px;
      .item {
        width: 25%;
        height: inherit;
        overflow: hidden;
        display: block;
        text-align: center;
        flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        box-flex: 1;
        -ms-box-flex: 1;
        -webkit-box-flex: 1;

        img {
          width: 90px;
          height: 90px;
          margin: 0 auto;
          min-height: auto;
          background: url(//m.jr.jd.com/spe/qyy/main/images/bg_seize.png) center center no-repeat #FAFAFA;
          background-size: 68px 68px;
        }
        span {
          font-size: 26px;
          text-align: center;
          display: block;
          color: #666;
          margin-top: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

    }

  }
}
</style>
