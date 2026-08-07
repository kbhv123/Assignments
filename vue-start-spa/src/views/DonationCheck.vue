<template>


    <div class="container">

      <div class="col-md-12 d-flex justify-content-center align-items-center">
            <h1>Donations</h1>
        </div>  
        
    
    <br>
    <br>
        <div class="row fs-3 fw-bold">
             <div class="col">Email</div>
             <div class="col">Amount</div>
        </div>

    <div v-for="donation in donations" :key="donations.id" class="row  justify-content-center align-items-center mb-2">
        <div class="col">{{ donation.email }}</div>
        <div class="col">{{ donation.amount }}</div>
        
        

        <div class="col-auto">
            <button class="btn btn-danger" @click="deleteDonation(donation.id)">Delete</button>
        </div>
        
        
    </div>
</div>
    <div class="d-flex justify-content-center">
        <button @click="previousPage">
            <-
    </button>
    <button @click="nextPage">
            ->
    </button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                donations: [],
                page: 1
            }
        },

        methods: {
            async getDonationPage() {
                const response = await fetch (
                    `http://localhost:3000/donations?page=${this.page}`
                );
                this.donations = await response.json();
            },

            async nextPage() {
                this.page++;
                this.getDonationPage();
            },

            async previousPage() {
                if (this.page > 1) {
                    this.page--;
                    this.getDonationPage();
                }
            },

            async deleteDonation(id) {
                if (!confirm("Delete this donation")) {
                    return;
                }
                const response = await fetch (
                    `http://localhost:3000/donations/${id}`,
                {
                    method: "DELETE"
                });
                const data = await response.json();

                console.log(data);

                if(data.success) {
                    this.getDonationPage();

                } else {
                    alert(data.message);
                }
                
            },


        },

        mounted() {
            this.getDonationPage();
        },
        
    }



</script>