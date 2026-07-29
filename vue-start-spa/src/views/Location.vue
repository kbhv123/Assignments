<template>
    <div>
        <h1>Locations</h1>
        <p>Welcome to the Home page</p>
    </div>

    <button @click="goToSpecificLocation">Specific Location!</button>
    
</template>


<script>

    export default {
        methods: {
            goToSpecificLocation(){
                this.$router.push("/specificLocation")
            },
            
            
             
        }
    }

</script>