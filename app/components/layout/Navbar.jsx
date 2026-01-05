"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Individual menu item animation variants
const itemVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    rotateY: 90,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  exit: {
    opacity: 0,
    x: 80,
    rotateY: 90,
    transition: {
      duration: 0.2,
    },
  },
};

// Overlay animation
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Panel animation
const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-8 px-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <motion.div
          className="w-10 h-10 bg-primary dark:bg-dark-primary rounded-lg pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Toggle Button */}
        <motion.button
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-sm text-text-heading dark:text-dark-heading z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Side Drawer with Staggered Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm pointer-events-auto"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-white/90 dark:bg-black/90 backdrop-blur-2xl shadow-2xl flex flex-col justify-center items-start pl-12 pointer-events-auto"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Menu Items with Stagger Effect */}
              <motion.div
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-6xl font-bold text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors origin-left"
                    variants={itemVariants}
                    whileHover={{
                      x: 20,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ perspective: "1000px" }}
                  >
                    <span className="text-primary dark:text-dark-primary text-lg font-normal mr-4 opacity-50">
                      0{index + 1}
                    </span>
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                className="absolute bottom-12 left-12 text-sm text-text-muted dark:text-dark-muted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <p>© 2024 Vidi Catering</p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};
