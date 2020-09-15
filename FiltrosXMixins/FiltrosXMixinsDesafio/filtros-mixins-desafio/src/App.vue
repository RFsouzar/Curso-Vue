/* eslint-disable no-console */
<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
				{{ message | espaceToComma }}
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
				<hr>
				{{ message | tamanho }}
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
				<hr>
				{{ espacoPorVirgula }}
				<br>
				{{ tamanhoPalavra }}

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import Mixins from './mixin'
export default {
	mixins: [Mixins],
	filters:{
		espaceToComma(valor){
			return valor.replace(/\s/g, ","); //IMPLEMENTAÇÃO DO PROFESSOR
			/* const arr = valor.split('');
			for(var i = 0; i < arr.length; i++){  ISSO É COMO EU FIZ, PODERIA SER FEITO DE UMA FORMA MELHOR E EM APENAS UMA LINHA!!
				if(arr[i] == " "){
					arr[i] = ","
				}
			}
			return arr.join('') */
		}
	},

	data(){
		return{
			message: 'Minha mãe é uma peça'
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
