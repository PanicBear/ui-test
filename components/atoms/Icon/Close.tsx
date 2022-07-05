import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Search: (props: SVGIconProps) => JSX.Element = ({
  fill = '#333333',
  width = 24,
  height = 24,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} onClick={onClick} style={style} fill="none" viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M13.41 12l6.3-6.29a1.004 1.004 0 10-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 00-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 000 1.42.998.998 0 001.42 0l6.29-6.3 6.29 6.3a.998.998 0 001.42 0 .997.997 0 00.219-1.095.998.998 0 00-.22-.325L13.41 12z"
      ></path>
    </svg>
  );
};

export default memo(Search);
