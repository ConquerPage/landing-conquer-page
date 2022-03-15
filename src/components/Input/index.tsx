import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
}

export function Input({ id, placeholder, ...rest }: InputProps) {
  return (
    <Container>
      <input id={id} {...rest} placeholder={placeholder} />
      <label htmlFor={id}>{placeholder}</label>
    </Container>
  );
}
