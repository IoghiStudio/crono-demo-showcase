import { useDealsContext } from '../../../contextApi/dealsContext/store';
import './SearchInput.scss';

export const SearchInput: React.FC = () => {
  const { setDealsQuery } = useDealsContext();

  return (
    <label 
      htmlFor="search-input" 
      className="search-input"
    >
      <div className="search-input__icon"/>

      <input
        id="search-input" 
        type="text" 
        className="search-input__input"
        placeholder='Search...'
        onChange={(e) => setDealsQuery(e.target.value.toLowerCase())}
      />
    </label>
  )
};