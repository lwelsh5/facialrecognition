import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';
// import { loadFull } from 'tsparticles';

const ParticlesComponent = (props) => {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: true,
                zIndex: -1, //particles won't go over any of things on website 
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true, //enables click
                        mode: "push", //adds the particles on the click
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse", //makes particles run away from cursor
                    }
                },
                modes: {
                    push: {
                        quantity: 10, //number of particles added when clicked
                    },
                    repulse: {
                        distance: 100, //distance of particles from cursor
                    },
                },
            },
            particles: {
                links: {
                    enable: true, //make particles link together
                },
                move: {
                    enable: true, //make particles move
                    speed: { min: 1, max: 2},
                },
                opacity: {
                    value: { min: 0.3, max: 0.5 } //different opacity
                },
                size: {
                    value: { min: 1, max: 3} //randomises particle size
                }
            },
        };
    }, []);
    
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);
//having an id is good for identifying the right particles component
    return <Particles id={PaymentResponse.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;