<template>
<div class="container">
<div class="row align-items-center">
    <div class="col-md-6">
       <form>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input
                        id="name"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="email" class="form-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        class="form-control"
                    
                    >
                    <label for="reason" class="form-label">Reason</label>
                    <textarea
                        id="reason"
                        type="text"
                        class="form-control"
                    
                    ></textarea>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>


                </div>
            </div>
        </form>
    </div>


    <div class="col-md-6 text-center">
        <h1>Links</h1>
    </div>
</div>

</div>      
</template>