// Hint.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { LuCircleHelp } from 'react-icons/lu';
import { useState } from 'react';

export default function Hint({ hintText }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="relative inline-block">
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-9 left-4 -translate-x-1/2 px-3 py-2 bg-neutral-600 text-white text-sm inter-bold rounded shadow-md z-10"
          >
            {hintText}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        id="hintButton"
        className="m-2 px-3 py-2 bg-yellow-600 inter-bold text-white text-base rounded hover:bg-amber-600 transition"
        onClick={() => setShowHint(!showHint)}
      >
        <LuCircleHelp className="m-1" size={20} />
      </button>
    </div>
  );
}
