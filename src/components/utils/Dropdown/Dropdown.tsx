import { Dispatch, SetStateAction } from 'react';
import './Dropdown.scss';

interface IDropdownItem {
  id: number;
  text: string;
};

const dropdownItems: IDropdownItem[] = [
  {
    id: 1,
    text: 'Sales Pipeline'
  },
  {
    id: 2,
    text: 'Second option'
  },
  {
    id: 3,
    text: 'Third option'
  },
  {
    id: 4,
    text: 'Forth option'
  },
  {
    id: 5,
    text: 'Last option'
  },
];

type Props = {
  currentValue: string;
  onSelect: Dispatch<SetStateAction<string>>;
};

export const Dropdown: React.FC<Props> = ({ currentValue, onSelect }) => (
  <div className="dropdown">
    <div className="dropdown__list">
      {dropdownItems
        .filter(({ text }) => text !== currentValue)
        .map(({id, text}) => (
          <div 
            key={id} 
            className="dropdown__item"
            onClick={() => onSelect(text)}
          >
            {text}
          </div>
        ))
      }
    </div>
  </div>
)