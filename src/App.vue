<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>
html,
body {
	-webkit-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-webkit-user-select: none;
	-webkit-overflow-scrolling: touch;
	user-select: none;
	width: 100%;
	height: 100%;
	background-color: #efeff4;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
	font-weight: 400;
	color: #333;
}

#app {
	font-family: PingFangSC-Regular, Arial, 'Helvetica Neue', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.ui-body {
	background: url('//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?')
		center center no-repeat;
	width: 100%;
	height: 100%;
	background-size: 100% auto;
	margin-top: -200px;
	display: block;
}
</style>
