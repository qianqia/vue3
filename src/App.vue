<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import { useCounterStore } from "./store/useStore.js";
import { useTodoStore } from "./store/todoStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const counter = useCounterStore();
const todo = useTodoStore();
const { count } = storeToRefs(counter);
console.log(counter, "counter", count);
counter.count++;
// 带自动补全 ✨
counter.$patch({ count: counter.count + 1 });
// 或使用 action 代替
// counter.increment()
todo.add();
// 如果要在卸载组件后保留它们，请将 { detached: true } 作为第二个参数传递给 detach 当前组件的 state subscription
todo.$subscribe(
  (mutation, state) => {
    console.log(mutation, state);
  },
  { detached: true }
);
// 此订阅将在组件卸载后保留
// someStore.$onAction(callback, true)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <div>{{ counter.count }}+++</div>
  <div>count+++{{ count }}</div>
  <div v-for="item in todo.list" :key="item.value">{{ item.name }}</div>
  <el-button type="info">Info</el-button>
  <Test />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
