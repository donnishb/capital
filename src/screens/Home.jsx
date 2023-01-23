import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Service from '../components/Service';
import Whyus from '../components/Whyus';
import Howwork from '../components/Howwork';
import Unnamed from '../components/Unnamed';
import Overview from '../components/Overview';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Subscribe from '../components/Subscribe';
import Cookie from '../components/Cookie';
import Footer from '../components/Footer';
import Navbarr from '../components/Navbar';
function Home() {
    return (
        <>
    <Navbarr />
    <Hero />
    <Features />
    <About />
    <Service />
    <Whyus />
    <Howwork />
    <Unnamed />
    <Overview />
    <Testimonial />
    <FAQ />
    <Subscribe />
    <Cookie />
    <Footer /> 
    </> );
}

export default Home;