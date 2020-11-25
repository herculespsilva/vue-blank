<template>
    <form @submit.prevent="login">
        <h2>Login</h2>
        <p>
            <label for="username">Usuário</label>
            <input type="text" id="username" required autofocus v-model="nome">
        </p>
        <p>
            <label for="inputPassword">Senha</label>
            <input type="password" id="inputPassword" required v-model="senha">
        </p>
        <button type="submit">Ok</button>
    </form>
</template>

<script>
    import axios from 'axios';
    import {mapMutations} from 'vuex'; // mutations & state the folder store

    export default {
        name: 'Home',
        data() {
            return {
                nome: '',
                senha: ''
            }
        },
        methods: {
            ...mapMutations ([
                'setUsuario',
                'setSenha'
            ]),
            login() {
                axios.get('trabalho', //rota a ser logada
                { params: { id: 1 }, headers: { Accept: 'application/json'}, auth: { username: this.nome, password: this.senha } })
                .then(res => {
                    console.log(res);
                    this.sucesso(); // se der tudo certo chama sucesso
                })
                .catch(error => {
                    console.log(error);
                    if (error.response.status === 401) {
                        console.log('Usuário ou senha inválido!'); // se der errado retorna um erro
                    }
                    else {
                        this.sucesso();
                    }
                });
            },
            sucesso() {
                this.setUsuario(this.nome);
                this.setSenha(this.senha);
                this.$router.push('/trabalho');
            }
        }
    }
</script>