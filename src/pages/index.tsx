//Components
import { SectionHome } from '../components/SectionHome';
import SectionTwo from '../components/SectionTwo';
import { SectionWhyConquerPage } from '../components/SectionWhyConquerPage';

export default function Home() {
  return (
    <>
      <main>
        <SectionHome />
        <SectionTwo />
        <SectionWhyConquerPage />
      </main>
    </>
  );
}
