const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export function getCountdownParts(targetDate, nowDate = new Date()) {
  const target = targetDate instanceof Date ? targetDate : new Date(targetDate)
  const now = nowDate instanceof Date ? nowDate : new Date(nowDate)
  const diff = Math.max(target.getTime() - now.getTime(), 0)

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  }
}
