<template>
    <li>
        {{curso}}
    </li>
</template>

<script>
    export default {
        name: 'CursoItem',
        props: {
            curso: String
        }

    }
</script>