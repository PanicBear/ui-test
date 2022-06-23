import { Tooltip } from '@components/molecules';
import { CommonTemplate } from '@components/templates';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <CommonTemplate title="Tooltip">
      <Tooltip hoverText={'tooltip text'}>tooltip test</Tooltip>
    </CommonTemplate>
  );
};
export default Page;
