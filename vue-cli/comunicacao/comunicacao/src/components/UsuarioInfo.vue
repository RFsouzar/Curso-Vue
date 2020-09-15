<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <strong>nome: {{ inverterNome() }}</strong>
        <strong>Idade do usuário: {{idade}}</strong>
        <button @click="reiniciarNome">Reinicializar nome</button>
        <button @click="reiniciarFn">Reinicar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'
export default {
    props:{
        nome:{
            type: String,
            required: true,
            default:'Teste'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome(){
            this.nome = 'Pedro';
            //comunicação por evento com o componente pai
            //O componente pai recebe o evento e faz alguma ação
            this.$emit('nomeMudou', this.nome);
        }
    },
    created(){
        //estamos ouvindo um event bus, um evento que utiliza uma outra instancia Vue para fazer a comunicação
        barramento.quandoIdadeMudar(idade =>{
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
