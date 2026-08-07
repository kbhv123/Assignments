<template>
<h1 class="container d-flex justify-content-center align-items-center">Need Help?</h1>

    <div class="container d-flex justify-content-center align-items-center gap-5 mt-5">

        
        <div>
            <h1>Financial Assistance</h1>
            <p>Click the link below to get Financial Assistance!</p>
            <button @click="goToFinancialAssistance">Get Financial Assistance!</button>
            
        </div>
        <div>
            <h1>Financial Counciling</h1>
            <p>Click the link below to get Financial Counciling!</p>
            <button @click="goToFinancialCounciling">Need Financial Counciling?</button>
        </div>
        <div>
            <h1>Interest Free Loans</h1>
            <p>Click the link below to get Interest-Free Loans!</p>
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