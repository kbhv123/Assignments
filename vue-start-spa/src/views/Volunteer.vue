<template>
    
    <div class="container d-flex justify-content-center align-items-center gap-5">
        <div row>
            <form @submit.prevent="volunteer">
                <label for="name">Name</label>
                <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    required
                    
                    >
                <label for="phone">Phone Number</label>
                <input
                    v-model="phone"
                    type="text"
                    class="form-control"
                    required
                    >
                <label for="email">Email</label>
                <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    required
                    
                    >
                <label for="prefered">Preferred Contact Method</label>
                <input
                    v-model="preferred"
                    type="text"
                    class="form-control"
                    required
                    
                    >
                <label for="town/suburb">Town/Suburb</label>
                <input
                    v-model="town"
                    type="text"
                    class="form-control"
                    required
                    
                    >
                <label for="info">Tell us a bit about yourself</label>
                <textarea
                    v-model="info"
                    type="text"
                    class="form-control"
                    required
                    
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
                phone: "",
                email: "",
                preferred: "",
                town: "",
                info: ""

            
            };
        },



        methods: {
            async volunteer(){
                console.log("volunteer method is running");


                if (
                    !this.name.trim() ||
                    !this.phone.trim() ||
                    !this.email.trim() ||
                    !this.preferred.trim() ||
                    !this.town.trim() ||
                    !this.info.trim()
                ){
                    alert("Please Complete All The Required Fields");
                    return;
                }

                const response = await fetch(
                    "http://localhost:3000/volunteer",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: this.name,
                            phone: this.phone,
                            email: this.email,
                            preferred: this.preferred,
                            town: this.town, 
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