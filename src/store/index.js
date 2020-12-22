import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //variables que se manejan de manera global como 

    //Para este ejemplo estoy accediendo a esta variable desde el componente HelloWord.vue
    nombre:"Darío José",
    apellido:"Arrieta Deavila",
    amigos:[],
    amigo:null
  },
  mutations: {
    //las mutaciones son las únicas que modifican el state por medio de commits 
    addAmigo(state){
      state.amigos.push(state.amigo)
    }
  },
  actions: {
    //las acciones son funciones globales que se pueden llamar desde cualquier parte y que pueden llamar las mutaciones.
    addAmigo(context){
      context.commit('addAmigo')
    }
  },
  getters:{
    //son propiedades computadas para el store acceder a un dato del estado
    saludar(state){
      return `Hola! mi nombre es ${state.nombre} ${state.apellido}`
    }

  },
  modules: {
    
  }
})
