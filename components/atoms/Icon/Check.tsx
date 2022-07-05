import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Search: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Point1,
  width = 16,
  height = 16,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} fill="none" onClick={onClick} style={style} viewBox="0 0 16 16">
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.334 4L6 11.333 2.667 8"
      ></path>
    </svg>
  );
};

export default memo(Search);
