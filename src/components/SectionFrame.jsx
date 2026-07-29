import FloralCorner from './FloralCorner'

function SectionFrame({ children, variant = 'odd', className = '' }) {
  const bgClass = variant === 'even' ? 'section-even' : 'section-odd'

  return (
    <section className={`section-frame ${bgClass} ${className}`}>
      <FloralCorner position="tl" className="floral-corner--tl" />
      <FloralCorner position="br" className="floral-corner--br" />
      {children}
    </section>
  )
}

export default SectionFrame
