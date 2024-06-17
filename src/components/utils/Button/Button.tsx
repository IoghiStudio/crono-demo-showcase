import cn from 'classnames';
import './Button.scss';

export enum EButtonBgColors {
  White,
  Black,
  Green,
};

export enum EButtonColors {
  White,
  Black,
};

type Props = {
  bgColor: EButtonBgColors;
  color: EButtonColors;
  text: string;
};

export const Button: React.FC<Props> = ({ bgColor, color, text }) => (
  <div className={cn("button", {
    "button--white": bgColor === EButtonBgColors.White,
    "button--black": bgColor === EButtonBgColors.Black,
    "button--green": bgColor === EButtonBgColors.Green,
  })}>
    <div className="button__icon"/>

    <div className={cn("button__text", {
      "button__text--white": color === EButtonColors.White,
      "button__text--black": color === EButtonColors.Black,
    })}>
      {text}
    </div>
  </div>
)