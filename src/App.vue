<template>
   <div>
       <CounterInfo />
       <CounterApp />
    </div>
</template>

<script>
import CounterApp from './components/Counter/CounterApp.vue'
import CounterInfo from './components/Counter/CounterInfo.vue'

export default {
    components: {
        CounterApp,
        CounterInfo
    }    
}
</script>