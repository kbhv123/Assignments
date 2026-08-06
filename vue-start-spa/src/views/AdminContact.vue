<template>
<h1 class="container">Donation Check</h1>

    <div class="container">

        
        <p>Donation Admin Check </p>
    
    <div v-for="contact in contacts" :key="contact.id" class="row align-items-center mb-2">
        <div class="col">{{ contact.name }}</div>
        <div class="col">{{ contact.email }}</div>
        <div class="col">{{ contact.response }}</div>

        <div class="col-auto">
            <button class="btn btn-danger" @click="deleteContact(contact.id)">Delete</button>
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
                contacts: [],
                page: 1
            }
        },

        methods: {
            async getContactPage() {
                const response = await fetch (
                    `http://localhost:3000/contact?page=${this.page}`
                );
                this.contacts = await response.json();
            },

            async nextPage() {
                this.page++;
                this.getContactPage();
            },

            async previousPage() {
                if (this.page > 1) {
                    this.page--;
                    this.getContactPage();
                }
            },

            async deleteContact(id) {
                if (!confirm("Delete this contact")) {
                    return;
                }
                const response = await fetch (
                    `http://localhost:3000/contact/${id}`,
                {
                    method: "DELETE"
                });
                const data = await response.json();

                console.log(data);

                if(data.success) {
                    this.getContactPage();

                } else {
                    alert(data.message);
                }
                
            },


        },

        mounted() {
            this.getContactPage();
        },
        
    }



</script>