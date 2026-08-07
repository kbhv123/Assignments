<template>
<h1 class="container d-flex justify-content-center align-items-center">Corporate Support</h1>

    <div class="container d-flex justify-content-center align-items-center gap-5">

        
        
        
    </div>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form @submit.prevent="corporate">
                <label for="name">Name</label>
                <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    
                    >
                <label for="company">Company</label>
                <input
                    v-model="company"
                    type="text"
                    class="form-control"
                    
                    >
                <label for="position">Your Position at Company</label>
                <input
                    v-model="position"
                    type="text"
                    class="form-control"
                    
                    >
                <label for="email">Email Address</label>
                <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    
                    >
                <label for="postcode">Postcode</label>
                <input
                    v-model="postcode"
                    type="text"
                    class="form-control"
                    
                    >
                <label for="info">Message</label>
                <textarea
                    v-model="info"
                    type="text"
                    class="form-control"
                    
                    ></textarea>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    
</template>

<script>

    export default {
        data(){
            return {
                name: "",
                company: "",
                position: "",
                email: "",
                postcode: "",
                info: ""

            
            };
        },



        methods: {
            async corporate(){
                console.log("contact method is running");
                const response = await fetch(
                    "http://localhost:3000/corporate",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: this.name,
                            company: this.company,
                            position: this.position,
                            email: this.email,
                            postcode: this.postcode,
                            info: this.info
                        })
                    },
                );
                const data = await response.json();

                console.log(data);
                
                
                
            },

           

            
        }


    }

</script>