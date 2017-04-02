import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
	font-size: 28px;
	font-weight: 300;
`
const Label = styled.label`
	color: #666;
	font-size: 10px;
	font-weight: 500;
	line-height: 2em;
	text-transform: uppercase;
`
const ProductFilter = styled.nav`
  display: flex;
  padding: 30px 0;
`
const ProductHeading = styled(Heading)`
  flex-grow: 1;
`
const Sort = styled.div`
  display: flex;
  align-self: flex-end;
`
const CollectionSort = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child { padding-right: 20px; }
`

const ProductSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  flex: 1 16%;
  background-color: white;
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.25);
`
const ProductImage = styled.img`
  width: 100%;
`
const ProductInfo = styled.div`
  margin-top: auto;
  padding-top: 20px;
  text-align: center;
`
const ProductTitle = styled.h5`
  font-weight: 500;
	line-height: 1.7em;
`
const ProductPrice = styled.h6`
	color: #666;
	font-size: 14px;
`

const VentureHeader = () => (
  <ProductFilter>
    <ProductHeading>Jackets</ProductHeading>
    <Sort>
      <CollectionSort>
        <Label>Filter by:</Label>
        <select>
          <option value='/'>All Jackets</option>
        </select>
      </CollectionSort>
      <CollectionSort>
        <Label>Sort by:</Label>
        <select>
          <option value='/'>Featured</option>
        </select>
      </CollectionSort>
    </Sort>
  </ProductFilter>
)

const Product = ({ src }) => (
  <ProductCard>
    <div>
      <ProductImage src={ src } />
    </div>
    <ProductInfo>
      <ProductTitle>Winter Jacket</ProductTitle>
      <ProductPrice>$99.99</ProductPrice>
    </ProductInfo>
  </ProductCard>
)

const Products = () => (
  <ProductSection>
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/10197100950_1_1294x1800_300_RGB_480x480.jpeg?v=1445623372' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_480x480.jpeg?v=1445623369' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/EDYTJ00016_BTK0_FRT1_1800-2400_480x480.jpeg?v=1445623375' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/3151-Juana-D-4263-753_1_480x480.jpeg?v=1445626994' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/10175100258_1_1264x1800_300_RGB_480x480.jpeg?v=1445623366' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_480x480.jpeg?v=1445623369' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/13142100261_1_1501x2100_300_RGB_480x480.jpeg?v=1445623386' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/13140100904_1_1522x2100_300_RGB_480x480.jpeg?v=1445623383' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/13068100389_1_1487x2100_300_RGB_480x480.jpeg?v=1445623380' />
    <Product src='//cdn.shopify.com/s/files/1/0938/8938/products/3166-GALA-D-4949-011_front_480x480.jpeg?v=1445627003' />
  </ProductSection>
)

const VentureTutorial = () => (
  <div>
    <VentureHeader />
    <Products />
  </div>
)

export default VentureTutorial
