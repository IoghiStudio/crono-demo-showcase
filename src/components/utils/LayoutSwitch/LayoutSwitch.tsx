import { Dispatch, SetStateAction } from 'react';
import './LayoutSwitch.scss';
import cn from 'classnames';

export enum ELayoutSwitch {
  Row,
  Column,
};

type Props = {
  type: ELayoutSwitch;
  setType: Dispatch<SetStateAction<ELayoutSwitch>>;
};

export const LayoutSwitch: React.FC<Props> = ({ type, setType }) => (
  <div className="layout-switch">
    <div 
      onClick={() => setType(ELayoutSwitch.Row)}
      className={cn("layout-switch__icon-container", {
        "layout-switch__icon-container--active": type === ELayoutSwitch.Row,
      })}
    >
      <div className={cn("layout-switch__icon layout-switch__icon--row", {
        "layout-switch__icon--row--active": type === ELayoutSwitch.Row,
      })}/>
    </div>

    <div
      onClick={() => setType(ELayoutSwitch.Column)}
      className={cn("layout-switch__icon-container", {
        "layout-switch__icon-container--active": type === ELayoutSwitch.Column,
      })}
    >
      <div className={cn("layout-switch__icon layout-switch__icon--column", {
        "layout-switch__icon--column--active": type === ELayoutSwitch.Column,
      })}/>
    </div>
  </div>
);