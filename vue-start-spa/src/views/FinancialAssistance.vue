<template>
<div class="container">
<div class="row align-items-center">
    <div class="col-md-6">
       <h1>Financial Assistance</h1>
       <p>Call This Number Below to get Expert Financial Assistance!</p>
       <p>012345678</p>
    </div>


    <div class="col-md-6 text-center">
        <h1>Links</h1>
        <div class="row justify-content-center gap-2">
        <button @click="goToLocations">Locations</button>
        <button @click="goToFinancialCounciling">Finacial Counciling</button>
        <button @click="goToLoans">Interest Free</button>
        </div>
    </div>
</div>

</div>      
</template>

<script>

    export default {
        methods: {
            goToLocations(){
                this.$router.push("/location")
            },
            goToFinancialCounciling(){
                this.$router.push("/financialCounciling")
            },
            goToLoans(){
                this.$router.push("/loans")
            }
            
             
        }
    }

</script>