import { defineStore } from 'pinia'

export  const useTodoStore  = defineStore("todo", {
    state: () => {
        return {
            list:[]
        }
    },
    actions: {
        add() {
           this.list.push({name:'数据',value:'852963'})
        },
    }
})