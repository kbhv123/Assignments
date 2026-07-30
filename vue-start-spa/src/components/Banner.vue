<template>
    <section class="container-fluid py-4"">
        <div class="background row align-items-center"> 

            


            <div :class=" showButton ? 'col text-center' : 'col text-end'">
                <img
                    src="@/assets/Charity.png"
                    alt="Logo"
                    class="img-fluid"
                    style="max-height: 120px;"
        
                >
            </div>

            <div class="col text-center">
                <button class="btn btn-primary" v-if="showButton">
                    Donate!
                </button>
            </div>

        </div>
        
       
    </section>

    
</template>
<script>
    export default {
        computed: {
            showButton() {
                return !["/financialAssistance", "/donation", "/financialCounciling", "/loans"].includes(this.$route.path);
            }
        }
    }



</script>

<style>

    .image_without_button {
        text-align: center;
    }

</style>