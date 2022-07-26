<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
// import HelloWorld from "./components/HelloWorld1.vue";
import Test from "./components/Test.vue";
import { useCounterStore } from "./store/useStore.js";
import { useTodoStore } from "./store/todoStore";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
// import {,onMounted ,getCurrentInstance} from 'vue'
import { useRoute, useRouter } from "vue-router";

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
const list = reactive([{ title: "猎头" }]);
// 此订阅将在组件卸载后保留
// someStore.$onAction(callback, true)
// 获取当前路由
const route = useRoute();
// 获取路由实例
const router = useRouter();
console.log(route, route.params, "route", router);
// onMounted(()=>{
//   const instance = getCurrentInstance()
//   console.log(instance,instance.$router,'router')
// })
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <div>{{ counter.count }}+++</div>
  <div>count+++{{ count }}</div>
  <div v-for="item in todo.list" :key="item.value">{{ item.name }}</div>
  <el-button type="info">Info</el-button>
  <Test />
  <el-table :data="list">
    <el-table-column label="设置头部" prop="title">
      <template #header="header">
        <span>{{ header.column.label }}</span>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Top Center prompts info"
          placement="top"
        >
          <el-icon><WarningFilled /></el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <router-view></router-view>
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
