import { DealCard, IDealCardData } from '../utils/DealCard';
import { DealCategory, IDealCategoryData } from '../utils/DealCategory';
import './Deals.scss';

type Props = {
  dealCategory: IDealCategoryData;
  dealsList: IDealCardData[];
};

export const Deals: React.FC<Props> = ({
  dealCategory,
  dealsList,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, deal: IDealCardData) => {
    e.dataTransfer.setData("application/json", JSON.stringify(deal));
  };

  return (
    <div className="deals">
      <div className="deals__category">
        <DealCategory
          title={dealCategory.title}
          dealsCount={dealCategory.dealsCount}
          weightedAmount={dealCategory.weightedAmount}
          totalAmount={dealCategory.totalAmount}
          color={dealCategory.color}
        />
      </div>

      <div className="deals__list">
        {dealsList.map(deal => (
          <div 
            key={deal.id}
            className="deals__deal-card"
            draggable
            onDragStart={(e) => handleDragStart(e, deal)}
          >
            <DealCard
              id={deal.id}
              category={deal.category}
              name={deal.name}
              isOwned={deal.isOwned}
              logo={deal.logo}
              status={deal.status}
              date={deal.date}
              money={deal.money}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
