import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('tamanho', function(valor){
	return valor.split(' ').map( x => `${x} (${x.length})`).join(' ');
	
})

new Vue({
	render: h => h(App),
}).$mount('#app')
