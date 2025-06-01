import { Link } from 'react-router-dom';

function HomeProductSection(props) {
  return(
    <section className="home-product-section">
      <h2>Explore our wide selection of products</h2>
      <ul className='gap-20'>
        {props.products.map(product => (
          <li key={product.id}  >
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeProductSection;