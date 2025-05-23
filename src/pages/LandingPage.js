import Navbar from '../components/Navbar';
import Grid from '../components/Grid';
import Slideshow from '../components/Slideshow';
import Preise from '../components/Prices';
import React from "react";

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Slideshow/>
            <Grid />
            <Preise />
        </div>
    );
}

export default LandingPage;