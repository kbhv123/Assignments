<template>

    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link> |
            <router-link to="/needHelp">Need Help?</router-link> |
            <router-link to="/getInvolved">Get Involved!</router-link> |
            <router-link to="/donation">Make a Donation!</router-link> |
            <router-link to="/location">Locations</router-link>
        </nav>

        <hr>

        <router-view></router-view>


    </div>


</template>