
import { HeroSection } from './components/home/Herosection';
import { MissionVision } from './components/home/MissionVision';
import { FeaturedPrograms } from './components/home/FeaturedPrograms';
import Header from "./Header"
import Footer from "./Footer"


export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <Header />
      <HeroSection />
      <MissionVision />
      <FeaturedPrograms />
      <Footer />
    </div>
  );
}


