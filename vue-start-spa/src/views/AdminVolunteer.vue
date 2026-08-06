<template>
<h1 class="container">Donation Check</h1>

    <div class="container">

        
        <p>Volunteer Admin Check </p>
    
    <div v-for="volunteer in volunteers" :key="volunteer.id" class="row align-items-center mb-2">
        <div class="col">{{ volunteer.name }}</div>
        <div class="col">{{ volunteer.phone }}</div>
        <div class="col">{{ volunteer.email }}</div>
        <div class="col">{{ volunteer.preferred }}</div>
        <div class="col">{{ volunteer.town }}</div>
        <div class="col">{{ volunteer.info }}</div>
        

        <div class="col-auto">
            <button class="btn btn-danger" @click="deleteVolunteer(volunteer.id)">Delete</button>
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
                volunteers: [],
                page: 1
            }
        },

        methods: {
            async getVolunteerPage() {
                const response = await fetch (
                    `http://localhost:3000/volunteer?page=${this.page}`
                );
                this.volunteers = await response.json();
            },

            async nextPage() {
                this.page++;
                this.getVolunteerPage();
            },

            async previousPage() {
                if (this.page > 1) {
                    this.page--;
                    this.getVolunteerPage();
                }
            },

            async deleteVolunteer(id) {
                if (!confirm("Delete this volunteer?")) {
                    return;
                }
                const response = await fetch (
                    `http://localhost:3000/volunteer/${id}`,
                {
                    method: "DELETE"
                });
                const data = await response.json();

                console.log(data);

                if(data.success) {
                    this.getVolunteerPage();

                } else {
                    alert(data.message);
                }
                
            },


        },

        mounted() {
            this.getVolunteerPage();
        },
        
    }



</script>