import './DealMenu.scss';

type Props = {
  onDelete: () => void;
};

export const DealMenu: React.FC<Props> = ({
  onDelete
}) => {
  return (
    <div className="deal-menu">
      <div onClick={onDelete} className="deal-menu__item">
        Delete deal
      </div>

      <div className="deal-menu__item">
        Test option
      </div>
    </div>
  )
}