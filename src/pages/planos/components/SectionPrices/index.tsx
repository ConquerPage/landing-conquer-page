//Components
import CardPrices from './components/CardPrices';

//Styles
import { SectionContainer, SectionHeaderAni } from './styles';

export default function SectionPrices() {
  const contentVariants = {
    hidden: {
      y: -100,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <SectionContainer>
      <SectionHeaderAni
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={contentVariants}
      >
        <h1>Conheça nossos Planos</h1>
        <span>Escolha o plano que mais se adeque a sua necessidade</span>
      </SectionHeaderAni>
      <CardPrices />
    </SectionContainer>
  );
}
