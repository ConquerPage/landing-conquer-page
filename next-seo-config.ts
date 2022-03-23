const title = 'ConquerPage - Crie páginas que vendam por você';
const description =
  'Descubra que com alguns cliques, de forma simples, você conseguirá criar páginas irresistíveis para transformar um simples visitante em um cliente. Conheça nossos planos agora! Hora de decolar o seu negócio.';

export const SEO = {
  title,
  canonical: 'https://conquerpage.com.br',
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://conquerpage.com.br',
    title,
    description,
    images: [
      {
        url: '/images/imageMetatag.png',
        alt: title,
        width: 1200,
        height: 628,
      },
    ],
  },
};
