import Image from 'next/image';

//Styles
import { Content, CardAni, CardBottom } from './styles';

export function CardDesktop() {
  const contentBoxs = [
    {
      name: 'Lucas Pinheiro',
      profession: 'Advogado Previdenciarista',
      testimonial:
        'Nunca tive muita ligação com tecnologia, eu pensava que teria uma barreira enorme para criar uma página de captura pro meu negócio, quando vi a ConquerPage foi um alívio, fiz em 30 minutos uma página que eu pagava caro pros outros fazerem por mim, Obrigado!',
      avatar: '/images/avatar1.svg',
    },
    {
      name: 'Mônica Aguiar',
      profession: 'Professora de Gastronomia',
      testimonial:
        'Sou nova nesse mundo, então tive que pesquisar bastante plataformas pra criar minha página, procurei um profissional de tecnologia, porém os preços foram muito altos, até que achei vocês, e tudo fluiu bem, sozinha consegui criar minha página e deu tudo certo, fiz meu primeiro lançamento com ótimos resultados.',
      avatar: '/images/avatar2.svg',
    },
    {
      name: 'Luiz Silva',
      profession: 'Corretor de Imóveis',
      testimonial:
        'Sempre tive problema em entender o que é domínio, hospedagem, e já trabalho com digital a alguns anos, e agora conheci a ConquerPage, onde eu só preciso pegar designs prontos e customizar com a minha identidade visual, meu foco é apenas fazer meus textos. Parabéns pelo trabalho incrível!!',
      avatar: '/images/avatar3.svg',
    },
    {
      name: 'Luiz Silva',
      profession: 'Corretor de Imóveis',
      testimonial:
        'Sempre tive problema em entender o que é domínio, hospedagem, e já trabalho com digital a alguns anos, e agora conheci a ConquerPage, onde eu só preciso pegar designs prontos e customizar com a minha identidade visual, meu foco é apenas fazer meus textos. Parabéns pelo trabalho incrível!!',
      avatar: '/images/avatar4.svg',
    },
  ];

  return (
    <Content>
      {contentBoxs.map((item) => (
        <CardAni
          key={item.name}
          variants={{
            visible: {
              opacity: 1,
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <div className="card__iconDepositions">
            <Image
              src="/images/iconDepositions.svg"
              layout="intrinsic"
              width={25}
              height={25}
              alt={item.name}
            />
          </div>
          <p className="card__testimonioal">{item.testimonial}</p>
          <CardBottom>
            <div
              className="card__avatar"
              style={{ width: '90px', height: '90px' }}
            >
              <Image
                src={item.avatar}
                layout="intrinsic"
                width={90}
                height={90}
                alt={item.name}
              />
            </div>
            <div className="card__name">
              <h3>{item.name}</h3>
              <span>{item.profession}</span>
            </div>
          </CardBottom>
        </CardAni>
      ))}
    </Content>
  );
}
