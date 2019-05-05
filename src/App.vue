<template>
	<div id="app">
		<Topbar/>
		<router-view/>
		<ul class="errors">
			<li 
			v-for="error in checkErrors"
			:key="error.id">
				
				{{ error }}
			</li>
		</ul>
	</div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'app',
	components: {
		Topbar
	},
	computed: {
		...mapGetters(["checkErrors"])
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
