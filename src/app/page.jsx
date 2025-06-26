import BannerSection from '../components/BannerSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import EnrollmentSection from '../components/EnrollmentSection'
export default function page() {

  return (
    <>
      <BannerSection />
      <AboutSection animateOnScroll={true} />
      <ServiceSection />
      <EnrollmentSection />
    </>
  )
}
