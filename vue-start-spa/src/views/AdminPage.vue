<template>
<h1 class="container">Admins</h1>

    <div class="container">

        
        <div v-for="user in users" :key="user.id" class="row align-items-center mb-2">
            
            <div class="col">{{ user.email }}</div>
            <div class="col">{{ user.username }}</div>
            
            
        
       
        

            <div class="col-auto">
                <button class="btn btn-danger" v-if="user.id !==1" @click="deleteAdmin(user.id)">Delete</button>
        
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
                users: [],
                page: 1
            }
        },


        methods: {
            async deleteAdmin(id) {
                if (!confirm("Delete this admin")) {
                    return;
                }
                const response = await fetch(
                    `http://localhost:3000/admin/${id}`,
                    {
                        method: "DELETE"
                    }
                );
                const data = await response.json();
                if (data.success) {
                    this.getAdminPage();
                }
            },
            async getAdminPage() {
                const response = await fetch (
                    `http://localhost:3000/admin?page=${this.page}`
                );
                this.users = await response.json();
            },
            async nextPage() {
                this.page++;
                this.getAdminPage();
            },

            async previousPage() {
                if (this.page > 1) {
                    this.page--;
                    this.getAdminPage();
                }
            },
        },
        mounted() {
            this.getAdminPage();
        },
    }


</script>