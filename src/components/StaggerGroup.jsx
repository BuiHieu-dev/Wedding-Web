import { motion, useReducedMotion } from 'framer-motion'

function StaggerGroup({ children, className = '', stagger = 0.1, delayChildren = 0.05 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : stagger,
            delayChildren: prefersReducedMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default StaggerGroup
