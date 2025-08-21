"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      
      // Only proceed if we have a previous value to compare with
      if (typeof previous === "number") {
        let direction = current - previous;

        if (current < 0.05) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-4 md:top-10 inset-x-0 mx-auto px-4 md:px-10 py-3 md:py-5 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center space-x-1 md:space-x-4",
            className
          )}
        >
          {/* Mobile menu button - centered on mobile */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-neutral-600 dark:text-neutral-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col space-y-1">
                <span 
                  className={`block h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span 
                  className={`block h-0.5 w-5 bg-current transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span 
                  className={`block h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
            </button>
          )}

          {/* Desktop navigation items - hidden on mobile */}
          {!isMobile && navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="hidden sm:block">{navItem.icon}</span>
              <span className="text-sm cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[4999] mt-16"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-black rounded-b-2xl shadow-lg py-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  className="flex items-center px-6 py-3 text-neutral-600 dark:text-neutral-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3">{navItem.icon}</span>
                  <span>{navItem.name}</span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};