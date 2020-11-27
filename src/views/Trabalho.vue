<template>
    <div>
        <form @submit.prevent="cadastrar"> <!-- quando submeter chama o metodo cadastrar -->
            <h2>Trabalho</h2>
            <p>
                <label for="titulo">Título</label>
                <input type="text" id="titulo" 
                    required autofocus 
                    v-model="titulo">
            </p>
            <p>
                <label for="localArquivo">Local Arquivo</label>
                <input type="text" id="localArquivo" 
                    required 
                    v-model="localArquivo">
            </p>
            <button type="submit">Salvar</button>
        </form>
        <br>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Local do Arquivo</th>
                    <th>Data/hora</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="trab in trabalhos" :key="trab.id">
                    <td>{{ trab.id }}</td>
                    <td>{{ trab.titulo }}</td>
                    <td>{{ trab.localArquivo }}</td>
                    <td>{{ trab.dataHoraEntrega }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapState} from 'vuex'; // para pegar usuario e senha folder store

    export default {
        name: 'anotacoes',
        data() {
            return {
                titulo: '', // responsavel pelos v-model no template la em cima
                localArquivo: '',
                trabalhos: []
            }
        },
        computed: {
            ...mapState([ // state da classe About.vue | login
                'usuario',
                'senha'
            ])
        },
        methods: {
            cadastrar() {
                axios.post('trabalho', // rota responsavel
                    {                                       // essa rota espera um json, basicamente passamos como objeto parao o axios e ele monta um json como retorno
                        titulo: this.titulo,                // oque será mandado no corpo da requisição
                        dataHoraEntrega: new Date(),           
                        localArquivo: this.localArquivo        //conteudo dos dois input no <content>
                    },
                    {
                        auth: {                             // colocar as propriedades
                            username: this.username,        // pega usuario e senha do mapState
                            passwor: this.senha
                        }
                    }
                    )
                .then(res => {
                    console.log(res);                   // se tudo der certo, limpa os campos
                    this.titulo = '';
                    this.localArquivo = '';                    // a rota retorna como uma reposta um json com o registro criado | no campo (res.data)
                    this.trabalhos.push(res.data);      // e insere na lista de tabalhos
                })                                      //inserimos a res.data de forma direta, basicamente se pega esse objeto em json e faz um parse o tornando um objetos java script
                .catch(error => console.log(error))
            }
        }
    }           // paramos 17:11
</script> 