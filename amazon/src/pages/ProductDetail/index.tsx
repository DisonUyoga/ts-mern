import './index.scss'

import { useState, useEffect } from 'react'
import { sampleProducts } from '../../data'
import { useParams } from 'react-router-dom'
import { Product } from '../../types/Product'
import Helmet from '../../components/Helmet'
import { Col, Row, Container } from 'reactstrap'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const ProductDetail = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    let productItem:Product
    if(sampleProducts){
      productItem= sampleProducts.filter(
        (item: Product) => item.slug === slug
      )
      setProduct(productItem)
    }
  }, [slug, product])
  return (<>{
    product.length>0?
    <Helmet title={product?.name}>
      <Container>
        <Row>
          <Col md='6' lg='6'>
            <div className='product__img'>
              <img src={product?.image} alt='product-image' />
            </div>
          </Col>
          <Col md='6' lg='6'>
            <div className='product__detail'>
              <h4>{product?.name}</h4>
              <p className='product__price'>{product?.price}</p>
              <div className='product__info'>
                <p>
                  <span>Category:</span>
                  {product?.category}
                </p>
                <p>
                  <span>Brand:</span>
                  {product?.brand}
                </p>

                <div className='rating'>
                  <span>Rating</span>
                  <span>
                    <FaStar color='yellow' className='rating__star' />
                    <FaStar color='yellow' className='rating__star' />
                    <FaStar color='yellow' className='rating__star' />
                    <FaStar color='yellow' className='rating__star' />
                    <FaStarHalf color='yellow' />
                  </span>
                </div>
                <p>
                  <span>Reviews:</span>`(${product?.numReviews})`
                </p>
              </div>
              <p className='description'>
                <span>Description:</span> {product?.description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>: <h4 className="text-center fw-bold">Loading</h4>
  }
  </>
  )
}

export default ProductDetail
