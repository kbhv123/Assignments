<template>
    
    <div class="container d-flex justify-content-center align-items-center gap-5">
        <div row>
            <h1>Interest Free Loans</h1>

            <p>Interest Free Paragraph</p>
            <p>Contact phone numbers</p>
            <h1>Frequently Asked Questions</h1>
            <p @click="showOne = !showOne">Question 1</p>
            <p v-if="showOne">answer1</p>
            <p @click="showTwo = !showTwo">Question 2</p>
            <p v-if="showTwo">answer2</p>
        </div>
    </div>
    
</template>
<script>

    export default {
        data(){
            return {
                showOne: false,
                showTwo: false
            };
        }
    };

</script>