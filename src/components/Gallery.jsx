import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'
import { galleryImages } from '../data/weddingData'

function Gallery() {
  return (
    <SectionFrame variant="even" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Album hình cưới"
          title="Những khoảnh khắc yêu thương"
          subtitle="Một vài hình ảnh lưu giữ những ngày thật đẹp trên hành trình yêu thương."
        />
        <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-2" stagger={0.08}>
          {galleryImages.map((image, index) => (
            <Reveal key={image} distance={28} scale={0.97} className="overflow-hidden rounded-[1.5rem] shadow-romantic">
              <img
                src={image}
                alt={`Ảnh cưới ${index + 1}`}
                className="aspect-square w-full object-cover transition duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </SectionFrame>
  )
}

export default Gallery
