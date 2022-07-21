import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { Icon } from '.';

interface LogoProps {
  onClick?: MouseEventHandler;
}

const Logo: (props: LogoProps) => JSX.Element = () => {
  const router = useRouter();
  const onClick = () => {
    const mainPageUrl = '/';
    if (router.pathname === mainPageUrl) return;

    router.push('/');
  };

  return <Icon.Logo onClick={onClick} style={{ cursor: 'pointer' }} />;
};

export default Logo;
