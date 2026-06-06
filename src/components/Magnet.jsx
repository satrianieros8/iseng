import { useRef } from 'react'

function Magnet({
  children,
  padding = 70,
  magnetStrength = 2,
  disabled = false,
  wrapperClassName = '',
  innerClassName = '',
}) {
  const innerRef = useRef(null)

  const moveMagnet = (event) => {
    if (disabled || !innerRef.current) return

    const bounds = innerRef.current.getBoundingClientRect()
    const centerX = bounds.left + bounds.width / 2
    const centerY = bounds.top + bounds.height / 2
    const distanceX = event.clientX - centerX
    const distanceY = event.clientY - centerY

    if (Math.abs(distanceX) > padding || Math.abs(distanceY) > padding) {
      innerRef.current.style.transform = 'translate3d(0, 0, 0)'
      return
    }

    innerRef.current.style.transform = `translate3d(${distanceX / magnetStrength}px, ${
      distanceY / magnetStrength
    }px, 0)`
  }

  const resetMagnet = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = 'translate3d(0, 0, 0)'
    }
  }

  return (
    <span className={`magnet-wrap ${wrapperClassName}`} onMouseMove={moveMagnet} onMouseLeave={resetMagnet}>
      <span ref={innerRef} className={`magnet-inner ${innerClassName}`}>
        {children}
      </span>
    </span>
  )
}

export default Magnet
