const About = ()=>{

    return (<section id="about" class="pt-100 pb-50 section--bg" style=
    {{backgroundImage:"url(/nba.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain" }}>
    <div class="container" style={{color:"white",textShadow: "2px 2px #FF0000"}}>
        <div class="row gy-5">
            <div class="col-lg-6" >
                <div class="about-thumb rounded-3">
                    
                    <a href="https://www.youtube.com/" data-rel="lightcase:myCollection"
                        class="video-icon wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.3s"><i
                            class="las la-play"></i></a>
                </div>
            </div>
            <div class="col-lg-6 ps-lg-5">
                <div class="section-header" >
                    <div class="section-top-title border-left custom--cl">About Us</div>
                    <h2 class="section-title">We care about your money and safety.</h2>
                </div>
                <div class="row gy-4">
                                        <div class="col-xxl-8 col-xl-10 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.3s">
                        <div class="about-card">
                            <div class="about-card__icon rounded-3 custom--bg">
                                <i class="las la-hourglass-start"></i>                            </div>
                            <div class="about-card__content" >
                                <h4 class="title" >Our Mission</h4>
                                <p>We are focused on building and sustaining long-term generational relationships with our customers .</p>
                            </div>
                        </div>
                    </div>
                                        <div class="col-xxl-8 col-xl-10 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.3s">
                        <div class="about-card">
                            <div class="about-card__icon rounded-3 custom--bg">
                                <i class="far fa-eye"></i>                            </div>
                            <div class="about-card__content">
                                <h4 class="title">Our Vision</h4>
                                <p>Visabank will serve all over the world .</p>
                            </div>
                        </div>
                    </div>
                                        <div class="col-xxl-8 col-xl-10 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.3s">
                        <div class="about-card">
                            <div class="about-card__icon rounded-3 custom--bg">
                                <i class="las la-bullseye"></i>                            </div>
                            <div class="about-card__content">
                                <h4 class="title">Our Goal</h4>
                                <p>Visabank will serve their customers from all over the world and be highly accessible .</p>
                            </div>
                        </div>
                    </div>
                                    </div>
            </div>
        </div>
    </div>
</section>)
}

export default About;