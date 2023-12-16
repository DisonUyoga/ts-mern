import './index.scss'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../../components/Helmet'
import ProductCard from '../../components/ProductCard'
import { sampleProducts } from '../../data'

const Products = () => {
  return (
    <Helmet title='product'>
      <Container>
        <Row>
          {sampleProducts &&
            sampleProducts.map((product) => (
              <Col lg='3' md='4'>
                <ProductCard key={product?.slug} product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </Helmet>
  )
}

export default Products
