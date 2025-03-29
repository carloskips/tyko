import React, { useState } from 'react';
import { LuMenu, LuX, LuUserRound, LuBookA, LuLanguages } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
  
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md bg-stone-600 hover:bg-stone-500 transition"
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-40 bg-stone-600 shadow-lg rounded-md border z-50"
            >
              <ul className="py-2">
                <li>
                  <Link to="/nouns" onClick={closeMenu} className="block px-4 py-2 hover:bg-stone-500 text-sm inter-bold cursor-pointer transition">
                    <LuLanguages></LuLanguages>Conjugation
                  </Link>
                </li>
                <li>
                  <Link to="/possession" onClick={closeMenu} className="block px-4 py-2 hover:bg-stone-500 text-sm inter-bold cursor-pointer transition">
                    <LuUserRound></LuUserRound>Possession
                  </Link>
                </li>
                <li>
                  <Link to="/definitive" onClick={closeMenu} className="block px-4 py-2 hover:bg-stone-500 text-sm inter-bold cursor-pointer transition">
                    <LuBookA></LuBookA>Definitive
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

export default HamburgerMenu;
