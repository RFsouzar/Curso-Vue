<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<NomeCompleto v-model="usuario.nomeCompleto"/>
				<Rotulo nome="Email">
					<input type="text" label="email" v-model="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" label="senha" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span class="mr-4"><input type="radio" value=true v-model="escolha">Sim</span>
					<span class="mr-4"><input type="radio" value=false v-model="escolha">Não</span>
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome">
					<span>{{usuario.nomeCompleto.nome}}</span>
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<span>{{usuario.nomeCompleto.sobrenome}}</span>
				</Rotulo>
				<Rotulo nome="Email">
					<span>{{usuario.email}}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{usuario.senha}}</span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span>{{escolha}}</span>
				</Rotulo>
				<button @click.prevent="clearDados">Limpar</button>

			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/nomeCompleto'

export default {
	name: 'app',
	components: { NomeCompleto, Rotulo},
	data(){
		return{
			usuario:{
				nomeCompleto:{
					nome:'',
					sobrenome: ''
				},
				email: '',
				senha:''
			},
			escolha: true,
			enviado: false
		}
	},

	methods:{
		enviar(){
			this.enviado = true;
		},
		clearDados(){
			this.usuario = '';
			this.escolha = true;
			this.enviado = false;
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app .painel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
