<template>
  <div >
    <!-- llamado directo desde el store -->
    {{$store.state.nombre}}
    <br>
    <!-- llamado con modificaciones computadas desde getters -->
    {{$store.getters.saludar}}
    <h1>Amigos</h1>
    <input type="text" v-model="amigo">
    <button @click="agregar">Agregar</button>
    <ol>
      <li v-for="(amigo,n) in $store.state.amigos"
        :key="n" >{{amigo}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      amigo:null
    }
  },
  methods:{
    agregar(){
      this.$store.state.amigo=this.amigo
      this.$store.dispatch('addAmigo')
      this.amigo=""
    }
  }
}
</script>

