import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";
import { IDealCategoryData } from "../../components/utils/DealCategory";
import { dealsCategoriesData } from "../../data/dealsCategoriesData";

interface ContextProps {
  qualifiedCategory: IDealCategoryData;
  demoCategory: IDealCategoryData;
  negotiationCategory: IDealCategoryData;
  contractOutCategory: IDealCategoryData;
  closedWonCategory: IDealCategoryData;
  closedLostCategory: IDealCategoryData;
  setQualifiedCategory: Dispatch<SetStateAction<IDealCategoryData>>;
  setDemoCategory: Dispatch<SetStateAction<IDealCategoryData>>;
  setNegotiationCategory: Dispatch<SetStateAction<IDealCategoryData>>;
  setContractOutCategory: Dispatch<SetStateAction<IDealCategoryData>>;
  setClosedWonCategory: Dispatch<SetStateAction<IDealCategoryData>>;
  setClosedLostCategory: Dispatch<SetStateAction<IDealCategoryData>>;
};

const DealsCategoryContext = createContext<ContextProps>({
  qualifiedCategory: dealsCategoriesData[0],
  demoCategory: dealsCategoriesData[1],
  negotiationCategory: dealsCategoriesData[2],
  contractOutCategory: dealsCategoriesData[3],
  closedWonCategory: dealsCategoriesData[4],
  closedLostCategory: dealsCategoriesData[5],
  setQualifiedCategory: () => {},
  setDemoCategory: () => {},
  setNegotiationCategory: () => {},
  setContractOutCategory: () => {},
  setClosedWonCategory: () => {},
  setClosedLostCategory: () => {},
});

export const useDealsCategoryContext = () => useContext(DealsCategoryContext);

export const DealsCategoryContextProvider = ({ children } : { children: ReactNode}) => {
  const [qualifiedCategory, setQualifiedCategory] = useState<IDealCategoryData>(dealsCategoriesData[0]);
  const [demoCategory, setDemoCategory] = useState<IDealCategoryData>(dealsCategoriesData[1]);
  const [negotiationCategory, setNegotiationCategory] = useState<IDealCategoryData>(dealsCategoriesData[2]);
  const [contractOutCategory, setContractOutCategory] = useState<IDealCategoryData>(dealsCategoriesData[3]);
  const [closedWonCategory, setClosedWonCategory] = useState<IDealCategoryData>(dealsCategoriesData[4]);
  const [closedLostCategory, setClosedLostCategory] = useState<IDealCategoryData>(dealsCategoriesData[5]);

  return (
    <DealsCategoryContext.Provider
      value={{
        qualifiedCategory,
        demoCategory,
        negotiationCategory,
        contractOutCategory,
        closedWonCategory,
        closedLostCategory,
        setQualifiedCategory,
        setDemoCategory,
        setNegotiationCategory,
        setContractOutCategory,
        setClosedWonCategory,
        setClosedLostCategory,
      }}
    >
      {children}
    </DealsCategoryContext.Provider>
  )
}