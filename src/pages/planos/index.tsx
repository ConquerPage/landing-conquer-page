//Components
import { Footer } from '../../components/Footer';
import SectionPrices from './components/SectionPrices';
import { SectionSatisfaction } from './components/SectionSatisfaction';

export default function Planos() {
  return (
    <main>
      <SectionPrices />
      <SectionSatisfaction />
      <Footer showCTA={false} />
    </main>
  );
}
