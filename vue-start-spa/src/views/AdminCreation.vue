<template>


    <div class="container">

        
         <div class="col-md-12 d-flex justify-content-center align-items-center">
            <h1>Create New Admins</h1>
        </div>

        <br>
        <br>
        <div class="row fs-3 fw-bold">
            <div class="col">Username</div>
            <div class="col">Password</div>
            <div class="col">Email</div>
        </div>
        <form @submit.prevent="createAdmin" class="row justify-content-center align-items-center mb-2">
            <div class="col">
                
                <input v-model = "username">
            </div>
            <div class="col">
                
                <input v-model = "password" type="password">
            </div>
            <div class="col">
                
                <input v-model = "email">
            </div>
            
            
            <div class="col-auto">
                <button>
                Create Admin
                </button>
            </div>
            
        </form>


    </div>
    
</template>

<script>

    export default {
        data() {
            return {
                username: "",
                password: "",
                email: ""
            };
        },

        methods: {
            async createAdmin() {
                const response = await fetch (
                    "http://localhost:3000/admin",
                    {
                        method: "POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: this.username,
                            password: this.password,
                            email: this.email
                        })
                    }
                );
                const data = await response.json();
                console.log(data);
                alert("Admin Created");
            }
        }
    }

</script>