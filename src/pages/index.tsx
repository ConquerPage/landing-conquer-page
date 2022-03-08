//Components
import { SectionHome } from '../components/SectionHome';
import SectionTwo from '../components/SectionTwo';
import { SectionWhyConquerPage } from '../components/SectionWhyConquerPage';
import { SectionDepositions } from "../components/SectionDepositions";

export default function Home() {
  return (
    <>
      <main>
        <SectionHome />
        <SectionTwo />
        <SectionWhyConquerPage />
        <SectionDepositions />
      </main>
    </>
  );
}
