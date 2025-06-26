import HeroSection from '../../components/HeroSection'
import DonateSection from '@/components/DonateSection'
export default function page() {
    return (
        <>
            <HeroSection title="Donate" currentPage="donate" />
            <DonateSection />
        </>)
}
