import './Menu.scss';
import cn from "classnames";
import { Nav } from "../Nav";
import { useMenuContext } from '../../contextApi/menuContext/store';

export const Menu = () => {
  const {
    isMenuOpened,
  } = useMenuContext();

  return (
    <div className={cn(
      "menu",
      {
        "menu--active": isMenuOpened
      }
    )}>
      <Nav />
    </div>
  )
};