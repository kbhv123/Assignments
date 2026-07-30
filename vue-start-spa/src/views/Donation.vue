<template>
<div class="container">
<div class="row align-items-center">
    <div class="col-md-6">
        <h1>Donations</h1>
        <p>Donation Paragraph</p>
    </div>


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
                    <label for="address" class="form-label">Billing Address</label>
                    <input
                        id="address"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="card_no" class="form-label">Card Number</label>
                    <input
                        id="card_no"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="expiry" class="form-label">Expiry Date</label>
                    <input
                        id="expiry"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="security_code" class="form-label">Security Code</label>
                    <input
                        id="security_code"
                        type="text"
                        class="form-control"
                    
                    >
                    <label for="amount" class="form-label">Amount</label>
                    <input
                        id="amount"
                        type="text"
                        class="form-control"
                    
                    >

                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>

</div>      
</template>