import { SectionHome } from "../components/SectionHome";
import SectionHowItWorks from "../components/SectionHowItWorks";
//Components
import { SectionWhyConquerPage } from '../components/SectionWhyConquerPage';

export default function Home() {
  return (
    <>
      <main>
        <SectionHome />
        <SectionHowItWorks />
        <SectionWhyConquerPage />
      </main>
    </>
  );
}
