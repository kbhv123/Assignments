<template>
    <div>
        <h1>About Us</h1>
        <p>Welcome to the About Us page</p>
    </div>

    <button @click="goToHistory">Our History!</button>
    <button @click="goToPromise">Our Promise!</button>
    <button @click="goToNews">Our News and Stores!</button>

    
</template>


<script>

    export default {
        methods: {
            goToHistory(){
                this.$router.push("/history")
            },
            goToPromise(){
                this.$router.push("/promise")
            },
            goToNews(){
                this.$router.push("/news")
            }
            
             
        }
    }

</script>