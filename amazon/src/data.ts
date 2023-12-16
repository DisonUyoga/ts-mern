import { Product } from './types/Product'
import p1 from './assets/images/p1.jpg'
import p2 from './assets/images/p2.jpg'
import p3 from './assets/images/p3.jpg'
import p4 from './assets/images/p4.jpg'
export const sampleProducts: Product[] = [
  {
    name: 'Nike slim shirt',
    slug: 'nike-slim-shirt',
    category: 'shirts',
    image: p1,
    price: 2000,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Adidas fit shirt',
    slug: 'adidas-fit-shirt',
    category: 'shirts',
    image: p2,
    price: 2500,
    countInStock: 20,
    brand: 'Adidas',
    rating: 5,
    numReviews: 20,
    description: 'high quality product',
  },
  {
    name: 'Lacoste free pants',
    slug: 'lacoste-free-pants',
    category: 'pants',
    image: p3,
    price: 3000,
    countInStock: 20,
    brand: 'Lacoste',
    rating: 4.5,
    numReviews: 30,
    description: 'high quality product',
  },
  {
    name: 'Nike slim pant',
    slug: 'nike-slim-pant',
    category: 'pants',
    image: p4,
    price: 4000,
    countInStock: 5,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality product',
  },
]
