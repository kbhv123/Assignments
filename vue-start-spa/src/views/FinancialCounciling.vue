<template>
<div class="container">
<div class="row align-items-center">
    <div class="col-md-6">
       <h1>Financial Counciling</h1>
       <p>Paragraph</p>
       <p>Contact Phone Numbers</p>
    </div>


    <div class="col-md-6 text-center">
        <h1>Links</h1>
        <div class="row justify-content-center gap-2">
        <button @click="goToLocations">Locations</button>
        <button @click="goToFinancialAssistance">Finacial Assistance</button>
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
            goToFinancialAssistance(){
                this.$router.push("/financialAssistance")
            },
            goToLoans(){
                this.$router.push("/loans")
            }
            
             
        }
    }

</script>