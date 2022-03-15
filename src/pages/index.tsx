//Components
import { SectionHome } from '../components/SectionHome';
import { SectionHowItWorks } from '../components/SectionHowItWorks';
import { SectionWhyConquerPage } from '../components/SectionWhyConquerPage';
import { SectionDepositions } from '../components/SectionDepositions';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <SectionHome />
        <SectionHowItWorks />
        <SectionWhyConquerPage />
        <SectionDepositions />
        <Footer />
      </main>
    </>
  );
}
