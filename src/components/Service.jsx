function Service() {
    return ( <section id="services" class="service-section position-relative z-index-2 pt-50 pb-100" style={{backgroundColor:"crimson",color:"white"}}>
   
    <div class="container" style={{margin:"1rem"}}>
        <div class="row justify-content-center">
            <div class="col-xxl-7 col-xl-8 col-lg-10">
                <div class="section-header text-center">
                    <div class="section-top-title border-left custom--cl">Our Services</div>
                    <h2 class="section-title">We make life comfortable with our services.</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center gy-4">

                        <div  class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div class="service-card rounded-3">
                    <div class="service-card__icon rounded-2 custom--cl">
                        <i class="las la-exchange-alt"></i>                    </div>
                    <div class="service-card__content">
                        <h3 class="title">Fast Transfer</h3>
                        <p class="mt-2">Our Money transfer system is secure and easy. Send your funds to your beneficiaries within Viserbank or to other banks. Transfer within Viserbank is instant and to other banks may take 24 hours.</p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div class="service-card rounded-3">
                    <div class="service-card__icon rounded-2 custom--cl">
                        <i class="fas fa-credit-card"></i>                    </div>
                    <div class="service-card__content">
                        <h3 class="title">Deposit Funds</h3>
                        <p class="mt-2">Account-holders of Viserbank are able to deposit their money through our several payment systems. We have online payment services like PayPal, Stripe, Paystack, Skrill, Flutterwave, Mollie, Payeer, etc.</p>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div class="service-card rounded-3">
                    <div class="service-card__icon rounded-2 custom--cl">
                        <i class="fas fa-money-check-alt"></i>                    </div>
                    <div class="service-card__content">
                        <h3 class="title">Withdraw Funds</h3>
                        <p class="mt-2">Account-holders of Capital Credit Bank are able to withdraw money from their account. Without verification, any withdrawal won&#039;t be completed, so you can trust Capital Credit Bank.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section> );
}

export default Service;