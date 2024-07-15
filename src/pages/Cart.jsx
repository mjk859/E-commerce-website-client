import React from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

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

const Title = styled.div`
  font-size: 28px;
  font-weight: 500px;
  display: flex;
  justify-content: ${({ center}) => (center ? 'center' : 'space-between')};
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    flex: 1.2;
  }

`;

const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  ${({ head}) => head && `margin-bottom: 22px`}
`;

const TableItem = styled.div`
  ${({ flex }) => flex && `flex: 1; `}
  ${({ bold }) =>
    bold &&
    `font-weight: 600; 
  font-size: 18px;`}
`;

const Counter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;

const Product = styled.div`
  display: flex;
  gap: 16px;
`;

const Img = styled.img`
    height: 80px;
`;

const Details = styled.div``;

const ProTitle = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
`;

const ProDes = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    flex: 0.8;
  }
`;

const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;


const Cart = () => {
  return (
    <Container>
      <Section>
        <Title>Your Shopping Cart</Title>
        <Wrapper>
          <Left>
            <Table>
              <TableItem bold flex>Product</TableItem>
              <TableItem bold>Price</TableItem>
              <TableItem bold>Quantity</TableItem>
              <TableItem>Subtotal</TableItem>
              <TableItem></TableItem>
            </Table>
            <Table>
              <TableItem flex>
                <Product>
                  <Img src="data:image/jpeg;base64,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"/>
                  <Details>
                    <ProTitle>Title</ProTitle>
                    <ProDes>Description</ProDes>
                    <ProSize>XL</ProSize>
                  </Details>
                </Product>
              </TableItem>
              <TableItem>$120</TableItem>
              <TableItem>
                <Counter>
                  <div>-</div>2<div>+</div>
                </Counter>
              </TableItem>
              <TableItem>$220</TableItem>
              <TableItem></TableItem>
            </Table>
          </Left>
          <Right>
            <Subtotal>Subtotal : 120.90</Subtotal>
            <Delivery>
              Delivery Details :
              <div>
                <div style={{
                  display: 'flex',
                  gap: '6px',
                }}>
                  <TextInput small placeholder="First Name"/>
                  <TextInput small placeholder="Last Name"/>

                </div>
                <TextInput small placeholder="Email Address"/>
                <TextInput small placeholder="Phone no. +91 XXXXX XXXXX"/>
                <TextInput small textArea rows="5" placeholder="Complete Address (Address, State, Country, Pincode)"/>



              </div>
            </Delivery>
            <Delivery>
              Payement Details:
              <div>
                <TextInput small placeholder="Card Number" />
                <div style={{
                  display: 'flex',
                  gap: '6px',
                }}>
                  <TextInput small placeholder="Expiry Date"/>
                  <TextInput small placeholder="CVV"/>
                </div>
                <TextInput small placeholder="Card Holder Name"/>
              </div>
            </Delivery>
            <Button text='Place Order'/>
          </Right>
        </Wrapper>
      </Section>
    </Container>
  )
}

export default Cart