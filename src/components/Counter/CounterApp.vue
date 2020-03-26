<template>
    <div :class="$style.counter">
        <h3>Clicked {{ counter }} times</h3>
        <button @click="increment">Increment</button>
    </div>
</template>
<script>
    export default {
        data(){
           return {
                counter: 0 
            } 
        },
        methods: {
            increment(){
                this.counter++
            }
        },
        created(){
            console.log('CSS modules', this.$style)
        }
    }
</script>

<style module>
    .counter {
        border: 1px solid red;
    }
</style>