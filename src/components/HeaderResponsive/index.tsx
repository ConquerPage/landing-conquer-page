//Libs
import Link from 'next/link';

//Content
import { config } from '../Header/content';

//Components
import { MenuToggle } from './components/MenuToggle';
import { SwitchToggleTheme } from '../SwitchToggle';

//Styles
import {
  MyHeader,
  HeaderContentAni,
  NavListAni,
  NavItemAni,
  SwitchContainerAni,
} from './styles';
import { useCycle } from 'framer-motion';

interface IHeaderResponsiveProps {
  handleToogleTheme: () => void;
}

export function HeaderResponsive({
  handleToogleTheme,
}: IHeaderResponsiveProps) {
  const [showMenuResponsive, setShowMenuResponsive] = useCycle<boolean>(
    false,
    true,
  );

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
      },
    },
  };

  const ulVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        type: 'linear',
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: '-50%',
      transition: {
        duration: 0.4,
        type: 'spring',
        bounce: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const liVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    <MyHeader showMenuResponsive={showMenuResponsive}>
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

        <MenuToggle
          handleShowMenu={() => setShowMenuResponsive()}
          showMenu={showMenuResponsive}
        />
        <NavListAni
          initial="closed"
          animate={showMenuResponsive ? 'open' : 'closed'}
          variants={ulVariants}
        >
          {config.content.map((i) => (
            <NavItemAni variants={liVariants} key={i.url}>
              <Link href={i.url}>
                <a>{i.title}</a>
              </Link>
            </NavItemAni>
          ))}
          <SwitchContainerAni variants={liVariants}>
            <SwitchToggleTheme handleToogleTheme={handleToogleTheme} />
          </SwitchContainerAni>
        </NavListAni>
      </HeaderContentAni>
    </MyHeader>
  );
}
