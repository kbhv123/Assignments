<template>
<div class="container">
<div class="row align-items-center">
    <div class="col-md-6">
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
                    
                    <button type="submit" class="btn btn-primary">Submit</button>


                </div>
            </div>
        </form>
    </div>


    <div class="col-md-6 text-center">
        <h1>Links</h1>
    </div>
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