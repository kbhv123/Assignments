<template>
    <div>
        <h1>Get Involved</h1>
        <p>Welcome to the Home page</p>
    </div>

    <button @click="goToVolunteer">Volunteer Now!</button>
    <button @click="goToCorporateSupp">Corporate Support!</button>
    <button @click="goToDonation">Make A Donation!</button>

    
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