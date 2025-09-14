import { motion } from "framer-motion";

interface CarouselIndicatorProps {
  active: boolean;
  onClick?: () => void;
}

const CarouselIndicator = ({ active, onClick }: CarouselIndicatorProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="h-[4px] bg-white rounded-full cursor-pointer relative overflow-hidden"
      initial={false}
      animate={{
        width: active ? 35 : 20,
        opacity: active ? 1 : 0.5,
        scale: active ? 1.1 : 1, // slight scale up when active
      }}
      whileHover={{
        scale: 1.2,
        opacity: 0.8,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {/* Shimmer effect for active state */}
      {active && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Pulse effect */}
      {active && (
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.button>
  );
};

export default CarouselIndicator;
