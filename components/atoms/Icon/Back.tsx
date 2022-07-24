import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Back: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Black,
  width = 24,
  height = 24,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" onClick={onClick} style={style}>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25"
      ></path>
    </svg>
  );
};

export default memo(Back);
