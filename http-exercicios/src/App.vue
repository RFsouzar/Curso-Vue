<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
			{{mensagem.texto}}
		</b-alert>
		<b-card>
			<b-form-group>
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Insira seu Nome"
					>
				</b-form-input>
			</b-form-group>
			<b-form-group>
				<b-form-input type="text" size="lg"
					v-model="usuario.email"
					placeholder="Insira seu Email"
					>
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button  @click="salvar" variant="primary">Enviar</b-button>
			<b-button  class="ml-2" @click="obterUsuarios" variant="success">Buscar</b-button>
			<hr>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
					<strong>Nome: </strong> {{usuario.nome}} <br>
					<strong>Email: </strong> {{usuario.email}} <br>
					<strong>ID: </strong> {{id}}<br>
					<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
					<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
				</b-list-group-item>
			</b-list-group>

		</b-card>
	</div>
</template>

<script>
export default {

	data(){
		return{
			usuarios:[],
			usuario:{
				nome: '',
				email: ''
			},
			mensagens: []
		}
	},

	methods:{
		limpar(){
			this.usuario.nome = '',
			this.usuario.email = '',
			this.id = null,
			this.mensagens = []
		},

		carregar(id){
			this.id= id;
			this.usuario = {...this.usuarios[id]}
		},

		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(() => {
				this.limpar();
				this.mensagens.push({
					texto: 'Usuário excluido com sucesso!',
					tipo: 'success' 
				})
				
			})
			.catch(err => {
				this.mensagens.push({
					texto: 'Erro ao excluir usuário',
					tipo: 'danger' 
				})
			})
		},

		salvar(){
			const metodo = this.id ? 'patch' : 'post';
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then(() => {
				this.limpar();
				this.mensagens.push({
					texto: 'operação realizada com sucesso!',
					tipo : 'success'
				})
			})
		},

		obterUsuarios(){
			this.$http('usuarios.json').then(res => {
				this.usuarios = res.data;
			})

			this.$http.defaults.headers.common['Authorization'] ='abc'
		}
	}

	// created(){
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Maria',
	// 		email: 'maria@gmail.com'
	// 	}).then(res => console.log(res));
	// }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
