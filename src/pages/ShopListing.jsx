import React, { useState } from 'react'
import ProductCard from '../components/cards/ProductCard'
import styled from 'styled-components'
import { category, filter } from '../utils/data';
import { Slider } from '@mui/material';

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
    flex-direction: column;
  }
  background: ${({ theme }) => theme.bg };
`;

const Filters = styled.div`
  width: 230px;
  height: 100%;
  overflow-y: scroll;
  padding: 20px 16px;
  @media (max-width: 768px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;


const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SelectableItem = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid ${({theme}) => theme.text_secondary + 50};
  color: ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 16px;
  width: fit-content;
  ${({ selected, theme }) =>
    selected &&
    `
      border: 1px solid ${theme.text_primary};
      color: ${theme.text_primary};
      background: ${theme.text_primary + 30};
      font-weight: 500;
    `}
`;

const Products = styled.div`
  padding: 12px;
  overflow-y: scroll;
  @media (min-width: 768px) {
    width: 100%;
    overflow-y: scroll;
    height:60vh;
  }

`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const ShopListing = () => {
  const [priceRange, setPriceRange ] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState(["S", "M", "L", "XL"]);
  const [selectedCategories, setSelectedCategories] = useState([
    "Men",
    "Women",
    "Kids",
    "Bags",
  ]);
  return (
    <Container>
      <Filters>
        <Menu>{filter.map((filters) => (
          <FilterSection>
            <Title>{filters.name}</Title>
            {filters.value === 'price' ? (
              <>
                <Slider 
                  aria-label="Price"
                  defaultValue={priceRange}
                  min={0}
                  max={1000}
                  valueLabelDisplay='auto'
                  marks={[
                    { value: 0, label: "$0" },
                    { value: 1000, label: "$1000"}
                  ]}
                  />
              </>
            ) : filters.value === 'size' ? (
              <Item>
                {filters.items.map((item) => (
                  <SelectableItem key={item} selected={selectedSizes.includes(item)} onClick={() => setSelectedSizes((prevSizes) => prevSizes.includes(item) ? prevSizes.filter((size) => size !== item) : [...prevSizes, item])}>{item}</SelectableItem>
                ))}
              </Item>
            ) : filters.value === 'category' ? (
              <Item>
                {filters.items.map((item) => (
                  <SelectableItem key={item} selected={selectedCategories.includes(item)} onClick={() => setSelectedCategories((prevCategories) => prevCategories.includes(item) ? prevCategories.filter((category) => category !== item) : [...prevCategories, item])}>{item}</SelectableItem>
                ))}
              </Item>
            ) : null }
          </FilterSection>
        ))}</Menu>
      </Filters>
      <Products>
        <CardWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </CardWrapper>
      </Products>
    </Container>
  )
}

export default ShopListing