import { useRef, useState } from 'react'
import { Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysmigbborBxQAKbcgAcyp2GQyAEbCD0iacyURFFYBEP1jRkoaNy8IjKRi_r3OTN4Zf/exec'

function RsvpSection() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  async function handleSubmit(event) {
    event.preventDefault()
    if (sending) return
    setSending(true)

    const form = formRef.current
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      guests: formData.get('guests'),
      attendance: formData.get('attendance'),
      message: formData.get('wish'),
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      })
      setSubmitted(true)
      form.reset()
    } catch {
      alert('Có lỗi xảy ra, vui lòng thử lại.')
    } finally {
      setSending(false)
    }
  }

  return (
    <SectionFrame variant="odd" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Xác nhận tham dự"
          title="Gửi lời chúc đến chúng mình"
          subtitle="Hãy cho chúng mình biết bạn có thể đến chung vui và để lại đôi lời yêu thương nhé."
        />
        <Reveal>
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-[2rem] border border-champagne/60 bg-ivory/80 p-6 shadow-romantic md:p-8">
            <StaggerGroup className="space-y-5" stagger={0.1}>
              <Reveal distance={24} scale={0.98}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-semibold text-charcoal/80">
                    Tên khách mời
                    <input
                      required
                      type="text"
                      name="name"
                      className="mt-2 w-full rounded-2xl border border-champagne/70 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
                      placeholder="Nhập tên của bạn"
                    />
                  </label>
                  <label className="text-sm font-semibold text-charcoal/80">
                    Số người tham dự
                    <select name="guests" className="mt-2 w-full rounded-2xl border border-champagne/70 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10" defaultValue="1">
                      <option value="1">1 người</option>
                      <option value="2">2 người</option>
                      <option value="3">3 người</option>
                      <option value="4">4 người</option>
                    </select>
                  </label>
                </div>
              </Reveal>
              <Reveal distance={24} scale={0.98}>
                <fieldset className="rounded-2xl border border-champagne/70 bg-white/70 p-4">
                  <legend className="px-2 text-sm font-semibold text-charcoal/80">Bạn sẽ tham dự chứ?</legend>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <label className="flex items-center gap-3 rounded-xl bg-ivory px-4 py-3 text-sm text-charcoal/75">
                      <input type="radio" name="attendance" value="Sẽ tham gia" defaultChecked />
                      Sẽ tham gia
                    </label>
                    <label className="flex items-center gap-3 rounded-xl bg-ivory px-4 py-3 text-sm text-charcoal/75">
                      <input type="radio" name="attendance" value="Không thể tham gia" />
                      Rất tiếc không thể tham gia
                    </label>
                  </div>
                </fieldset>
              </Reveal>
              <Reveal distance={24} scale={0.98}>
                <label className="block text-sm font-semibold text-charcoal/80">
                  Lời chúc gửi đến cô dâu chú rể
                  <textarea
                    name="wish"
                    rows="5"
                    className="mt-2 w-full resize-none rounded-2xl border border-champagne/70 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
                    placeholder="Gửi lời chúc của bạn..."
                  />
                </label>
              </Reveal>
              <Reveal distance={24} scale={0.98}>
                <button
                  type="submit"
                  disabled={sending || submitted}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-charcoal hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <Send size={18} aria-hidden="true" />
                  <span>{sending ? 'Đang gửi...' : submitted ? 'Đã gửi ✓' : 'Gửi phản hồi'}</span>
                </button>
              </Reveal>
              {submitted ? (
                <Reveal distance={18} scale={0.98}>
                  <p className="rounded-2xl bg-blush/60 px-4 py-3 text-sm font-semibold text-charcoal">
                    Cảm ơn bạn đã gửi phản hồi! Chúng mình rất mong gặp bạn tại đám cưới 💕
                  </p>
                </Reveal>
              ) : null}
            </StaggerGroup>
          </form>
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export default RsvpSection
