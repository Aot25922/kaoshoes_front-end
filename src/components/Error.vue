<template>
    <h3 class="text-red text-5xl text-center font-bold">This Page Have  Ploblem From {{ errorType }}</h3>
</template>
<script>

export default {
    name:'Error',
    props:{errorType : null}
}
</script>
