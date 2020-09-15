<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome">alterar nome</button>
        <p> Nome é <strong>{{nome}}</strong></p>
        <p>Idade do Usuário <strong>{{idade}}</strong></p>
        <hr>
        <!-- O componente pai recebe como ação o nome do event passado, $event serve para pegar o corpo do que foi enviado -->
        <div class="componentes">
            <app-usuario-info 
            :nome='nome' 
            :idade="idade"
            @nomeMudou="nome = $event"
            :reiniciarFn="reiniciarNome"/>
            <app-usuario-editar 
            :idade="idade" />  
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome:'Poder',
            idade: 21
        }
    },
    methods:{
        alterarNome(){
            this.nome ='Carol'
        },
        reiniciarNome(){
            this.nome = 'Pedro';
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
