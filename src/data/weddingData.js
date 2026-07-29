const IMG_PATH = `${import.meta.env.BASE_URL}img`
const AUDIO_PATH = `${import.meta.env.BASE_URL}audio`

export const weddingInfo = {
  couple: 'Ngọc Huân & Thu Hiền',
  dateDisplay: '08 . 08 . 2026',
  dateTarget: '2026-08-08T09:00:00',
  heroImage:
    `${IMG_PATH}/cover.jpg`,
  thankYouImage:
    `${IMG_PATH}/thankyou.webp`,
  audioSrc: `${AUDIO_PATH}/beautiful_in_white.mp3`,
}

export const families = [
  {
    side: 'Nhà trai',
    parentTitle: 'Ông Bà',
    parentName: 'Bùi Quốc Dũng & Nguyễn Thị Thao',
    address: '130 Thôn Mới, Dân Hòa, Hà Nội',
  },
  {
    side: 'Nhà gái',
    parentTitle: 'Ông Bà',
    parentName: 'Hà Trí Thành & Lê Thị Duyên',
    address: 'Số 29, Đường Cây Sữa, Cát Động, Thanh Oai, Hà Nội',
  },
]

export const groomBride = [
  {
    role: 'Chú rể',
    name: 'Ngọc Huân',
    image:
      `${IMG_PATH}/chure.webp`,
  },
  {
    role: 'Cô dâu',
    name: 'Thu Hiền',
    image:
      `${IMG_PATH}/codau.webp`,
  },
]

export const ceremony = {
  time: '13:00',
  weekday: 'Thứ Bảy',
  day: '08',
  month: 'Tháng 08',
  year: '2026',
  lunarDate: 'Tức ngày 26 tháng 6 năm Bính Ngọ',
  venue: 'Tư gia nhà trai',
  address: '130 Thôn Mới, Dân Hòa, Hà Nội',
}

export const reception = {
  time: '16:00',
  weekday: 'Thứ Sáu',
  day: '07',
  month: 'Tháng 08',
  year: '2026',
  lunarDate: 'Tức ngày 25 tháng 6 năm Bính Ngọ',
  venue: 'Tư gia nhà trai',
  address: '130 Thôn Mới, Dân Hòa, Hà Nội',
}

export const galleryImages = [
  `${IMG_PATH}/gallery (3).webp`,
  `${IMG_PATH}/gallery mid (2).webp`,
  `${IMG_PATH}/gallery (7).webp`,
  `${IMG_PATH}/gallery (8).webp`,
]

export const giftAccounts = [
  {
    owner: 'Chú Rể',
    accountName: 'BÙI NGỌC HUÂN',
    accountNumber: '0123456789',
    bankName: 'Vietcombank',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=QUAN-0123456789',
  },
  {
    owner: 'Cô Dâu',
    accountName: 'HÀ THU HIỀN',
    accountNumber: '0987654321',
    bankName: 'Techcombank',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=HA-0987654321',
  },
]
