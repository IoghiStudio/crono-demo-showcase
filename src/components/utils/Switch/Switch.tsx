import './Switch.scss';
import cn from 'classnames';

type Props = {
  isActive: boolean;
};

export const Switch: React.FC<Props> = ({ isActive }) => (
  <div className={cn("switch", {
    "switch--active": isActive,
  })}>
    <div className={cn("switch__dot", {
      "switch__dot--active": isActive,
    })}/>
  </div>
)