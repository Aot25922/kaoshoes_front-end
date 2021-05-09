<template>
    <h3 class="text-5xl text-center font-bold text-red-400">This Page Have  Ploblem From {{ errorType }}</h3>
</template>
<script>

export default {
    name:'Error',
    props:{errorType : null}
}
</script>
