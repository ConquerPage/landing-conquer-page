//Libs
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

//Components
import { Input } from '../../components/Input';

//Hooks
import { useTheme } from '../../hooks/useThemes';

//Styles
import {
  HeaderAni,
  SectionContainer,
  ContentAni,
  ContentLeft,
  FormContactUs,
  ContentRight,
} from './styles';

export default function FaleConosco() {
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendedSuccess, setSendedSuccess] = useState(false);

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.7,
        bounce: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const telefone = event.target.telefone.value;

    try {
      setSendingEmail(true);
      setSendedSuccess(false);
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          telefone,
        }),
      });
      setSendingEmail(false);
      setSendedSuccess(true);
    } catch (error) {
      setSendingEmail(false);
      setSendedSuccess(false);
      alert('Erro ao Enviar Email');
    }
  }, []);

  //clear states
  useEffect(() => {
    return () => {
      setName('');
      setEmail('');
      setPhone('');
      setSendingEmail(false);
      setSendedSuccess(false);
    };
  }, []);

  return (
    <>
      <HeaderAni
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={headerVariants}
      >
        <Link href="/">
          <a aria-label='retornar'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </Link>

        <span>
          Conquer<strong>Page</strong>
        </span>
      </HeaderAni>
      <SectionContainer>
        <ContentAni
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          variants={contentVariants}
        >
          <ContentLeft>
            <h1>Fale Conosco</h1>

            {sendedSuccess ? (
              <div>
                <h4>Mensagem Enviada !</h4>
                <span>
                  Sua mensagem foi enviada com sucesso. Agradecemos seu
                  feedback.
                </span>
              </div>
            ) : (
              <p>
                Gostou do que viu ? Não perca mais tempo, preencha o formuĺario
                e garanta seu acesso.
              </p>
            )}

            <FormContactUs onSubmit={handleSubmit}>
              <Input
                type="text"
                id="nome"
                name="Nome"
                placeholder="Nome"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                id="email"
                name="Email"
                placeholder="E-mail"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="number"
                id="telefone"
                name="Telefone"
                placeholder="Telefone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <button type="submit">
                {sendingEmail ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  'Enviar'
                )}
              </button>
            </FormContactUs>
          </ContentLeft>
          <ContentRight>
            <Image
              src={
                theme === 'light'
                  ? '/images/imageSectionContactUsLight.svg'
                  : '/images/imageSectionContactUsDark.svg'
              }
              layout="fill"
              alt="fale conosco"
            />
          </ContentRight>
        </ContentAni>
      </SectionContainer>
    </>
  );
}
