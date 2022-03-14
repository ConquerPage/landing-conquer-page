import React from 'react';

import Link from 'next/link';

import { FooterContent, Content } from './styles';

export function Footer() {
  return (
    <Content>
      <span id="title">
        Conquer<strong>Page</strong>
      </span>

      <FooterContent>
        <Link href="/#conheca">
          <a>Conheça</a>
        </Link>
        <Link href="/#beneficios">
          <a>Benefícios</a>
        </Link>
        <Link href="/#depoimentos" passHref>
          <a>Depoimentos</a>
        </Link>
        <Link href="/planos" passHref>
          <a>Planos</a>
        </Link>
        <Link href="/#conheca" passHref>
          <a>Fale Conosco</a>
        </Link>
      </FooterContent>
    </Content>
  );
}

export default Footer;
