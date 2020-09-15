//Usando uma outra instancia Vue conseguimos fazer a comunicação de componentes irmãos 
//sem terque passar pelo pai, serve para comunicação de irmãos distantes  (Chamado Event BUS)
import Vue from 'vue';
export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)

        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)


        }


    }
});