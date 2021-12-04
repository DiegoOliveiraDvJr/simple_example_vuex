<template>

  <div>
    <Formulario/>
    <Carrinho/> 
  </div>
  
</template>

<script>
import Formulario from './components/Formulario.vue'
import Carrinho from './components/Carrinho.vue'

export default {
  name: 'App',
  components: {
    Formulario,
    Carrinho
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
