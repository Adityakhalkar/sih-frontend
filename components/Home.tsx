'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Model as EarthModel } from '../public/Earth'; 
import { Group } from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Lenis from '@studio-freight/lenis';
import { Spotlight } from '@/components/spotlight';
import { useRouter } from 'next/navigation';

const RotatingEarth: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const { viewport } = useThree();
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Update scroll position
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scroll / maxScroll); 
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1 + scrollProgress * 2;
      const maxMove = viewport.width * 0.3;
      const xPosition = viewport.width * 0.25; // Move to the right side
      groupRef.current.position.x = xPosition;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 3]} scale={[1.5, 1.5, 1.5]}>
      <EarthModel />
    </group>
  );
};

export default function EyeFromAbovePage() {
  const [isMobile, setIsMobile] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[500vh] bg-black overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/sih-logo-1.jpeg"
              alt="Eye from Above Logo"
              width={100}
              height={100}
              className="mr-4"
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a></li>
              <li><a href="#mission" className="text-white hover:text-blue-300 transition-colors">Mission</a></li>
              <li><a href="#technology" className="text-white hover:text-blue-300 transition-colors">Technology</a></li>
              <li><a href="#impact" className="text-white hover:text-blue-300 transition-colors">Impact</a></li>
              <li><a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <Spotlight className='top-0'/>

      <Canvas
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: 'black' }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={!isMobile} />
        <RotatingEarth />
        <Html position={[0, -2.5, 0]}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-center"
          >
            <p className="text-xl mb-6">Scroll to explore our mission</p>
            <Button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </Html>
      </Canvas>

      <div className="absolute top-0 left-0 w-full">
        <div id="about" className="h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center px-6 max-w-4xl"
          >
            <h1 className="text-7xl md:text-8xl font-geistMono mb-12 pb-6 relative z-10">
              Eye from ab
              <Image
                src="/sih-logo-1.jpeg"
                alt="Eye"
                width={96}
                height={96}
                className="inline-block"
              />
              ve
            </h1>
            <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" 
              onClick={() => Router.push('/dashboard')}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Discover our vision
              </span>
            </Button>
          </motion.div>
        </div>

        <div id="mission" className="h-screen flex items-center px-10 bg-blue-900 bg-opacity-30 space-x-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl max-w-2xl text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="mb-8 text-lg leading-relaxed">
              We plan to reduce the environmental as well as economical damage caused by oil spills by using AIS and Deep Learning Model.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Join Our Mission
            </Button>
          </motion.div>

          <div className="mt-8">
              <video
                src="/animated-info.mp4"
                width={600}
                height={600}
                autoPlay
                loop
                muted
                className="mx-auto rounded-2xl"
              />
            </div>
        </div>

        <div id="technology" className="h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center px-6 max-w-4xl"
          >
            <h2 className="text-4xl font-bold mb-8">Technology we use</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              We are using <strong>Deep Learning Models</strong> to find the Oil spills in the ocean and we are using <b>AIS</b> to find the location of Ships in the ocean and detect their motion.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Explore Our Tech
            </Button>
          </motion.div>
        </div>

        <div id="impact" className="h-screen flex items-center px-10 bg-green-900 bg-opacity-30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl max-w-2xl text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="mb-8 text-lg leading-relaxed">
             We will make impact on the social lives of everyone living near the coast of India to ensure that their life is safe from oil pollution. And we will make a strong impact on the India's growth by limiting the economy loss on oil spillage.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              We will work together!
            </Button>
          </motion.div>
        </div>

        <div id="contact" className="h-screen flex items-center px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl max-w-2xl text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8 text-lg">
              Interested in learning more about Eye from Above or partnering with us? Get in touch!
            </p>
            <form className="space-y-6">
              <input type="email" placeholder="Your email" className="w-full p-3 bg-black bg-opacity-50 border border-white rounded-lg" />
              <textarea placeholder="Your message" rows={4} className="w-full p-3 bg-black bg-opacity-50 border border-white rounded-lg"></textarea>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}