const IMG_PATH = `${import.meta.env.BASE_URL}img`

export const weddingInfo = {
  couple: 'Ngọc Huân & Thu Hiền',
  dateDisplay: '08 . 08 . 2026',
  dateTarget: '2026-08-08T09:00:00',
  heroImage:
    `${IMG_PATH}/_DSC2251.jpg`,
  audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
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
    role: 'Trưởng Nam',
    name: 'Ngọc Huân',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
  },
  {
    role: 'Út Nữ',
    name: 'Thu Hiền',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85',
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
  `${IMG_PATH}/gallery (3).jpg`,
  `${IMG_PATH}/gallery mid (2).jpg`,
  `${IMG_PATH}/gallery (7).jpg`,
  `${IMG_PATH}/gallery (8).jpg`,
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
