import './OptionsBar.scss';
import { useCallback, useEffect, useState } from 'react';
import { Switch } from '../utils/Switch';
import { Filter } from '../utils/Filter';
import { ELayoutSwitch, LayoutSwitch } from '../utils/LayoutSwitch';
import { Button, EButtonBgColors, EButtonColors } from '../utils/Button';
import { Select } from '../utils/Select';
import { Dropdown } from '../utils/Dropdown';
import { SearchInput } from '../utils/SearchInput';
import { useDealsContext } from '../../contextApi/dealsContext/store';

export const OptionsBar: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>('Sales Pipeline');
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [isSwitchActive, setIsSwitchActive] = useState<boolean>(false);
  const [layoutType, setLayoutType] = useState<ELayoutSwitch>(ELayoutSwitch.Row);

  const {
    showOnlyMine,
    setShowOnlyMine,
  } = useDealsContext();

  const handleToggleButton = useCallback(() => {
    setIsSwitchActive(!isSwitchActive);
    setShowOnlyMine(!showOnlyMine);
  }, [isSwitchActive, showOnlyMine, setShowOnlyMine]);

  return (
    <div className="options-bar">
      <div className="options-bar__section">
        <div 
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          className="options-bar__select"
        >
          <Select value={selectValue} />

          <div className="options-bar__dropdown">
            {isDropdownActive && (
              <Dropdown
                currentValue={selectValue}
                onSelect={setSelectValue}
              />
            )}
          </div>
        </div>

        <div className="options-bar__search">
          <SearchInput />
        </div>
      </div>

      <div className="options-bar__section">
        <div className="options-bar__wrapper">
          <div className="options-bar__switch for-laptop">
            <p className="options-bar__switch-text">
              My Deals
            </p>

            <div 
              onClick={handleToggleButton}
              className="options-bar__switch-switch"
            >
              <Switch isActive={isSwitchActive}/>
            </div>
          </div>

          <div className="options-bar__filters">
            <Filter />
          </div>

          <div className="options-bar__layout-switch for-tablet">
            <LayoutSwitch
              type={layoutType}
              setType={setLayoutType}
            />
          </div>
        </div>

        <div className="options-bar__wrapper">
          <div className="options-bar__switch for-tablet">
            <p className="options-bar__switch-text">
              My Deals
            </p>

            <div 
              onClick={handleToggleButton}
              className="options-bar__switch-switch"
            >
              <Switch isActive={isSwitchActive}/>
            </div>
          </div>

          <div className="options-bar__layout-switch for-laptop">
            <LayoutSwitch
              type={layoutType}
              setType={setLayoutType}
            />
          </div>

          <div className="option-bar__button">
            <Button 
              color={EButtonColors.White}
              bgColor={EButtonBgColors.Green}
              text='New deal'
            />
          </div>
        </div>
      </div>
    </div>
  )
};