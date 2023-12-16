import './index.scss'
import { Container, Col, Row } from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Container className='footer'>
      <Row>
        <div className='footer__content'>
          <p className='footer__info'>
            &#169;{year}. All rights Reserved. Website designed by Dison Obudho
          </p>
        </div>
      </Row>
    </Container>
  )
}

export default Footer
