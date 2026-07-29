import { useState } from 'react'
import { Copy, Gift } from 'lucide-react'
import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'
import { giftAccounts } from '../data/weddingData'

function GiftSection() {
  const [copiedAccount, setCopiedAccount] = useState('')

  async function copyAccount(accountNumber) {
    await navigator.clipboard.writeText(accountNumber)
    setCopiedAccount(accountNumber)
  }

  return (
    <SectionFrame variant="even" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Hộp mừng cưới"
          title="Gửi yêu thương đến cô dâu chú rể"
          subtitle="Nếu bạn muốn gửi quà mừng, chúng mình xin trân trọng cảm ơn tình cảm của bạn."
        />
        <StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.14}>
          {giftAccounts.map((account) => (
            <Reveal
              key={account.accountNumber}
              distance={34}
              scale={0.96}
              className="rounded-[2rem] border border-white bg-white/85 p-6 text-center shadow-romantic md:p-8"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blush text-gold">
                <Gift size={24} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {account.owner}
              </p>
              <img
                src={account.qrImage}
                alt={`QR chuyển khoản ${account.owner}`}
                className="mx-auto my-6 h-44 w-44 rounded-2xl bg-white p-3 shadow-md"
              />
              <h3 className="font-serif text-3xl font-bold text-charcoal">{account.accountName}</h3>
              <p className="mt-2 text-sm font-semibold text-charcoal/60">{account.bankName}</p>
              <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-ivory px-4 py-3">
                <span className="font-semibold tracking-[0.12em] text-charcoal">
                  {account.accountNumber}
                </span>
                <button
                  type="button"
                  aria-label={`Sao chép số tài khoản ${account.accountNumber}`}
                  onClick={() => copyAccount(account.accountNumber)}
                  className="rounded-full p-2 text-gold transition hover:bg-champagne/50"
                >
                  <Copy size={18} />
                </button>
              </div>
              {copiedAccount === account.accountNumber ? (
                <p className="mt-3 text-sm font-semibold text-gold">Đã sao chép</p>
              ) : null}
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </SectionFrame>
  )
}

export default GiftSection
