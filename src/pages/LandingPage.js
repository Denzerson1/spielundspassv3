import Navbar from '../components/Navbar';
import Grid from '../components/Grid';
import Slideshow from '../components/Slideshow';
import Preise from '../components/Prices';
import Reviews from '../components/Reviews';
import Anfahrt from '../components/Anfahrt';
import Flyer from '../components/Flyer';

function LandingPage() {
    return (
        <div>
            <Flyer />
            <Slideshow/>
            <Grid />
            <Preise />
            <Reviews />
            <Anfahrt />
        </div>
    );
}

export default LandingPage;