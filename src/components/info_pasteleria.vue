<template>
    <div>
       <h3>componente informacion</h3>
        <ul>
            <li v-for="dir in $store.state.Direccion" :key="dir"> 
                {{dir.calle}}
                {{dir.telefono}}
                {{dir.correo}}
            </li>
        </ul>
      
    </div>
</template>




