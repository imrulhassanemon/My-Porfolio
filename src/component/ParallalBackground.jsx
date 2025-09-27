import React from 'react';

const ParallalBackground = () => {
    return (
        <section className='absolute inset-0 bg-black/40'>
           <div className='relative h-screen overflow-y-hidden'>
                <div className='absoulate inste-0 w-full h-screen z-0'
                style={{backgroundImage:'url(/assets/sky.jpg)',
                    backgroundPosition:'bottom',
                    backgroundSize:'cover'
                }} />
                <div className='absolute inset-0 z-10'
                style={{
                    backgroundImage:"url(assets/mountain-1.png)",
                    backgroundPosition:'bottom',
                    backgroundSize: "cover" 
                }}
                />
                <div className='absolute inset-0 z-20' 
                style={{backgroundImage:'url(assets/mountain-2.png)',
                    backgroundSize: "cover",
                    backgroundPosition:'bottom'
                }}
                />
                <div/>
                <div/>
           </div>
        </section>
    );
};

export default ParallalBackground;