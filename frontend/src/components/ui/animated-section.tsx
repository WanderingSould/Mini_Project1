import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.25"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className={`${className} will-change-transform`}
      initial={{ opacity: 0, y: 200, scale: 0.8 }}
      style={{
        opacity,
        y,
        scale,
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
