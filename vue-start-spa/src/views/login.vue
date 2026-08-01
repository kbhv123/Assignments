<template>
<h1 class="container d-flex justify-content-center align-items-center">Login</h1>

    <div class="container d-flex justify-content-center align-items-center gap-5">

        
        <form @submit.prevent="login">
            <div>
                <label class="form-label">Email</label>
            </div>
            <input
                v-model="email"
                type="email"
                class="form-control"
            >
            <div>
                <label class="form-label">Password</label>
            </div>
            <input
                v-model="password"
                type="password"
                class="form-control"
            >
            <button
                type="submit"
                class="btn btn-primary"
            >Login</button>



        </form>
    </div>
    
</template>

<script>

    export default {
        data(){
            return {
                email: "",
                password: ""
            };
        },

        methods: {
            async login(){
                const response = await fetch(
                    "http://localhost:3000/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: this.email,
                            password: this.password
                        })
                    },
                );
                const data = await response.json();

                console.log(data);
                
                if(data.success) {
                    localStorage.setItem("loggedIn", "true");
                    
                    

                    this.$router.push("/donationCheck");
                    
                } else {
                    alert(data.message);
                }
                
            } 
        }
    }

</script>