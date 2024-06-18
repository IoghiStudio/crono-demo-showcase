import './Pipelines.scss';
import { OptionsBar } from '../OptionsBar';
import { Deals } from '../Deals';
import { useCallback, useEffect } from 'react';
import { useDealsContext } from '../../contextApi/dealsContext/store';
import { useDealsCategoryContext } from '../../contextApi/dealsCategoryContext/store';
import { IDealCardData } from '../utils/DealCard';
import { EDealCategory, dealsDataList } from '../../data/dealsData';

export const Pipelines: React.FC = () => {
  const {
    dealsQuery,
    showOnlyMine,
    qualifiedDeals,
    demoDeals,
    negotiationDeals,
    contractOutDeals,
    closedWonDeals,
    closedLostDeals,
    setQualifiedDeals,
    setDemoDeals,
    setNegotiationDeals,
    setContractOutDeals,
    setClosedWonDeals,
    setClosedLostDeals,
  } = useDealsContext();

  const {
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
    setClosedLostCategory
  } = useDealsCategoryContext();

  useEffect(() => {
    if (qualifiedDeals) {
      let qualifiedDealsData: IDealCardData[] = dealsDataList
        .filter(deal => deal.category === EDealCategory.Qualified
          && deal.name.toLowerCase().includes(dealsQuery)
        );

      if (showOnlyMine) {
        qualifiedDealsData = qualifiedDealsData
          .filter(deal => deal.isOwned)
      }
    
      setQualifiedDeals(qualifiedDealsData);
    }

    if (demoDeals) {
      let demoDealsData: IDealCardData[] = dealsDataList
        .filter(deal => deal.category === EDealCategory.Demo
          && deal.name.toLowerCase().includes(dealsQuery)
        );

        if (showOnlyMine) {
          demoDealsData = demoDealsData
            .filter(deal => deal.isOwned);
        }
    
      setDemoDeals(demoDealsData);
    }

    if (negotiationDeals) {
      let negotiationDealsData: IDealCardData[] = dealsDataList
        .filter(deal => deal.category === EDealCategory.Negotiation
          && deal.name.toLowerCase().includes(dealsQuery)
        );

        if (showOnlyMine) {
          negotiationDealsData = negotiationDealsData
            .filter(deal => deal.isOwned);
        }
    
      setNegotiationDeals(negotiationDealsData);
    }

    if (contractOutDeals) {
      let contractOutDealsData: IDealCardData[] = dealsDataList
        .filter(deal => deal.category === EDealCategory.ContractOut
          && deal.name.toLowerCase().includes(dealsQuery)
        );

        if (showOnlyMine) {
          contractOutDealsData = contractOutDealsData
            .filter(deal => deal.isOwned);
        }
    
      setContractOutDeals(contractOutDealsData);
    }

    if (closedWonDeals) {
      let closedWonDealsData: IDealCardData[] = dealsDataList
        .filter(deal => deal.category === EDealCategory.ClosedWon
          && deal.name.toLowerCase().includes(dealsQuery)
        );

        if (showOnlyMine) {
          closedWonDealsData = closedWonDealsData
            .filter(deal => deal.isOwned);
        }
    
      setClosedWonDeals(closedWonDealsData);
    }

    if (closedLostDeals) {
      let closedLostDealsData: IDealCardData[] = dealsDataList
        .filter(deal => deal.category === EDealCategory.ClosedLost
          && deal.name.toLowerCase().includes(dealsQuery)
        );

        if (showOnlyMine) {
          closedLostDealsData = closedLostDealsData
            .filter(deal => deal.isOwned);
        }
    
      setClosedLostDeals(closedLostDealsData);
    }
  }, [dealsQuery, showOnlyMine]);

  useEffect(() => {
    // instead of fetching we filter the deals from data folder and save it globally to their category
    const qualifiedDealsData: IDealCardData[] = dealsDataList
      .filter(deal => deal.category === EDealCategory.Qualified);

    const demoDealsData: IDealCardData[] = dealsDataList
    .filter(deal => deal.category === EDealCategory.Demo);

    const negotiationDealsData: IDealCardData[] = dealsDataList
    .filter(deal => deal.category === EDealCategory.Negotiation);

    const contractOutDealsData: IDealCardData[] = dealsDataList
    .filter(deal => deal.category === EDealCategory.ContractOut);

    const closedWonDealsData: IDealCardData[] = dealsDataList
    .filter(deal => deal.category === EDealCategory.ClosedWon);

    const closedLostDealsData: IDealCardData[] = dealsDataList
    .filter(deal => deal.category === EDealCategory.ClosedLost);

    setQualifiedDeals(qualifiedDealsData);
    setDemoDeals(demoDealsData);
    setNegotiationDeals(negotiationDealsData);
    setContractOutDeals(contractOutDealsData);
    setClosedWonDeals(closedWonDealsData);
    setClosedLostDeals(closedLostDealsData);
  }, []);

  useEffect(() => {
    if (!qualifiedDeals) return;

    let weighted = 0;
    const length = qualifiedDeals?.length || 0;

    for (let deal of qualifiedDeals) {
      weighted += deal.money;
    }

    setQualifiedCategory(state => ({
      ...state,
      dealsCount: length,
      weightedAmount: weighted,
    }));
    // we update categories data after the list of deals change
  }, [qualifiedDeals]);

  useEffect(() => {
    if (!demoDeals) return;

    let weighted = 0;
    const length = demoDeals?.length || 0;

    for (let deal of demoDeals) {
      weighted += deal.money;
    }

    setDemoCategory({
      ...demoCategory,
      dealsCount: length,
      weightedAmount: weighted,
    });
  }, [demoDeals]);
  
  useEffect(() => {
    if (!negotiationDeals) return;

    let weighted = 0;
    const length = negotiationDeals?.length || 0;

    for (let deal of negotiationDeals) {
      weighted += deal.money;
    }

    setNegotiationCategory({
      ...negotiationCategory,
      dealsCount: length,
      weightedAmount: weighted,
    });
  }, [negotiationDeals]);
  
  useEffect(() => {
    if (!contractOutDeals) return;

    let weighted = 0;
    const length = contractOutDeals?.length || 0;

    for (let deal of contractOutDeals) {
      weighted += deal.money;
    }

    setContractOutCategory({
      ...contractOutCategory,
      dealsCount: length,
      weightedAmount: weighted,
    });
  }, [contractOutDeals]);
  
  useEffect(() => {
    if (!closedWonDeals) return;

    let weighted = 0;
    const length = closedWonDeals?.length || 0;

    for (let deal of closedWonDeals) {
      weighted += deal.money;
    }

    setClosedWonCategory({
      ...closedWonCategory,
      dealsCount: length,
      weightedAmount: weighted,
    });
  }, [closedWonDeals]);
  
  useEffect(() => {
    if (!closedLostDeals) return;

    let weighted = 0;
    const length = closedLostDeals?.length || 0;

    for (let deal of closedLostDeals) {
      weighted += deal.money;
    }

    setClosedLostCategory({
      ...closedLostCategory,
      dealsCount: length,
      weightedAmount: weighted,
    });
  }, [closedLostDeals]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>, category: EDealCategory) => {
    const droppedDealData: IDealCardData = JSON.parse(e.dataTransfer.getData("application/json"));

    if (!droppedDealData.isOwned) {
      console.log("Only owned deals can be moved.");
      return;
    }

    switch (droppedDealData.category) {
      case EDealCategory.Qualified:
        if (qualifiedDeals) {
          const updatedQualifiedDeals = qualifiedDeals.filter(
            (deal) => deal.id !== droppedDealData.id
          );
          setQualifiedDeals(updatedQualifiedDeals);
        }
        break;
      case EDealCategory.Demo:
        if (demoDeals) {
          const updatedDemoDeals = demoDeals.filter(
            (deal) => deal.id !== droppedDealData.id
          );
          setDemoDeals(updatedDemoDeals);
        }
        break;
      case EDealCategory.Negotiation:
        if (negotiationDeals) {
          const updatedNegotiationDeals = negotiationDeals.filter(
            (deal) => deal.id !== droppedDealData.id
          );
          setNegotiationDeals(updatedNegotiationDeals);
        }
        break;
      case EDealCategory.ContractOut:
        if (contractOutDeals) {
          const updatedContractOutDeals = contractOutDeals.filter(
            (deal) => deal.id !== droppedDealData.id
          );
          setContractOutDeals(updatedContractOutDeals);
        }
        break;
      case EDealCategory.ClosedWon:
        if (closedWonDeals) {
          const updatedClosedWonDeals = closedWonDeals.filter(
            (deal) => deal.id !== droppedDealData.id
          );
          setClosedWonDeals(updatedClosedWonDeals);
        }
        break;
      case EDealCategory.ClosedLost:
        if (closedLostDeals) {
          const updatedClosedLostDeals = closedLostDeals.filter(
            (deal) => deal.id !== droppedDealData.id
          );
          setClosedLostDeals(updatedClosedLostDeals);
        }
        break;
      default:
        break;
    }

    switch (category) {
      case EDealCategory.Qualified:
        if (qualifiedDeals) {
          setQualifiedDeals([
            ...qualifiedDeals,
            { ...droppedDealData, category: EDealCategory.Qualified },
          ]);
        }
        break;
      case EDealCategory.Demo:
        if (demoDeals) {
          setDemoDeals([
            ...demoDeals,
            { ...droppedDealData, category: EDealCategory.Demo },
          ]);
        }
        break;
      case EDealCategory.Negotiation:
        if (negotiationDeals) {
          setNegotiationDeals([
            ...negotiationDeals,
            { ...droppedDealData, category: EDealCategory.Negotiation },
          ]);
        }
        break;
      case EDealCategory.ContractOut:
        if (contractOutDeals) {
          setContractOutDeals([
            ...contractOutDeals,
            { ...droppedDealData, category: EDealCategory.ContractOut },
          ]);
        }
        break;
      case EDealCategory.ClosedWon:
        if (closedWonDeals) {
          setClosedWonDeals([
            ...closedWonDeals,
            { ...droppedDealData, category: EDealCategory.ClosedWon },
          ]);
        }
        break;
      case EDealCategory.ClosedLost:
        if (closedLostDeals) {
          setClosedLostDeals([
            ...closedLostDeals,
            { ...droppedDealData, category: EDealCategory.ClosedLost },
          ]);
        }
        break;
      default:
        break;
    }
  }, [qualifiedDeals, demoDeals, negotiationDeals, contractOutDeals, closedWonDeals, closedLostDeals]);

  return (
    <div className="pipelines">
      <div className="pipelines__options-bar">
        <OptionsBar />
      </div>

      <div className="pipelines__deals">
        <div
          id="dropzone"
          onDrop={(e) => handleDrop(e, EDealCategory.Qualified)}
          onDragOver={(e) => e.preventDefault()}
          className="pipelines__deal"
        >
          <Deals
            dealCategory={qualifiedCategory}
            dealsList={qualifiedDeals || []}
          />
        </div>

        <div 
          id="dropzone"
          onDrop={(e) => handleDrop(e, EDealCategory.Demo)}
          onDragOver={(e) => e.preventDefault()}
          className="pipelines__deal"
        >
          <Deals
            dealCategory={demoCategory}
            dealsList={demoDeals || []}
          />
        </div>

        <div
          id="dropzone"
          onDrop={(e) => handleDrop(e, EDealCategory.Negotiation)}
          onDragOver={(e) => e.preventDefault()}
          className="pipelines__deal"
        >
          <Deals
            dealCategory={negotiationCategory}
            dealsList={negotiationDeals || []}
          />
        </div>

        <div
          id="dropzone"
          onDrop={(e) => handleDrop(e, EDealCategory.ContractOut)}
          onDragOver={(e) => e.preventDefault()}
          className="pipelines__deal"
        >
          <Deals
            dealCategory={contractOutCategory}
            dealsList={contractOutDeals || []}
          />
        </div>

        <div
          id="dropzone"
          onDrop={(e) => handleDrop(e, EDealCategory.ClosedWon)}
          onDragOver={(e) => e.preventDefault()}
          className="pipelines__deal"
        >
          <Deals
            dealCategory={closedWonCategory}
            dealsList={closedWonDeals || []}
          />
        </div>

        <div
          id="dropzone"
          onDrop={(e) => handleDrop(e, EDealCategory.ClosedLost)}
          onDragOver={(e) => e.preventDefault()} 
          className="pipelines__deal"
        >
          <Deals
            dealCategory={closedLostCategory}
            dealsList={closedLostDeals || []}
        />
        </div>
      </div>
    </div>
  )
};
