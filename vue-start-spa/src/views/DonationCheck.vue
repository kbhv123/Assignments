<template>
<h1 class="container d-flex justify-content-center align-items-center">Donation Check</h1>

    <div class="container d-flex justify-content-center align-items-center gap-5">

        
        <p>Donation Admin Check </p>
    </div>
    <div v-for="donation in donations" :key="donations.id">
        <h2>{{ donation.email }}</h2>
        <p>{{ donation.amount }}</p>

        
    </div>
    <button @click="previousPage">
            <-
        </button>
        <button @click="nextPage">
            ->
        </button>
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
            }


        },

        mounted() {
            this.getDonationPage();
        },
        
    }



</script>