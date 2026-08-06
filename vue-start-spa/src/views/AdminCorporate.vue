<template>
<h1 class="container">Corporate Check</h1>

    <div class="container">

        
        <p>Corporate Admin Check </p>
    
    <div v-for="corporate in corporates" :key="corporate.id" class="row align-items-center mb-2">
        <div class="col">{{ corporate.name }}</div>
        <div class="col">{{ corporate.email }}</div>
        <div class="col">{{ corporate.response }}</div>

        <div class="col-auto">
            <button class="btn btn-danger" @click="deleteCorporate(corporate.id)">Delete</button>
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
                corporates: [],
                page: 1
            }
        },

        methods: {
            async getCorporatePage() {
                const response = await fetch (
                    `http://localhost:3000/corporate?page=${this.page}`
                );
                this.corporates = await response.json();
            },

            async nextPage() {
                this.page++;
                this.getCorporatePage();
            },

            async previousPage() {
                if (this.page > 1) {
                    this.page--;
                    this.getCorporatePage();
                }
            },

            async deleteCorporate(id) {
                if (!confirm("Delete this contact")) {
                    return;
                }
                const response = await fetch (
                    `http://localhost:3000/corporate/${id}`,
                {
                    method: "DELETE"
                });
                const data = await response.json();

                console.log(data);

                if(data.success) {
                    this.getCorporatePage();

                } else {
                    alert(data.message);
                }
                
            },


        },

        mounted() {
            this.getCorporatePage();
        },
        
    }



</script>