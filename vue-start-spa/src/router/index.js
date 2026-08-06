import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

//Imports for Need Help Page
import NeedHelp from "@/views/NeedHelp.vue";
import FinancialAssistance from "@/views/FinancialAssistance.vue";
import FinancialCounciling from "@/views/FinancialCounciling.vue";
import InterestFree from "@/views/InterestFree.vue";

//Imports for Get Involved Page
import GetInvolved from "@/views/GetInvolved.vue";
import Volunteer from "@/views/Volunteer.vue";
import CorporateSupp from "@/views/CorporateSupp.vue";
import Donation from "@/views/Donation.vue";

//Imports for About Us Page
import History from "@/views/History.vue";
import Promise from "@/views/Promise.vue";
import News from "@/views/News.vue";

//Imports for Location Page
import Location from "@/views/Location.vue";
import SpecificLocations from "@/views/SpecificLocations.vue";

//Imports for Login
import Login from "@/views/login.vue";


//Imports for Admin Specific Pages
import DonationCheck from "@/views/DonationCheck.vue";

//Imports for Admin Pages
import AdminCreation from "@/views/AdminCreation.vue";
import AdminPage from "@/views/AdminPage.vue";
import AdminContact from "@/views/AdminContact.vue";

//Routers for page navigation
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/needHelp",
        name: "NeedHelp",
        component: NeedHelp
    },
    {
        path: "/financialAssistance",
        name: "FinancialAssistance",
        component: FinancialAssistance
    },
    {
        path: "/financialCounciling",
        name: "FinancialCounciling",
        component: FinancialCounciling
    },
    {
        path: "/loans",
        name: "Loans",
        component: InterestFree
    },

    {
        path: "/getInvolved",
        name: "GetInvolved",
        component: GetInvolved
    },
    {
        path: "/volunteer",
        name: "Volunteer",
        component: Volunteer
    },
    {
        path: "/corporateSupp",
        name: "CorporateSupp",
        component: CorporateSupp
    },
    {
        path: "/donation",
        name: "Donation",
        component: Donation
    },
    {
        path: "/history",
        name: "History",
        component: History
    },
    {
        path: "/promise",
        name: "Promise",
        component: Promise
    },
    {
        path: "/news",
        name: "News",
        component: News
    },
    {
        path: "/location",
        name: "Location",
        component: Location
    },
    {
        path: "/specificLocation",
        name: "SpecificLocations",
        component: SpecificLocations
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/donationCheck",
        name: "DonationCheck",
        component: DonationCheck,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/adminCreation",
        name: "AdminCreation",
        component: AdminCreation,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/adminPage",
        name: "AdminPage",
        component: AdminPage,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/adminContact",
        name: "/AdminContact",
        component: AdminContact,
        meta: {
            requireAuth: true
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (to.meta.requiresAuth && !loggedIn) {
        next("/login");
    }else {
        next();
    }
});



export default router;