"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from 'next/image';
import LoadingAnimation from "./LoadingAnimation";
import { useInView } from "../hooks/useInView";
import AnimatedLetters from "./AnimatedLetters";
import BounceAnimation from "./BounceAnimation";
import AnimatedHeading from "./AnimatedHeading";

export default function AboutSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, isInView } = useInView<HTMLDivElement>({ 
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-100px 0px" 
  });
  
  useEffect(() => {
    // Simulate loading delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Animation visibility delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
    const stats = [
    { number: "3", label: "Detection Modes" },
    { number: "90%+", label: "Accuracy Rate" },
    { number: "7", label: "Team Members" },
    { number: "24/7", label: "Support Access" }
  ];
    const features = [
    "Multimodal depression detection (facial, voice, text)",
    "AI-powered conversational companion",
    "Real-time mental health assessment",
    "Personalized support recommendations",
    "Secure and private user data handling",
    "Integration with mental health resources",
    "Early intervention identification system"
  ];
  
  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 w-64 h-64 rounded-full bg-primary opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 mb-20 w-80 h-80 rounded-full bg-secondary opacity-5 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingAnimation size={60} color="var(--primary)" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Section heading */}
            <motion.div className="text-center max-w-3xl mx-auto" variants={itemVariants}>              <motion.div className="mb-4">                <AnimatedHeading
                  text="ABOUT MIRROR"
                  staggerDuration={0.05}
                  initialDelay={0.2}
                />
              </motion.div>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Mental health detection and support through multimodal analysis of facial expressions, voice patterns, and text sentiment.
              </motion.p>
            </motion.div>
            
            {/* Stats section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gray-50 p-6 rounded-xl text-center shadow-sm border border-gray-100"
                >
                  <motion.h3 
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Main content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.h3 className="text-2xl font-semibold text-gray-800" variants={itemVariants}>
                  Our Research Focus
                </motion.h3>
                  <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
                  Our research project titled "MIRROR: Depression Symptoms Detection through Facial, Voice, and Text Analysis with a Conversational Companion for Prevention" focuses on developing an innovative AI-based solution to detect and help prevent depression. Using a multimodal approach combining facial expression analysis, voice pattern recognition, and text sentiment analysis, we aim to create an early detection system for depressive symptoms.
                </motion.p>
                
                <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
                  The MIRROR app incorporates a conversational companion designed to provide support, evaluate mental health status, and connect users with appropriate resources. This research represents a significant step toward addressing mental health challenges through accessible technology that promotes early intervention and support.
                </motion.p>
                
                <motion.div variants={itemVariants} className="pt-4">
                  <a 
                    href="#documents" 
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    View Our Research
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Key Features</h3>
                </motion.div>
                
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + (index * 0.1), duration: 0.3 }}
                    >
                      <span className="text-success mr-2 mt-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
