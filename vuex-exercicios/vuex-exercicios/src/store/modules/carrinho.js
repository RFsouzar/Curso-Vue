export default{
    namespaced: true, //usando namespaced eu preciso definir o nome do módulo quando faço um mapActions,mapMutations...
    //State é o estado central da aplicação onde ficam os dados que serão compartilhados por toda a aplicação
    state:{
        produtos: [],
        
    },
    //Getters serve para alterar algum dado antes de devolver o resultado, devolve um dado tratado
    getters:{
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    //Mutations são responsaveis somente por alterar o state
    mutations:{
        adicionarProduto(state, payload){
            state.produtos.push(payload)

        }
    },
    //Acttions fica responsavel por conter as regras de negócios e chamar a mutations para realizar a alteração no state.
    actions:{
        adicionarProduto(context, payload){
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000);
        }
        
        //posso jogar algumas funções para dentro do Root assim será acessivel mapeando de forma Raiz
        // adicionarProduto:{
        //     root: true,
        //     handler({ commit }, payload){
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload);
        //         }, 1000);
        //     }
        // }

    }
}