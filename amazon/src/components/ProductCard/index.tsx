import { Container } from 'reactstrap'
import './index.scss'
import { Link } from 'react-router-dom'
const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <Container>
      <div className='product__wrapper'>
        <Link to={`/product-detail/${product?.slug}`}>

        <div className='product__img'>
          <img src={product?.image} alt='product-image' />
        </div>
        </Link>
        <div className='product__content'>
          <h3 className='product__title'>{product?.name}</h3>
          <div className='product__details'>
            <p className='product__brand'>
              <span>Brand: </span> {product?.brand}
            </p>
            <p className='product__price'>
              Price: <span> Ksh. {product?.price}</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductCard
