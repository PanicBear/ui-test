import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Bookmark: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Point1,
  width = 24,
  height = 24,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" onClick={onClick} style={style}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M14.686 3H9.287C6.925 3 5 3.963 5 6.41v13.662c0 .504.394.918.884.918a.91.91 0 00.428-.117l5.68-2.916 5.67 2.916c.21.126.463.162.69.09a.912.912 0 00.648-.89V6.41C18.974 3.963 17.058 3 14.686 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default memo(Bookmark);
