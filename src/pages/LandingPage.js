import Navbar from '../components/Navbar';
import Grid from '../components/Grid';
import Slideshow from '../components/Slideshow';
import Preise from '../components/Prices';
import Reviews from '../components/Reviews';
import Anfahrt from '../components/Anfahrt';
import React from "react";

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Slideshow/>
            <Reviews />
            <Grid />
            <Preise />
            <Anfahrt />
        </div>
    );
}

export default LandingPage;