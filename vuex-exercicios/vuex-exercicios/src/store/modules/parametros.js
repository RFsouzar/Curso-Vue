export default{
    //State é o estado central da aplicação onde ficam os dados que serão compartilhados por toda a aplicação
    state:{
        quantidade: 0,
        preco: 0
        
    },
    //Mutations são responsaveis somente por alterar o state
    mutations:{
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    },
}