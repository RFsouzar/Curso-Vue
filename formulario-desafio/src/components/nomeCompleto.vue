<template>
    <div>
        <Rotulo nome="Nome">
            <input type="text" label="Nome" @input="alterarNome" v-model="value.nome"/>
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" label="Sobrenome" @input="alterarSobrenome" v-model="value.sobrenome"/>
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo'
export default {
    props:{
        value:{
            type: Object,
            required: true
        }
    },
    components:{
        Rotulo
    },
    methods:{
        alterarNome(event){
            //Passando exatamente o mesmo objeto que recebemos do v-model
            this.$emit('input', { nome: event.target.value, sobrenome: this.value.sobrenome})
        },
        alterarSobrenome(event){
            this.$emit('input', { nome: this.value.nome, sobrenome: event.target.value})
        }
    }
    
}
</script>
