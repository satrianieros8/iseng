import { useState } from 'react'
import HeartMark from '../components/HeartMark'
import ParticleField from '../components/ParticleField'
import SplitText from '../components/SplitText'

const whatsappNumber = '6285771666404'

function DestinationPage() {
  const [destination, setDestination] = useState('')
  const trimmedDestination = destination.trim()

  const sendToWhatsapp = (event) => {
    event.preventDefault()
    if (!trimmedDestination) return

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(trimmedDestination)}`
  }

  return (
    <main className="app-stage">
      <ParticleField />
      <section className="destination-content" aria-label="Pilih tempat makan">
        <HeartMark />
        <p className="eyebrow shiny-text">Oke, deal</p>
        <SplitText
          as="h1"
          className="headline"
          text="Kirain kamu bakal jawab No lohhh. yaudah jadinya mau kemana ?"
        />
        <form className="destination-form" onSubmit={sendToWhatsapp}>
          <input
            className="destination-input"
            type="text"
            placeholder="Tulis tempatnya di sini..."
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            aria-label="Tempat makan yang kamu mau"
          />
          <button className="action-button send-button" type="submit" disabled={!trimmedDestination}>
            Send
          </button>
        </form>
      </section>
    </main>
  )
}

export default DestinationPage
