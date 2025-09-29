// import {motion, useScroll,  useTransform } from "motion/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { p } from "motion/react-client";
import React from "react";

const ParallalBackground = () => {
  const mountain3y = useTransform(scrollProgress, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(scrollProgress, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(scrollProgress, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(scrollProgress, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      {/* background sky */}
      <div className="relative h-screen overflow-y-hidden">
        <motion.div
          className="absoulate inste-0 w-full h-screen z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3y,
          }}
        />
          {/* mountain layer 3  */}
         <motion.div
           className="absolute inset-0 z-10"
           style={{
             backgroundImage: "url(assets/mountain-3.png)",
             backgroundPosition: "bottom",
             backgroundSize: "cover",
             y: mountain1Y,
           }}
         />
         <motion.div
           className="absolute inset-0 z-10"
           style={{
             backgroundImage: "url(assets/planets.png)",
             backgroundPosition: "bottom",
             backgroundSize: "cover",
             y: mountain1Y,
           }}
         />
         {/* mountain layer 2 */}
         <motion.div
           className="absolute inset-0 z-20 "
           style={{
             backgroundImage: "url(assets/mountain-2.png)",
             backgroundSize: "cover",
             backgroundPosition: "bottom",
             x:planetsX,
           }}
         />
          {/* Mountain layer 1 */}
        <motion.div
          className="absolute inset-0 z-40"
          style={{
            backgroundImage: "url(assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
          />
        <div />
      </div>
    </section>
  );
};

export default ParallalBackground;
