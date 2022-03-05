//Libs
import { useState } from 'react';

//icons
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SwitchContainer, SwitchHandleAni } from './styles';

interface ISwitchToggleThemeProps {
  handleToogleTheme: () => void;
}

export function SwitchToggleTheme({
  handleToogleTheme,
}: ISwitchToggleThemeProps) {
  const [isDark, setisDark] = useState(false);

  const toggleSwitch = () => {
    setisDark(!isDark);
    handleToogleTheme();
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <SwitchContainer className="switch" isDark={isDark} onClick={toggleSwitch}>
      <SwitchHandleAni className="handle" transition={spring}>
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </SwitchHandleAni>
    </SwitchContainer>
  );
}
