import React from 'react'
import styled from 'styled-components';
import HeaderImage from '../utils/Images/Header.png';
import { category } from '../utils/data'
import ProductCategoryCard from '../components/cards/ProductCategoryCard';
import ProductCard from '../components/cards/ProductCard';

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg };
`;

const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 1200px;
  height: 700px;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500px;
  display: flex;
  justify-content: ${({ center}) => (center ? 'center' : 'space-between')};
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Section style={{ alignItems: "center"}}>
        <Img src={HeaderImage}/>
      </Section>
      <Section>
        <Title>Shop by Categories</Title>
        <CardWrapper>
          {category.map((category) => (
            <ProductCategoryCard category={category} />
          ))}
        </CardWrapper>
      </Section>
      <Section style={{ alignItems: "center"}}>
        <Title center>Our Bestseller</Title>
        <CardWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </CardWrapper>
      </Section>
    </Container>
  )
}

export default Home