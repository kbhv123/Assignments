<template>
    <div class="container">
        <div class="row align-items-center">

            <div class="col d-flex flex-column justify-content-center">
                <h1>About Us</h1>
                <p>At This Charity, We Strive To Help Low Income Families Handle their Tough Situation</p>
                <h1>Our Mission and Values</h1>
                <p>Our Mission Is To Give Help and Assistance Low Income Families Get Out of Their Low Income Situation Through
                    Different Strategies and To That We Stay Devoted
                </p>
            </div>


            <div class="col">
                <div class="d-flex flex-column align-items-center gap-3">
                    <button @click="goToHistory">Our History!</button>
                    <button @click="goToPromise">Our Promise!</button>
                    <button @click="goToNews">Our News!</button>
                    
                </div>
            </div>

        </div>
    </div>

    
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