import './DealCategory.scss';
import cn from 'classnames';

export enum EDealCategoryColors {
  Rose,
  Purple,
  Blue,
  Yellow,
  Green,
  Pink,
};

export interface IDealCategoryData {
  id: number;
  title: string;
  dealsCount: number;
  weightedAmount: number;
  totalAmount: number;
  color: EDealCategoryColors;
};

type Props = Omit<IDealCategoryData, 'id'>;

export const DealCategory: React.FC<Props> = ({
  title,
  dealsCount,
  weightedAmount,
  totalAmount,
  color,
}) => (
  <div className={cn("deal-category", {
    "deal-category--rose": color === EDealCategoryColors.Rose,
    "deal-category--purple": color === EDealCategoryColors.Purple,
    "deal-category--blue": color === EDealCategoryColors.Blue,
    "deal-category--yellow": color === EDealCategoryColors.Yellow,
    "deal-category--green": color === EDealCategoryColors.Green,
    "deal-category--pink": color === EDealCategoryColors.Pink,
  })}>
    <div className="deal-category__section">
      <h2 className="deal-category__title">
        {title}
      </h2>

      <div className={cn("deal-category__count", {
        "deal-category__count--rose": color === EDealCategoryColors.Rose,
        "deal-category__count--purple": color === EDealCategoryColors.Purple,
        "deal-category__count--blue": color === EDealCategoryColors.Blue,
        "deal-category__count--yellow": color === EDealCategoryColors.Yellow,
        "deal-category__count--green": color === EDealCategoryColors.Green,
        "deal-category__count--pink": color === EDealCategoryColors.Pink,
      })}>
        {dealsCount}
      </div>
    </div>

    <div className="deal-category__section">
      <div className="deal-category__left">
        <div className="deal-category__info-icon"/>

        <div className="deal-category__weight">
          {`Weighted: $${weightedAmount.toLocaleString('en-US')}`}
        </div>
      </div>

      <div className="deal-category__total">
        {`$${totalAmount.toLocaleString('en-US')}`}
      </div>
    </div>
  </div>
)