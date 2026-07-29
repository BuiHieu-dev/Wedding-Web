import AudioPlayer from './components/AudioPlayer'
import useAutoScroll from './hooks/useAutoScroll'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import GiftSection from './components/GiftSection'
import Hero from './components/Hero'
import ReceptionSection from './components/ReceptionSection'
import RsvpSection from './components/RsvpSection'
import WeddingCalendar from './components/WeddingCalendar'
import WeddingInfo from './components/WeddingInfo'

function App() {
  useAutoScroll({ speed: 1.2, delay: 2000 })

  return (
    <main className="overflow-hidden text-charcoal">
      <Hero />
      <Countdown />
      
      <WeddingInfo />
      <ReceptionSection />
      <WeddingCalendar />
      <Gallery />
      {/* <RsvpSection /> */}
      {/* <GiftSection /> */}
      <AudioPlayer />
    </main>
  )
}

export default App
