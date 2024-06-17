import cn from 'classnames';
import './DealCard.scss';
import { EDealCategory } from '../../../data/dealsData';
import { DealMenu } from '../DealMenu';

export enum ECompanyStatus {
  Active,
  Paused,
  Inactive,
};

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
  isOwned,
  logo,
  status,
  date,
  money,
}) => {
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
            className='deal-card__menu'
          >
            <div className="deal-card__menu-dot"/>
            <div className="deal-card__menu-dot"/>
            <div className="deal-card__menu-dot"/>

            <div className="deal-card__menu-dropdown">
              <DealMenu
                onDelete={() => {}}
              />
            </div>
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
