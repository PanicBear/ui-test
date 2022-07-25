import { MouseEventHandler } from 'react';
import { CSSProperties } from 'styled-components';

export interface SVGIconProps {
  fill?: string;
  width?: number;
  height?: number;
  onClick?: MouseEventHandler<SVGElement>;
  style?: CSSProperties;
}

export * from './button';

export { default as Dropdown } from './Dropdown';
export { default as Search } from './Search';
export { default as Check } from './Check';
export { default as Close } from './Close';
export { default as Menu } from './Menu';
export { default as Logo } from './Logo';
export { default as User } from './User';
export { default as Bookmark } from './Bookmark';
export { default as Back } from './Back';
export { default as SmallDropdown } from './SmallDropdown';
export { default as Star } from './Star';
