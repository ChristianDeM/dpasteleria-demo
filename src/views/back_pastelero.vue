<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-4">
                  <h4>cantidad de ingredientes</h4>
                  <ul v-for="canitdadsabores,index in  $store.state.sabores" :key="index">
                      <li>sabor; {{canitdadsabores.nombre}} pza: {{canitdadsabores.pza}}</li>
                  </ul>
                </div>
                <div class="col-4">
                  <h4>cantidad de ingredientes</h4>
                  <ul v-for="cantidadadornos,index in  $store.state.adornos" :key="index">
                      <li>adorno; {{cantidadadornos.nombre}} pza: {{cantidadadornos.pza}}</li>
                  </ul>
                </div>
            </div>
            <div class="">
                 <h4>pedidos para el pastelero</h4>
                <div class="col-6">
                        
                </div>
            </div>
            <div class="row row d-flex justify-content-center mt-5">
            <div class="card" style="width: 18rem;">
                
                <div class="card-body">
                    <h5 class="card-title">PEDIDOS</h5>
                        <ul v-for="pasteleroinfo,index in  $store.state.pedidos" :key="index">
                            <li>numero de pedido: {{pasteleroinfo.id}} </li>
                            <li>Sabor:{{pasteleroinfo.sabor}} </li>
                            <li>precio:{{pasteleroinfo.precio}} </li>
                            <li>Adorno:{{pasteleroinfo.adorno}}</li>
                            <li>Nombre :{{pasteleroinfo.pedidos[0].nombre}}</li>
                            <li>Telefono :{{pasteleroinfo.pedidos[0].telefono}}</li>
                            <li>Correo :{{pasteleroinfo.pedidos[0].correo}}</li>
                        </ul> 
                </div>
                </div>
              </div>
            </div>
            
    </div>
</template>

<style>
h4{
 text-align: center;
 font-weight: bold;
 size: 30px;
}
li{
    text-align: left;
}
</style>