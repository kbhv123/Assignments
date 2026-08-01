<template>
    

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                Company Name
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLinks">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarLinks">
                <div class="navbar-nav">
                     <router-link class="nav-link" to="/">Home</router-link> 
                     <router-link class="nav-link" to="/needHelp">Need Help?</router-link> 
                     <router-link class="nav-link" to="/getInvolved">Get Involved!</router-link> 
                     <router-link class="nav-link" to="/about">About</router-link>
                     <router-link class="nav-link" to="/location">Locations</router-link> 
                     <router-link class="nav-link" to="/contact">Contact</router-link>
                     <router-link class="nav-link fs-3" id="donation" to="/donation">Make a Donation!</router-link> 
                     <router-link class="nav-link" id="login" to="/login">Login</router-link> 
                </div>
            </div>

        </div>
    </nav>





    
    


</template>

<style scoped>

    

</style>