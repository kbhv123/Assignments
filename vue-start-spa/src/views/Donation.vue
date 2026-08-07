<template>
<div class="container">
<div class="row align-items-center">
    <div class="col-md-6">
        <h1>Donations</h1>
        
    </div>


    <div class="col-md-6">
        <form @submit.prevent="donate">
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
                        type="text"
                        class="form-control"
                    
                    >
                
                    <label for="card_no" class="form-label">Card Number</label>
                    <input
                        v-model="card_no"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="expiry" class="form-label">Expiry Date</label>
                    <input
                        v-model="expiry"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="security_code" class="form-label">Security Code</label>
                    <input
                        v-model="security_code"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="amount" class="form-label">Amount</label>
                    <input
                        v-model="amount"
                        type="int"
                        class="form-control"
                    
                    >
                    <div class="mt-3">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
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
                card_no: "",
                expiry: "",
                security_code: "",
                amount: "",

            
            };
        },



        methods: {
            async donate(){
                console.log("donate method is running");
                const response = await fetch(
                    "http://localhost:3000/donations",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: this.name,
                            email: this.email,
                            card_no: this.card_no,
                            expiry: this.expiry,
                            security_code: this.security_code,
                            amount: this.amount
                        })
                    },
                );
                const data = await response.json();

                console.log(data);
                
                
                
            },

           

            
        }


    }

</script>

