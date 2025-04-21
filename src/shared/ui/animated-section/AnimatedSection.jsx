
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 180, scale: 1.1 }}
  animate={controls}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="pt-[-100px]"
>
  {children}
</motion.div>

  );
};

export default AnimatedSection;
