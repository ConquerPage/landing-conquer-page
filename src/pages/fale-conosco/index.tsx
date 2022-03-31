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
} from '../../styles/fale-conosco.style';

export default function FaleConosco() {
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
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
    const profissao = event.target.profissao.value;
    const idade = event.target.idade.value;

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
          profissao,
          idade,
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
      setAge('');
      setProfession('');
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
          <a aria-label="retornar">
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
            <h1>Cadastro</h1>

            {sendedSuccess ? (
              <div>
                <h4>Cadastro Enviado !</h4>
                <span>
                  Cadastro enviado com sucesso! Aguarde que nossa equipe irá
                  efetivar o seu cadastro.
                </span>
              </div>
            ) : (
              <p>
                Para prosseguir até a contratação do seu plano e para o uso do
                construtor de páginas, é necessário que você preenche os dados
                para cadastro.
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
                type="number"
                id="idade"
                name="Idade"
                placeholder="Idade"
                autoComplete="off"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
              <Input
                type="text"
                id="profissao"
                name="Profissão"
                placeholder="Profissão"
                autoComplete="off"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
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
