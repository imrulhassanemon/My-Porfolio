import React, { Suspense } from 'react';
import Herotext from '../component/Herotext';
import ParallalBackground from '../component/ParallalBackground';
import { Canvas, useFrame } from '@react-three/fiber';
import { Astronut } from '../component/Astronut';
import { Float,  OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { easing } from 'maath';
import { Loader } from '../component/Loader';


const Hero = () => {

    const isMobail = useMediaQuery({maxWidth: 853})

    return (
        <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
            <Herotext></Herotext>
            <ParallalBackground></ParallalBackground>
            <figure className='absolute inset-0 w-screen h-screen z-40' style={{width:'100vw', height:'100vh'}}>
            <Canvas camera={{position:[0, 1, 3]}}>
               <Suspense fallback={<Loader></Loader>}>
                <Float>
                <Astronut scale={isMobail && 0.23} position={isMobail && [0, -1.5, 0]} />
               </Float>
               <OrbitControls></OrbitControls>
               <Rig></Rig>
               </Suspense>
            </Canvas>     
            </figure>
        </section>
    );
};

function Rig() {
  return useFrame((state, delta) =>{
    easing.damp3(
      state.camera.position,[state.mouse.x/10, 1 + state.mouse.y/10, 3],0.5,delta
    )
  })
}
export default Hero;