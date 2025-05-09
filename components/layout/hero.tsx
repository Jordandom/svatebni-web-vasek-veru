import Image from 'next/image'

export const Hero = () => (
  <Image
    className="mx-auto my-0 h-auto max-w-full lg:h-screen"
    priority
    src="/hero-banner.webp"
    width={1920}
    height={1080}
    alt="Vašek a Veru úvodní obrázek"
  />
)
