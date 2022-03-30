<template>
    <div>
        <h3>componente usuario info</h3>
        <form>
            <div class="form-group">
                <label for="fname">Nombre</label><br>
                <input class="form-control"  type="text" v-model="nombre"  name="fname"><br>
                <label for="fname">telefono</label><br>
                <input class="form-control" type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="telefono"  name="fname"><br>
                <label for="fname">correo</label><br>
                <input class="form-control" type="email" v-model="correo"  name="fname"><br>
                        <!-- <p>{{nombre}}</p>
                        <p>{{telefono}}</p>
                        <p>{{correo}}</p> -->
                    
             </div>
        </form>
        <button class="btn btn-primary"  @click="agregarpedido"> agregarpedido</button>
          
        <!-- <li v-for="pedido,index in  $store.state.pedido" :key="index"> {{pedido.nombre}} {{pedido.telefono}} {{pedido.correo}} {{}}</li> -->
    </div>    
</template>

<script>


export default{
    data(){
        return{
        nombre:'',
        telefono:'',
        correo:'',
        
        }       
    },
    methods:{
        agregarpedido(){
            console.log(this.nombre);
            this.$store.state.pedido.push({
                nombre: this.nombre,
                telefono: this.telefono,
                correo: this.correo,
                        
              });
            this.$store.dispatch('agregarpedidoaction');
            this.nombre='';
            this.telefono='';
            this.correo='';
            //console.log(this.$store.state.pedido);
        }
    }
}
</script>
