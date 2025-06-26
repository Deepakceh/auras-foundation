import AboutSection from '../../components/AboutSection'
import HeroSection from '../../components/HeroSection'
export default function page() {
  return (
    <>
      <HeroSection title="About Us" currentPage="about" />
      <AboutSection animateOnScroll={false} />
    </>
  )
}
