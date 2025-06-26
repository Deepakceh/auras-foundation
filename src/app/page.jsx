import BannerSection from '../components/BannerSection'
import AboutSection from '../components/AboutSection'
import MissionSection from '../components/MissionSection'
import DonateSection from '../components/DonateSection'
// import ServiceSection from '../components/ServiceSection'
export default function page() {

  return (
    <>
      <BannerSection />
      <AboutSection animateOnScroll={true} />
      <MissionSection/>
      <DonateSection/>
      {/* <ServiceSection /> */}
    </>
  )
}
