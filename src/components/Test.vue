<template>
  <div @click="add">Add{{ count }}</div>
  <div @click="reset">Reset</div>
</template>

<script>
import { computed,toRefs } from "vue";
import { mapActions } from "pinia";
import { useTodoStore } from "./../store/todoStore";
import { useCounterStore } from "./../store/useStore";

export default {
  name: "Test-Page",
  setup: () => {
    const todo = useTodoStore();
    const counter = useCounterStore();
    return { todo, count: computed(() => counter.count) };
  },
  data: () => {
    return {
      data: { a: "121" },
    };
  },

  mounted() {
    // const newData={...toRefs(this.data)};
    const newData = { ...this.data };
    newData.b = "0987";
    console.log(this.data, newData);
  },
  methods: {
    ...mapActions(useTodoStore, ["add"]),
    add() {
      console.log(this.add);
      this.todo.add();
    },
    reset() {
      this.todo.$reset();
    },
  },
};
</script>

<style></style>
