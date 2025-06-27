import BannerSection from '../components/BannerSection'
import AboutSection from '../components/AboutSection'
import MissionSection from '../components/MissionSection'
import ServiceSection from '../components/ServiceSection'
import DonateSection from '../components/DonateSection'
export default function page() {

  return (
    <>
      <BannerSection />
      <AboutSection animateOnScroll={true} />
      <MissionSection/>
      <ServiceSection />
      <DonateSection/>
    </>
  )
}
