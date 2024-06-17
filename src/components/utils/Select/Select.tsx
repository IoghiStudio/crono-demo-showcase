import './Select.scss';

type Props = {
  value: string;
};

export const Select: React.FC<Props> = ({ value }) => (
  <div className="select">
    <p className="select__text">
      {value}
    </p>

    <div className="select__icon"/>
  </div>
);
