<template>
    <div>{{route.params.id}}</div>
</template>

<script setup>
import {toRefs,ToRef} from "vue";
import {useRoute} from 'vue-router';
const route=useRoute();
</script>

<style>

</style>