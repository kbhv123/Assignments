<template>

    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        

        


    </div>
    <main>
        <router-view></router-view>
    </main>

</template>

<script>
    import Navbar from './components/Navbar.vue';
    import Banner from './components/Banner.vue';

    export default {
        components: {
            Navbar,
            Banner
        }
    };

</script>