<template>
    <div class="container">
        <div class="row align-items-center">

            


            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    <button @click="goToAdminContact">New Contacts</button>
                    <button @click="goToAdminCorporate">Corporate Replies</button>
                    <button @click="goToAdminCreation">Add New Admins</button>
                    <button @click="goToAdminVolunteer">New Volunteers Requests</button>
                    <button @click="goToAdminPage">All Admins</button>
                    <button @click="goToDonationCheck">Check Donations</button>
                    
                </div>
            </div>

        </div>
    </div>

    
</template>

<script>

    export default {
        methods: {
            goToAdminContact(){
                this.$router.push("/adminContact")
            },
            goToAdminCorporate(){
                this.$router.push("/adminCorporate")
            },
            goToAdminCreation(){
                this.$router.push("/adminCreation")
            },
            goToAdminVolunteer(){
                this.$router.push("/adminVolunteer")
            },
            goToAdminPage(){
                this.$router.push("/adminPage")
            },
            goToDonationCheck(){
                this.$router.push("/donationCheck")
            }
            
             
        }
    }

</script>