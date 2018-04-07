<template lang='html'>
  <article>
    <Slider :items="items" :cname="$style.slider" />
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.src">
        <router-link :to="{name: item.href}">
          <img :src="item.img" alt="item.title"></img>
          <h4>{{ item.title }}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import Slider from '@/components/core/slider.vue'
export default {
	data() {
		return {
			items: [
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t17074/14/1226150775/30323/f00c58d0/5ac21ea8N2e3ac907.jpg?width=750&height=320',
				},
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t17986/241/1281369763/17389/381efb2f/5ac21f35N3a23cb1a.jpg?width=750&height=320',
				},
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t17539/38/1283565569/46142/65403e33/5ac21f91Nd4cab9f5.png?width=750&height=320',
				},
				{
					href: 'home',
					src:
						'//img12.360buyimg.com/jrpmobile/jfs/t17284/26/1226888004/28490/9ba4bf48/5ac21fccN1326ee7c.jpg?width=750&height=320',
				},
			],
			enters: [
				{
					href: 'home',
					img:
						'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
					title: '优惠券',
				},
				{
					href: 'home',
					img:
						'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
					title: '领红包',
				},
				{
					href: 'home',
					img:
						'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
					title: '抢钢棚',
				},
				{
					href: 'home',
					img:
						'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
					title: '白条提额',
				},
			],
		}
	},
	components: {
    Slider
  }
}
</script>
<style lang='scss' module>
@import '../../css/element.scss';
.slider {
	margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
	@include list(row);
	background: #fff;
	padding-top: 40px;
	padding-bottom: 20px;
	justify-content: space-around;
	a {
		text-decoration: none;
	}
	.item {
		text-align: center;
		img {
			display: inline-block;
			width: 90px;
			height: 90px;
		}
		h4 {
			font-size: 26px;
			margin-top: 12px;
			color: #666;
		}
	}
}
</style>
