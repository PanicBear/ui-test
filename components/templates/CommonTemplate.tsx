import { ReactNode } from 'react';
import styled from 'styled-components';

const TemplateArea = styled.div`
  width: 100%;
  height: 200vh;
`;
const TemplateTitle = styled.h1`
  margin: 0;
`;

interface CommonPageTempalte {
  title: string;
  children?: ReactNode;
}

const CommonTemplate: (props: CommonPageTempalte) => JSX.Element = ({ title, children }) => {
  return (
    <TemplateArea>
      <TemplateTitle>{title}</TemplateTitle>
      {children}
    </TemplateArea>
  );
};

export default CommonTemplate;
