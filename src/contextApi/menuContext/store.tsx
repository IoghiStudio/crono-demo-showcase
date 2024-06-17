import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";

interface ContextProps {
  isMenuOpened: boolean;
  dealMenuId: number | null;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
  setDealMenuId: Dispatch<SetStateAction<number | null>>;
};

const MenuContext = createContext<ContextProps>({
  isMenuOpened: false,
  dealMenuId: null,
  setIsMenuOpened: () => {},
  setDealMenuId: () => {}
});

export const useMenuContext = () => useContext(MenuContext);

export const MenuContextProvider = ({ children } : { children: ReactNode}) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [dealMenuId, setDealMenuId] = useState<number | null>(null);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpened,
        dealMenuId,
        setIsMenuOpened,
        setDealMenuId
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}