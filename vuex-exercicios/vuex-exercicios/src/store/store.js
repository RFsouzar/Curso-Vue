import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    getters,
    modules:{ carrinho, parametros}
    // //State é o estado central da aplicação onde ficam os dados que serão compartilhados por toda a aplicação
    // state:{
    //     produtos: [],
    //     quantidade: 0,
    //     preco: 0
        
    // },
    // //Getters serve para alterar algum dado antes de devolver o resultado, devolve um dado tratado
    // getters:{
    //     valorTotal(state){
    //         return state.produtos.map(p => p.quantidade * p.preco)
    //             .reduce((total, atual) => total + atual, 0)
    //     }
    // },
    // //Mutations são responsaveis somente por alterar o state
    // mutations:{
    //     adicionarProduto(state, payload){
    //         state.produtos.push(payload)

    //     },
    //     setQuantidade(state, payload){
    //         state.quantidade = payload
    //     },
    //     setPreco(state, payload){
    //         state.preco = payload
    //     }
    // },
    // //Acttions fica responsavel por conter as regras de negócios e chamar a mutations para realizar a alteração no state.
    // actions:{
    //     adicionarProduto(context, payload){
    //         setTimeout(() => {
    //             context.commit('adicionarProduto', payload)
    //         }, 1000);
    //     }

    // }
})