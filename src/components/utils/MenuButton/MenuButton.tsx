import './MenuButton.scss';
import { useState } from 'react';
import cn from 'classnames';
import { useMenuContext } from '../../../contextApi/menuContext/store';

export const MenuButton: React.FC = () => {
  const [onHover, setOnHover] = useState<boolean>(false);

  const {
    isMenuOpened,
    setIsMenuOpened
  } = useMenuContext();

  return (
    <div
      className={"menu-button"}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => setIsMenuOpened(!isMenuOpened)}
    >
      <div className={cn("menu-button__line", {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-1": isMenuOpened,
        }
      )}/>

      <div className={cn("menu-button__line", "menu-button__line--2", {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-2": isMenuOpened,
        }
      )}/>

      <div className={cn(
        "menu-button__line",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-3": isMenuOpened,
        }
      )}/>
    </div>
  )
};
