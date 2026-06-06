import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

function SplitText({ text, className = '', as: Tag = 'h1' }) {
  const containerRef = useRef(null)
  const words = text.split(' ')

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const chars = gsap.utils.toArray('.split-char')

      gsap.fromTo(
        chars,
        { y: 18, rotate: 2 },
        {
          y: 0,
          rotate: 0,
          duration: 0.72,
          ease: 'power3.out',
          stagger: 0.024,
        },
      )
    }, containerRef)

    return () => context.revert()
  }, [text])

  return (
    <Tag ref={containerRef} className={`split-text ${className}`}>
      {words.map((word, wordIndex) => {
        const wordOffset = words.slice(0, wordIndex).reduce((total, currentWord) => total + currentWord.length, 0)

        return (
          <span className="split-word" key={`${word}-${wordIndex}`}>
            {word.split('').map((char, charIndex) => {
              const currentIndex = wordOffset + charIndex

              return (
                <span className="split-char" key={`${char}-${currentIndex}`} style={{ '--char-index': currentIndex }}>
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}

export default SplitText
