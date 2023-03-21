import React, { useCallback } from "react";
import Particles from "react-particles";
import { Container as TSParticlesContainer, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

function ParticleWrap() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (tsContainer: TSParticlesContainer | undefined) => {
        await console.log(tsContainer);
    }, []);
    return (
        <Particles
            id="tsparticles"
            url="./particles1.json"
            init={particlesInit}
            loaded={particlesLoaded}
        />
    );
}
export default ParticleWrap;