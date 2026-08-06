<template>
<h1 class="container d-flex justify-content-center align-items-center">Admin Creation</h1>

    <div class="container d-flex justify-content-center align-items-center gap-5">

        
        <p>Admins</p>

        <form @submit.prevent="createAdmin">
            <input v-model = "username">
            <input v-model = "password" type="password">
            <input v-model = "email">
            <button>
                Create Admin
            </button>
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