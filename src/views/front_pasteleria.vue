<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 m-5">
                     <h1>Bienvenidos a la pasteleria git demo  Vue.js</h1>
                </div>
            </div>
        </div>         
       
        <div class="container">
            <div class="row">
                <div class="col-6  mt-5 mb-5">
                     <sabores/>
                </div>
                <div class="col-6 mt-5 mb-5">
                    <adorno/>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-6 ">  
                    <pedido/> 
                </div>
            </div>
        </div>
        <div class="container m-5">
            <div class="row">            
                <div class="col-4"> </div>
                <div class="col-4"> </div>
                <div class="col-4"> <info/> </div>
            </div>
            <div class="row">
                <div class="col-12">
                    derechos reservados 
                </div>
            </div>
        </div>
    </div>
</template>



<script>

import info from '@/components/info_pasteleria.vue'
import sabores from '@/components/sabores_pasteles.vue'
import adorno from '@/components/adornos_pastel.vue'
import pedido from '@/components/contacto_pastel.vue'

export default {
    components:{
        info,
        sabores,
        adorno,
        pedido
    },
   
}
</script>



