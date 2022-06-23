import { InputField } from '@components/molecules';
import { CommonTemplate } from '@components/templates';
import { NextPage } from 'next';

const Page: NextPage = () => {
  const hoverText = `The password must be at least 8 characters. 
  It must contain at least  numbers(0-9), upper and lower case letters (A-Z, a-z).`;

  return (
    <CommonTemplate title="Tooltip">
      <InputField label={'test'} />
      <InputField label={'test'} />
      <InputField label={'test'} />
      <InputField label={'test'} tooltip={{ hoverText }} />
    </CommonTemplate>
  );
};
export default Page;
