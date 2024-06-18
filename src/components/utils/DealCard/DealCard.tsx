import cn from 'classnames';
import './DealCard.scss';
import { ECompanyStatus, EDealCategory } from '../../../data/dealsData';
import { DealMenu } from '../DealMenu';
import { useMenuContext } from '../../../contextApi/menuContext/store';
import { useDealsContext } from '../../../contextApi/dealsContext/store';
import { useCallback, useEffect } from 'react';

export interface IDealCardData {
  id: number;
  category: EDealCategory
  name: string;
  isOwned: boolean;
  logo: string;
  status: ECompanyStatus;
  date: string;
  money: number;
};

// type Props = Omit<IDealCardData, 'id' | 'category'>;

export const DealCard: React.FC<IDealCardData> = ({
  id,
  name,
  category,
  isOwned,
  logo,
  status,
  date,
  money,
}) => {
  const {
    dealMenuId,
    setDealMenuId,
  } = useMenuContext();

  const {
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

  const handleOnDelete = useCallback((id: number, category: EDealCategory) => {
    switch(category) {
      case EDealCategory.Qualified:
        if (!qualifiedDeals) return;
        setQualifiedDeals(qualifiedDeals.filter(deal => deal.id !== id));
        break;
  
      case EDealCategory.Demo:
        if (!demoDeals) return;
        setDemoDeals(demoDeals.filter(deal => deal.id !== id));
        break;
  
      case EDealCategory.Negotiation:
        if (!negotiationDeals) return;
        setNegotiationDeals(negotiationDeals.filter(deal => deal.id !== id));
        break;
  
      case EDealCategory.ContractOut:
        if (!contractOutDeals) return;
        setContractOutDeals(contractOutDeals.filter(deal => deal.id !== id));
        break;
  
      case EDealCategory.ClosedWon:
        if (!closedWonDeals) return;
        setClosedWonDeals(closedWonDeals.filter(deal => deal.id !== id));
        break;
  
      case EDealCategory.ClosedLost:
        if (!closedLostDeals) return;
        setClosedLostDeals(closedLostDeals.filter(deal => deal.id !== id));
        break;
  
      default:
        break;
    }
  
    setDealMenuId(null);
  }, [
    qualifiedDeals, demoDeals, negotiationDeals, contractOutDeals, 
    closedWonDeals, closedLostDeals, 
    setQualifiedDeals, setDemoDeals, setNegotiationDeals, 
    setContractOutDeals, setClosedWonDeals, setClosedLostDeals
  ]);
  


  return (
    <div className="deal-card">
      <div className="deal-card__section">
        <h4 className="deal-card__name">
          {name.length > 27 ? `${name.slice(0, 26)}...` : name}
        </h4>
        {!isOwned ? (
          <div className="deal-card__not-owned-icon"/>
        ) : (
          <div
            onClick={() => {
              if (dealMenuId === id) {
                setDealMenuId(null);
                return;
              }

              setDealMenuId(id);
            }}
            className={cn('deal-card__menu', {
              'deal-card__menu--active': dealMenuId === id
            })}
          >
            {dealMenuId === id && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="deal-card__menu-dropdown"
              >
                <DealMenu
                  onDelete={() => handleOnDelete(id, category)}
                />
              </div>
            )}

            <div className="deal-card__menu-dot"/>
            <div className="deal-card__menu-dot"/>
            <div className="deal-card__menu-dot"/>
          </div>
        )}
      </div>

      <div className="deal-card__section">
        <div className="deal-card__info">
          <div className="deal-card__logo-container">
            <img 
              src={logo} 
              alt='logo' 
              className="deal-card__logo"
            />
            
            <div className={cn("deal-card__status", {
              "deal-card__status--active": status === ECompanyStatus.Active,
              "deal-card__status--paused": status === ECompanyStatus.Paused,
              "deal-card__status--inactive": status === ECompanyStatus.Inactive,
            })}/>
          </div>

          <div className="deal-card__date">
            <div className="deal-card__date-icon"/>

            <p className="deal-card__date-text">
              {date}
            </p>
          </div>
        </div>

        <div className="deal-card__money">
          {`$${money.toLocaleString('en-US')}`}
        </div>
      </div>
    </div>
  )
}
