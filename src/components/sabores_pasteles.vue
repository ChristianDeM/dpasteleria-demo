<template>
    <div>
        <h4>componente sabores</h4>
        <label for="">selecciona el sabor</label>
            <select v-model="$store.state.seleccionsabor">              
                <option v-for="sabor in $store.state.sabores" :value="sabor"  :key="sabor">
                             {{ sabor.nombre }}  ${{sabor.precio}}
                </option>
            </select>
                            <!-- {{$store.state.seleccionsabor}}
                            {{$store.state.seleccionsabor.pza}} -->
    </div>    
</template>