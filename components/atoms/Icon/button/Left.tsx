import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '..';

const Left: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Black,
  width = 22,
  height = 22,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} onClick={onClick} style={style} fill="none" viewBox="0 0 22 22">
      <path fill="#fff" d="M1 6a5 5 0 015-5h10a5 5 0 015 5v10a5 5 0 01-5 5H6a5 5 0 01-5-5V6z"></path>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 8l-2.293 2.293a1 1 0 000 1.414L12 14m-6 7h10a5 5 0 005-5V6a5 5 0 00-5-5H6a5 5 0 00-5 5v10a5 5 0 005 5z"
      ></path>
    </svg>
  );
};

export default memo(Left);
