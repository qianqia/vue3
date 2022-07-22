import { defineStore } from 'pinia'

export  const useCounterStore  = defineStore("user", {
    state: () => {
        //推荐箭头函数
        return {
            count:0
        }
    },
    actions: {
        increment() {
            this.count++
          },
    }
})