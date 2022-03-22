import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerHome from '../../../public/images/imageSectionHome.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer, ContentAni, ContentLeftAni, ContentRightAni, ButtonRedirectSection } from './styles';

export function SectionHome() {
  return (
    <SectionContainer>
      <ContentAni>
        <ContentLeftAni>

          <h1>Crie páginas que vendam por você</h1>
          <p>
            Descubra que com alguns cliques, de forma simples, você conseguirá criar
            páginas irresistíveis para transformar seus visitantes em clientes. <Link href="#conheca" passHref><strong><i><u>Saiba Mais</u></i></strong></Link>
          </p>

          <Link href="/planos" passHref>
            <a>
              <span id="first-text-button">Quero vender mais</span>
              <span id="second-text-button">
                COMECE GRÁTIS
              </span>
            </a>
          </Link>
        </ContentLeftAni>
        <ContentRightAni>
          <Image src={BannerHome} alt="Crie páginas de alta conversão" width={0} height={0} layout="responsive" priority />
        </ContentRightAni>
      </ContentAni>
      <Link href="#como-funciona" passHref aria-label="Como funciona">
        <ButtonRedirectSection aria-label="conheca">
          <FontAwesomeIcon icon={faArrowDown} />
        </ButtonRedirectSection>
      </Link>
    </SectionContainer>
  );
}
