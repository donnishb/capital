function Subscribe() {
    return ( <section class="subscribe-section">
    <div class="container">
        <div class="row gy-3 justify-content-between align-items-center">
            <div class="col-xxl-5 col-xl-6 col-lg-4 text-lg-start text-center wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <h4 class="text-white">Subscribe our newsletter and stay connected</h4>
            </div>
            <div class="col-xxl-7 col-xl-6 col-lg-8 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <form class="subscribe-form" id="subscribeForm">
                    <input type="hidden" name="_token" value="9MXhfoPMRefb2N2C7V0YcCaL2zNiHeNwkgKbzwjA" />                    <div class="custom-icon-field">
                        <input type="email" name="email" class="form--control" placeholder="Enter email address" />
                        <i class="las la-envelope"></i>
                    </div>
                    <button type="submit" class="btn custom--bg">Subscribe</button>
                </form>
            </div>
        </div>


    </div>
</section> );
}

export default Subscribe;