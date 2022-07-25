import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Star: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Slate,
  width = 24,
  height = 24,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" onClick={onClick} style={style}>
      <path
        fill={fill}
        d="M11.528 1.359a.5.5 0 01.944 0l2.235 6.43a.5.5 0 00.462.335l6.805.138a.5.5 0 01.292.899l-5.424 4.112a.5.5 0 00-.176.543l1.97 6.515a.5.5 0 01-.763.556l-5.587-3.888a.5.5 0 00-.572 0l-5.587 3.888a.5.5 0 01-.764-.556l1.971-6.515a.5.5 0 00-.176-.543L1.734 9.161a.5.5 0 01.291-.899l6.806-.138a.5.5 0 00.462-.336l2.235-6.43z"
      ></path>
    </svg>
  );
};

export default memo(Star);
