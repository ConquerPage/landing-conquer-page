interface IContentProps {
  title: string;
  url: string;
}

interface IHeaderProps {
  content: IContentProps[];
}

export const config: IHeaderProps = {
  content: [
    {
      title: 'Conheça',
      url: '/#conheca',
    },
    {
      title: 'Depoimentos',
      url: '/#depoimentos',
    },
    // {
    //   title: 'Planos',
    //   url: '/planos',
    // },
    {
      title: 'Cadastro',
      url: '/cadastro',
    },
  ],
};
