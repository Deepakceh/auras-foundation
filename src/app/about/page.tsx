import MissionSection from '@/components/MissionSection'
import AboutSection from '../../components/AboutSection'
import HeroSection from '../../components/HeroSection'
import DonateSection from '@/components/DonateSection'
export default function page() {
  return (
    <>
      <HeroSection title="About Us" currentPage="about" />
      <AboutSection animateOnScroll={false} />
      <MissionSection  />
      <DonateSection/>
    </>
  )
}
