import { motion, useReducedMotion } from 'framer-motion'

const offsets = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
}

function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 36,
  duration = 0.75,
  scale = 1,
  amount = 0.22,
}) {
  const prefersReducedMotion = useReducedMotion()
  const offset = offsets[direction] ?? offsets.up
  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, x: offset.x * distance, y: offset.y * distance, scale }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
