import AudioPlayer from './components/AudioPlayer'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import GiftSection from './components/GiftSection'
import Hero from './components/Hero'
import ReceptionSection from './components/ReceptionSection'
import RsvpSection from './components/RsvpSection'
import WeddingCalendar from './components/WeddingCalendar'
import WeddingInfo from './components/WeddingInfo'

function App() {
  return (
    <main className="overflow-hidden text-charcoal">
      <Hero />
      <Countdown />
      
      <ReceptionSection />
      <WeddingInfo />
      <WeddingCalendar />
      <Gallery />
      {/* <RsvpSection /> */}
      {/* <GiftSection /> */}
      <AudioPlayer />
    </main>
  )
}

export default App
