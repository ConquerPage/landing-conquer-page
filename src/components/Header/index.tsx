//Content
import { config } from './content';

//Components
import { SwitchToggleTheme } from '../SwitchToggle';

//Styles
import {
  MyHeader,
  HeaderContentAni,
  NavList,
  NavItemAni,
  SwitchContainerAni,
} from './styles';
import Link from 'next/link';

interface IHeaderResponsiveProps {
  handleToogleTheme: () => void;
}

export function Header({ handleToogleTheme }: IHeaderResponsiveProps) {
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
        duration: 0.6,
        bounce: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const liVariants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MyHeader>
      <HeaderContentAni
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={headerVariants}
      >
        <Link href="/">
          <a aria-label="retornar">
            <span>
              Conquer<strong>Page</strong>
            </span>
          </a>
        </Link>
        <NavList>
          {config.content.map((i) => (
            <NavItemAni
              variants={liVariants}
              transition={{ duration: 0.4 }}
              key={i.url}
            >
              <Link href={i.url}>
                <a>{i.title}</a>
              </Link>
            </NavItemAni>
          ))}
        </NavList>
        <SwitchContainerAni variants={liVariants}>
          <SwitchToggleTheme handleToogleTheme={handleToogleTheme} />
        </SwitchContainerAni>
      </HeaderContentAni>
    </MyHeader>
  );
}
