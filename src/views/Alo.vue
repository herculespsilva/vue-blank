<template>
    <div class="ola">
        <h1>Olá {{nome}}!</h1>
    </div>
</template>

<script>
    export default {
        name: 'ola',
        props: {
            nome: {
                type: String,
                default: 'Estranho'
            }
        }
    }
</script>