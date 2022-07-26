<template>
  <div>{{ route.params.id }}</div>
</template>

<script>
export default {
  name: "User-Page",
  setup: () => {
    import { useRoute } from "vue-router";
    const route = useRoute();
    return { route };
  },
};
</script>

<style></style>
