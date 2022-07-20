import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div<{ height: number }>`
  ${({ theme }) => theme.Layout.flexRowBetweenCenter}
  height: ${({ height }) => height}px;
  padding: 8px 18px;
  border-bottom: 1px solid #e6e6e6;

  border: 1px solid black;
  border-radius: 8px;

  /* &:last-child {
    border: 0;
  } */
`;
const ItemTextWrapper = styled.div`
  ${({ theme }) => theme.Layout.flexColBetweenCenter}
  height:100%;
  align-items: flex-start;
`;
const ItemImage = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 4px;
`;
const CorpName = styled.span`
  color: ${({ theme }) => theme.Color.Point1};
  margin: 0;

  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;
const PostTitle = styled.p<{ maxLine: number; hasSpace: boolean }>`
  margin: 0;

  max-height: ${({ maxLine }) => maxLine * 21 + 'px'};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ maxLine }) => maxLine};
  overflow: hidden;
  line-break: ${({ hasSpace }) => (hasSpace ? 'auto' : 'anywhere')};

  font-family: AppleSDGothicNeoB00;
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.2px;
  text-align: left;
`;
const ConditionWrapper = styled.div`
  ${({ theme }) => theme.Layout.flexRowStartCenter}

  & > p {
    margin: 0;
    font-family: AppleSDGothicNeoM00;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
const Condition = styled.p`
  color: ${({ theme }) => theme.Color.SemiBlack};
`;

interface JobPostItemProps {
  title: string;
  corpName: string;
  pay: number;
  section: string;
  imgSrc?: string;
  hasImage?: boolean;
}

const JobListItem: (props: JobPostItemProps) => JSX.Element = ({
  title,
  corpName,
  pay,
  section,
  imgSrc,
  hasImage = true,
}) => {
  return (
    <ItemWrapper height={hasImage ? 100 : 86}>
      <ItemTextWrapper>
        <CorpName>{corpName}</CorpName>
        <PostTitle maxLine={hasImage ? 2 : 1} hasSpace={Boolean(title.match(' '))}>
          {title}
        </PostTitle>
        <ConditionWrapper>
          <Condition style={{ borderRight: '1px solid #A2A3AC', paddingRight: '8px' }}>{section}</Condition>
          <Condition style={{ paddingLeft: '8px' }}>{pay} ~ ₱ per a Day</Condition>
        </ConditionWrapper>
      </ItemTextWrapper>
      {hasImage && <ItemImage src={imgSrc} />}
    </ItemWrapper>
  );
};

export default JobListItem;
