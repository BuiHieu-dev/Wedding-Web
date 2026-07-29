import { useEffect, useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import WelcomeOverlay from './components/WelcomeOverlay'
import useAutoScroll from './hooks/useAutoScroll'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import GiftSection from './components/GiftSection'
import Hero from './components/Hero'
import ReceptionSection from './components/ReceptionSection'
import RsvpSection from './components/RsvpSection'
import WeddingCalendar from './components/WeddingCalendar'
import WeddingInfo from './components/WeddingInfo'
import CoupleSection from './components/CoupleSection'
import ThankYouSection from './components/ThankYouSection'

function App() {
  const [entered, setEntered] = useState(false)

  // F5 thì luôn quay về đầu trang
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useAutoScroll({ speed: 1.2, delay: 1500, started: entered })

  return (
    <main className="overflow-hidden text-charcoal">
      <WelcomeOverlay visible={!entered} onEnter={() => setEntered(true)} />
      <Hero />
      <Countdown />

      <WeddingInfo />
      <ReceptionSection />
      
      <CoupleSection />
      <Gallery />
      
      <WeddingCalendar />
      <RsvpSection />
      <ThankYouSection />
      {/* <GiftSection /> */}
      <AudioPlayer playSignal={entered} />
    </main>
  )
}

export default App
