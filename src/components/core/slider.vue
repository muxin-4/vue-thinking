<template lang="html">
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    name: 'slider',
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false,
        }
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      // cname: ''
    };
  }
}

</script>
<style lang='scss' scoped>
</style>
