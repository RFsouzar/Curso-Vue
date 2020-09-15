<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{idade}}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'
export default {
    props:['idade'],

    methods:{
        alterarIdade(){
            //comunicação por evento com o componente pai
            //O componente pai recebe o evento e faz alguma ação
            this.idade= 33
            //this.$emit('idadeMudou', 65);
            barramento.alterarIdade(this.idade);
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
