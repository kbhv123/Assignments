<template>
<h1 class="container d-flex justify-content-center align-items-center">Get Involved</h1>

    <div class="container d-flex justify-content-center align-items-center gap-5">

        
        <div>
            <h1>Volunteer</h1>
            <button @click="goToVolunteer">Volunteer Now!</button>
            
        </div>
        <div>
            <h1>Corporate Support</h1>
            <button @click="goToCorporateSupp">Corporate Support Now!</button>
        </div>
        <div>
            <h1>Donations!</h1>
            <button @click="goToDonation">Donate Now!</button>
        </div>
    </div>
    
</template>


<script>

    export default {
        methods: {
            goToVolunteer(){
                this.$router.push("/volunteer")
            },
            goToCorporateSupp(){
                this.$router.push("/corporateSupp")
            },
            goToDonation(){
                this.$router.push("/donation")
            }
             
        }
    }

</script>