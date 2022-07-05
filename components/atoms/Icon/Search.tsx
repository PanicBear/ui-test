import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Search: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Point1,
  width = 18,
  height = 18,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} onClick={onClick} style={style} viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.4211 13.421L17 17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default memo(Search);
