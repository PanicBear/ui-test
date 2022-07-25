import { Color } from '@styles/color';
import { memo } from 'react';
import { SVGIconProps } from '.';

const SmallDropdown: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Black,
  width = 24,
  height = 24,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} onClick={onClick} style={style} fill="none" viewBox="0 0 20 20">
      <path
        fill={fill}
        d="M14.167 8.642a.834.834 0 00-1.175 0L10 11.592l-2.95-2.95a.833.833 0 10-1.175 1.183l3.534 3.533a.833.833 0 001.183 0l3.575-3.533a.833.833 0 000-1.183z"
      ></path>
    </svg>
  );
};

export default memo(SmallDropdown);
