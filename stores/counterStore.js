import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'


export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0)
    
    onMounted(() => {
        const storedCounter = localStorage.getItem('counter')
        if (storedCounter !== null) {
          counter.value = Number(storedCounter)
        }
      })

  watch(counter, (newVal) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('counter', newVal)
    }
  })

    function increment() {
        counter.value++
    }

    function reset() {
        counter.value = 0
    }

    return { counter, reset, increment }
})