import { createStore } from 'vuex'

export default createStore({
  state: {
      Direccion:[
        {calle:'avenida siempre viva'},
        {telefono:'123*45-67-89'},
        {correo:'pastelerias_git@cat.com'}
      ],
      sabores:[
        {nombre:'chocolate',precio:'150', pza:'50'},
        {nombre:'fresa',precio:'200',pza:'50'},
        {nombre:'cafe',precio:'170',pza:'50'},
      ],
      adornos:[
        {nombre:'barra de chocolate',precio:'50',pza:'50'},
        {nombre:'postal',precio:'25',pza:'50'},
        {nombre:'velas',precio:'25',pza:'50'},
      ],
      seleccionsabor:'',
      seleccionadorno:'',
      contacto:[
        {nombre:'',telefono:'',correo:''}
      ],
      pedido:[],
      pedidos:[],
      id:'1'
      },
  getters: {
    propdireccion(state){
      return state.Direccion;
    },
    propsabores(state){
      return state.sabores;
    },
    propadorno(state){
      return state.adornos;
    }

  },
  mutations: {
    agregarpedido(state){
      console.log(state.pedido,' estamos en pedido');
      state.pedidos.push({
        pedidos:state.pedido,
        sabor:state.seleccionsabor.nombre,
        precio:state.seleccionsabor.precio,
        pzasabor:state.seleccionsabor.pza--,
        adorno:state.seleccionadorno.nombre,
        pzaadorno:state.seleccionadorno.pza--,
        id:state.id++,
        
      }),
     console.log(state.pedidos,'fin<al');
      
    }
  },
  actions: {
    agregarpedidoaction(context){
      context.commit('agregarpedido')
    }
  },
  modules: {
  }
})
