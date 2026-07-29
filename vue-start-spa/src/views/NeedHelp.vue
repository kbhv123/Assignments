<script setup lang="ts">


</script>

<template>
    <div>
        <h1>Need Help?</h1>
        <p>Welcome to the Need Help page</p>
    </div>

    <button @click="goToFinancialAssistance">Need Financial Assistance?</button>
    <button @click="goToFinancialCounciling">Need Financial Counciling?</button> 
    <button @click="goToInterestFreeLoans">Need Interest Free Loans?</button>
</template>

<script>

    export default {
        methods: {
            goToFinancialAssistance(){
                this.$router.push("/financialAssistance")
            },
             goToFinancialCounciling(){
                this.$router.push("/financialCounciling")
            },
            goToInterestFreeLoans(){
                this.$router.push("/loans")
            }
        }
    }

</script>