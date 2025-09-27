import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"

function Herotext() {

    const words = ["Secure", "Modern","Sclable"]
    const varients = {
        hidden:{opacity:0, x: -50},
        visible:{opacity:1, x:0}
        
    }

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* mobail view  */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
            variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1}}
            >Hi || I am Imrul Hassan Emon</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-neutral-300 text-5xl font-medium"
                variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1.2}}
                >A Developer <br /> Dedicate to Crafting</motion.p>
                <motion.div
                variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1.5}}
                >
                    <FlipWords words={words} className='text-white text-8xl font-black' ></FlipWords>
                </motion.div>
                <motion.p
                variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1.8}}
                className="text-4xl font-medium text-neutral-300">Web soutions</motion.p>
            </div>
        </div>
        
        {/* desktop view  */}

        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p
            variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1}}
            className="text-4xl font-medium"> HI I am Imrul</motion.p>
            <div>
                <motion.p className="text-5xl font-black text-neutral-300"
                variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1.2}}
                >Building</motion.p>
                <motion.div 
                variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1.5}}
                >
                    <FlipWords words={words} className='font-bold text-white text-7xl' ></FlipWords>
                </motion.div>
                <motion.p className="text-4xl font-black text-neutral-300"
                variants={varients}
            initial='hidden'
            animate="visible"
            transition={{delay:1.8}}>Web Application</motion.p>
            </div>
        </div>

    </div>
  )
}

export default Herotext