<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpfDoAluno | cpf | inverter}}</p>
		<!-- Também é possivel utilizar os filtros no contexto de value do Input -->
		<!-- mas não dentro do v-model, pois ele não suporta -->
		<input type="text" :value="cpfDoAluno | cpf ">
		
	</div>
</template>

<script>
export default {
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data(){
		return{
			cpfDoAluno: '00004517880'
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
