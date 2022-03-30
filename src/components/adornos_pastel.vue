<template>
<div>

    <h4>componente adorno</h4>
    <label for="">selecciona el sabor</label>
            <select v-model="$store.state.seleccionadorno" >              
                <option v-for="adorn in $store.state.adornos" :value="adorn" :key="adorn">
                             {{ adorn.nombre }}  ${{adorn.precio}}
                </option>
            </select>
                            <!-- {{$store.state.seleccionadorno.nombre}} -->
</div>
</template>

<script>

</script>
