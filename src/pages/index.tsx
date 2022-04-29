//Components
import { SectionHome } from '../components/SectionHome';
import { SectionHowItWorks } from '../components/SectionHowItWorks';
import { SectionWhyConquerPage } from '../components/SectionWhyConquerPage';
import { SectionDepositions } from '../components/SectionDepositions';
import { CommonQuestions } from '../components/CommonQuestions';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <SectionHome />
        <SectionHowItWorks />
        <SectionWhyConquerPage />
        <SectionDepositions />
        <CommonQuestions />
        <Footer />
      </main>
    </>
  );
}
