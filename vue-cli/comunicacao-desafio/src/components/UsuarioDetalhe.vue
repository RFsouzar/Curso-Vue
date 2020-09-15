<template>
    <div class="usuario-detalhe">
        <h2 v-if="!selectedUser.id">Usuário não selecionado!</h2>
        <div v-else >
            <h2>ID: {{ selectedUser.id }}</h2>
            <h2>Nome: {{ selectedUser.nome }}</h2>
            <h2>Idade: {{ selectedUser.idade }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['selectedUser'],
    data() {
        return {
            usuario: null
        }
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
