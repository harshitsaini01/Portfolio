import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/uttils";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4", // Responsively adjust grid size (2 items on small screens, 3 on medium, 5 on large)
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2" // Removed width control here
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <img
              src={item.image} // Assuming 'image' is a property in the `item` object
              alt={item.alt || "image"}
              className="w-full h-full object-cover rounded-2xl"
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <motion.div
      className={cn(
        "rounded-lg h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex items-center justify-center transition-all duration-300 ease-out",
        className
      )}
      whileHover={{
        scale: 1.05, // Scale the card when hovered
        boxShadow: "0 10px 20px rgba(128, 0, 128, 0.3)", // Add a soft purple shadow on hover
        transition: { duration: 0.3 }, // Smooth transition
      }}
      whileTap={{ scale: 0.98 }} // Slightly reduce the scale on tap/click
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};
