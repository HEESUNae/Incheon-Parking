import { MouseEventHandler } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  classStyle?: string;
  imgUrl?: string;
  alt?: string;
  children?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type = 'button', classStyle, imgUrl, alt, children, onClick }: ButtonProps) => {
  return (
    <button type={type} className={classStyle} onClick={onClick}>
      {imgUrl && <img src={imgUrl} alt={alt} />}
      {children}
    </button>
  );
};

export default Button;
