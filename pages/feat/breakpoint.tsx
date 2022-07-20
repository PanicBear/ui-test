import { JobListItem } from '@components/molecules';
import { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS}px)`,
  mobileM: `(min-width: ${sizes.mobileM}px)`,
  mobileL: `(min-width: ${sizes.mobileL}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopL: `(min-width: ${sizes.laptopL}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

const GridLayout = styled.div`
  min-width: 425px;

  display: grid;
  margin: auto;
  width: 100vw;
  padding: -20px;
  align-content: stretch;

  gap: 8px;

  background-color: cyan;

  @media ${devices.mobileS} {
    max-width: ${sizes.mobileS - 40}px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${devices.mobileM} {
    max-width: ${sizes.mobileM - 40}px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${devices.mobileL} {
    max-width: ${sizes.mobileL - 40}px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${devices.tablet} {
    max-width: ${sizes.tablet - 40}px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    max-width: ${sizes.laptop - 40}px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.laptopL} {
    max-width: ${sizes.laptopL - 40}px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${devices.desktop} {
    max-width: ${sizes.desktop - 40}px;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const GridItem = styled.div`
  display: inline-grid;
  min-width: 120px;
`;

const data = {
  title: "We're looking for some one to sell Looking for some one to sell We're looking for some one to ",
  corpName: 'Tripadvisor',
  section: 'Hotel',
  pay: 500,
};

const arr = new Array(61).fill(undefined).map(() => (
  <GridItem>
    <JobListItem {...data} />
  </GridItem>
));

const Page: NextPage = () => {
  const [state, setState] = useState({});
  const { register, watch } = useForm();

  return <GridLayout>{arr}</GridLayout>;
};
export default Page;
