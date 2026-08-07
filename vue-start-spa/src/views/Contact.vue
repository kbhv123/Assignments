<template>
<div class="container">
<div class="row">
    <div class="col-md-12 d-flex justify-content-center align-items-center">
        <h1>Contact Us!</h1>
    </div>
       <form @submit.prevent="contact">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input
                        v-model="name"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="email" class="form-label">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        class="form-control"
                    
                    >
                    
                    <label for="response" class="form-label">Reason</label>
                    <textarea
                        v-model="response"
                        type="text"
                        class="form-control"
                    
                    ></textarea>
                    
                    <div class="mt-3">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </div>
            </div>
        </form>
    </div>


    
</div>

   
</template>

<script>

    export default {
        data(){
            return {
                name: "",
                email: "",
                response: ""

            
            };
        },



        methods: {
            async contact(){
                console.log("contact method is running");
                const response = await fetch(
                    "http://localhost:3000/contact",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: this.name,
                            email: this.email,
                            response: this.response
                        })
                    },
                );
                const data = await response.json();

                console.log(data);
                
                
                
            },

           

            
        }


    }

</script>