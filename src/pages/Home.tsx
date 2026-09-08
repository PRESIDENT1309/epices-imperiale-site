import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Collection from '@/components/sections/Collection';
import Storytelling from '@/components/sections/Storytelling';
import SavoirFaire from '@/components/sections/SavoirFaire';
import Vision from '@/components/sections/Vision';
import ImperialGroup from '@/components/sections/ImperialGroup';
import Gallery from '@/components/sections/Gallery';
import Recipes from '@/components/sections/Recipes';
import ProfessionalsCTA from '@/components/sections/ProfessionalsCTA';
import OrderCTA from '@/components/sections/OrderCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Collection />
      <Storytelling />
      <SavoirFaire />
      <Vision />
      <ImperialGroup />
      <Gallery />
      <Recipes />
      <ProfessionalsCTA />
      <OrderCTA />
    </>
  );
}
