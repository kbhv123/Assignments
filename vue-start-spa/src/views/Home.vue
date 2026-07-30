<template>
    
    <div class="container d-flex justify-content-center align-items-center gap-5">

    
        <div>
            <h1>Financial Assistance</h1>
            <button @click="goToFinancialAssistance">Get Financial Assistance!</button>
            
        </div>
        <div>
            <h1>Financial Counciling</h1>
            <button @click="goToFinancialCounciling">Need Financial Counciling?</button>
        </div>
        <div>
            <h1>Interest Free Loans</h1>
            <button @click="goToInterestFreeLoans">Need Interest-Free Loans?</button>
        </div>
    </div>
    
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