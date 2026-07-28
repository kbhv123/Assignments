<template>
    <div class="container mb-3">
        <form action="">
            <label for="" class="form-label">
                Page Title
            </label>
            <input
                type="text"
                class="form-control"
                v-model="pageTitle"

            />
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>
                <textarea
                    type="text"
                    class="form-control"
                    rows="5"
                    v-model="content"
                ></textarea>
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    :disabled="isFormInvalid"
                    @click.prevent="submitForm"
                >Create Page</button>
            </div>
        </form>
    </div>







</template>


<script>
export default {
    props: ['pageCreated'],
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content;
        }
    },
    data() {
        return {
            pageTitle: '',
            content: ''
        }
    },
    methods: {
        submitForm(){
            if(!this.pageTitle || !this.content) {
                alert('Please fill in the form.');
                return;
            }
            this.pageCreated({
                pageTitle: this.pageTitle,
                content: this.content,

            });
        }
    }
}

</script>