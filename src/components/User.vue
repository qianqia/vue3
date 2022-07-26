<template>
    <div>{{route.params.id}}</div>
</template>

<script setup>
// import {toRefs} from "vue";
import {useRoute} from 'vue-router';
const route=useRoute();
console.log(route,'route')
</script>

<style>

</style>