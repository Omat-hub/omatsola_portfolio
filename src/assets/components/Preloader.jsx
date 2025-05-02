import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        key="page-loader"
        initial={{ y: "-30%" }} // Start above the screen
        animate={{ y: 0 }} // Slide down to center
        exit={{ y: "100%" }} // Slide down (out) below the screen
        transition={{ duration: 1, ease: "circInOut" }}
        className="fixed inset-0 z-50 bg-[#510a32] flex items-center justify-center text-[#e0e0e0]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.6, // Delay fade-in slightly after background slides down
            duration: 0.5,
          }}
          className="text-2xl font-bold"
        >
          Yarumen Omatsola
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Preloader;
