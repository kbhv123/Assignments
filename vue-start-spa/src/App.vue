<template>

    <div>
        <Navbar></Navbar>

        

        


    </div>
    <div>
        <router-view></router-view>
    </div>

</template>

<script>
    import Navbar from './components/Navbar.vue';

    export default {
        components: {
            Navbar
        }
    };

</script>