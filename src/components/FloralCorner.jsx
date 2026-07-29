const IMG_PATH = `${import.meta.env.BASE_URL}img`

function FloralCorner({ position = 'tl', className = '' }) {
  // Corner2 = gốc góc trái trên, Corner1 = gốc góc phải dưới
  const useCorner2 = position === 'tl'
  const imgSrc = useCorner2 ? `${IMG_PATH}/Corner2.png` : `${IMG_PATH}/Corner1.png`

  // Corner1 is tall (1457x2046), Corner2 is wide (1466x1399)
  // Need objectPosition to anchor image to the correct corner
  const objectPosition = useCorner2 ? 'left top' : 'right bottom'

  return (
    <div className={`floral-corner ${className}`}>
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition }}
      />
    </div>
  )
}

export default FloralCorner
