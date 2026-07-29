export function getWeddingCalendar(targetDate) {
  const date = targetDate instanceof Date ? targetDate : new Date(targetDate)
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const weddingDay = date.getDate()
  const firstDay = new Date(year, monthIndex, 1)
  const lastDay = new Date(year, monthIndex + 1, 0)
  const leadingBlanks = (firstDay.getDay() + 6) % 7
  const days = Array.from({ length: lastDay.getDate() }, (_, index) => index + 1)

  return {
    monthLabel: `Tháng ${monthIndex + 1}, ${year}`,
    weddingDay,
    leadingBlanks,
    days,
  }
}
