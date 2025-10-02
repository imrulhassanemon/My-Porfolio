import React from 'react';
import Herotext from '../component/Herotext';
import ParallalBackground from '../component/ParallalBackground';
import { Canvas } from '@react-three/fiber';
import { Astronut } from '../component/Astronut';
import { OrbitControls } from '@react-three/drei';


const Hero = () => {
    return (
        <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
            <Herotext></Herotext>
            <ParallalBackground></ParallalBackground>
            <figure className='absolute inset-0 w-screen h-screen z-0'>
            <Canvas>
               <Astronut></Astronut>
               <OrbitControls></OrbitControls>
            </Canvas>     
            </figure>
        </section>
    );
};

export default Hero;