import React from 'react';
import Herotext from '../component/Herotext';

const Hero = () => {
    return (
        <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
            <Herotext></Herotext>
        </section>
    );
};

export default Hero;