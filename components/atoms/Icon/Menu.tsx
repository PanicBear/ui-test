import { Color } from '@styles/index';
import { memo } from 'react';
import { SVGIconProps } from '.';

const Menu: (props: SVGIconProps) => JSX.Element = ({
  fill = Color.Black,
  width = 18,
  height = 19,
  onClick,
  style,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 14" fill="none" onClick={onClick} style={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7C18 6.49574 17.6101 6.08696 17.129 6.08696H0.870968C0.389945 6.08696 0 6.49574 0 7C0 7.50426 0.389945 7.91304 0.870968 7.91304H17.129C17.6101 7.91304 18 7.50426 18 7Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0.913043C18 0.408783 17.6101 0 17.129 0H0.870968C0.389945 0 0 0.408783 0 0.913043C0 1.4173 0.389945 1.82609 0.870968 1.82609H17.129C17.6101 1.82609 18 1.4173 18 0.913043Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 13.087C18 12.5827 17.6101 12.1739 17.129 12.1739H0.870968C0.389945 12.1739 0 12.5827 0 13.087C0 13.5912 0.389945 14 0.870968 14H17.129C17.6101 14 18 13.5912 18 13.087Z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(Menu);
