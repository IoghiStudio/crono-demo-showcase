import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";
import { IDealCardData } from "../../components/utils/DealCard";

interface ContextProps {
  dealsQuery: string;
  showOnlyMine: boolean;
  qualifiedDeals: IDealCardData[] | null;
  demoDeals: IDealCardData[] | null;
  negotiationDeals: IDealCardData[] | null;
  contractOutDeals: IDealCardData[] | null;
  closedWonDeals: IDealCardData[] | null;
  closedLostDeals: IDealCardData[] | null;
  setDealsQuery: Dispatch<SetStateAction<string>>;
  setShowOnlyMine: Dispatch<SetStateAction<boolean>>;
  setQualifiedDeals: Dispatch<SetStateAction<IDealCardData[] | null>>;
  setDemoDeals: Dispatch<SetStateAction<IDealCardData[] | null>>;
  setNegotiationDeals: Dispatch<SetStateAction<IDealCardData[] | null>>;
  setContractOutDeals: Dispatch<SetStateAction<IDealCardData[] | null>>;
  setClosedWonDeals: Dispatch<SetStateAction<IDealCardData[] | null>>;
  setClosedLostDeals: Dispatch<SetStateAction<IDealCardData[] | null>>;
};

const DealsContext = createContext<ContextProps>({
  dealsQuery: '',
  showOnlyMine: false,
  qualifiedDeals: null,
  demoDeals: null,
  negotiationDeals: null,
  contractOutDeals: null,
  closedWonDeals: null,
  closedLostDeals: null,
  setDealsQuery: () => {},
  setShowOnlyMine: () => {},
  setQualifiedDeals: () => {},
  setDemoDeals: () => {},
  setNegotiationDeals: () => {},
  setContractOutDeals: () => {},
  setClosedWonDeals: () => {},
  setClosedLostDeals: () => {},
});

export const useDealsContext = () => useContext(DealsContext);

export const DealsContextProvider = ({ children } : { children: ReactNode}) => {
  const [dealsQuery, setDealsQuery] = useState<string>('');
  const [showOnlyMine, setShowOnlyMine] = useState<boolean>(false);
  const [qualifiedDeals, setQualifiedDeals] = useState<IDealCardData[] | null>(null);
  const [demoDeals, setDemoDeals] = useState<IDealCardData[] | null>(null);
  const [negotiationDeals, setNegotiationDeals] = useState<IDealCardData[] | null>(null);
  const [contractOutDeals, setContractOutDeals] = useState<IDealCardData[] | null>(null);
  const [closedWonDeals, setClosedWonDeals] = useState<IDealCardData[] | null>(null);
  const [closedLostDeals, setClosedLostDeals] = useState<IDealCardData[] | null>(null);

  return (
    <DealsContext.Provider
      value={{
        dealsQuery,
        showOnlyMine,
        qualifiedDeals,
        demoDeals,
        negotiationDeals,
        contractOutDeals,
        closedWonDeals,
        closedLostDeals,
        setDealsQuery,
        setShowOnlyMine,
        setQualifiedDeals,
        setDemoDeals,
        setNegotiationDeals,
        setContractOutDeals,
        setClosedWonDeals,
        setClosedLostDeals,
      }}
    >
      {children}
    </DealsContext.Provider>
  )
}