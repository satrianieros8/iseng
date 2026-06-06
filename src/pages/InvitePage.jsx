import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeartMark from '../components/HeartMark'
import Magnet from '../components/Magnet'
import ParticleField from '../components/ParticleField'
import SplitText from '../components/SplitText'

const randomBetween = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

function getRandomButtonPosition() {
  const buttonWidth = 132
  const buttonHeight = 54
  const padding = 18
  const maxLeft = Math.max(padding, window.innerWidth - buttonWidth - padding)
  const maxTop = Math.max(padding, window.innerHeight - buttonHeight - padding)

  return {
    left: randomBetween(padding, maxLeft),
    top: randomBetween(padding, maxTop),
  }
}

function InvitePage() {
  const navigate = useNavigate()
  const [noPosition, setNoPosition] = useState(null)
  const noButtonStyle = useMemo(
    () =>
      noPosition
        ? {
            '--no-left': `${noPosition.left}px`,
            '--no-top': `${noPosition.top}px`,
          }
        : undefined,
    [noPosition],
  )

  const moveNoButton = () => {
    setNoPosition(getRandomButtonPosition())
  }

  return (
    <main className="app-stage">
      <ParticleField />
      <section className="invite-content" aria-label="Ajakan makan">
        <HeartMark />
        <p className="eyebrow shiny-text">Pertanyaan penting</p>
        <SplitText
          as="h1"
          className="headline"
          text="Mau gak makan sama aku sekalian aku ajarin pakai mic nya ?"
        />
        <div className="button-row">
          <Magnet>
            <button className="action-button yes-button" type="button" onClick={() => navigate('/kemana')}>
              Yes
            </button>
          </Magnet>
          <button
            className={`action-button no-button ${noPosition ? 'runaway-button' : ''}`}
            style={noButtonStyle}
            type="button"
            onClick={moveNoButton}
          >
            No
          </button>
        </div>
      </section>
    </main>
  )
}

export default InvitePage
