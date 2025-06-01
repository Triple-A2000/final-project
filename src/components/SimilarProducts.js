import { Link } from 'react-router-dom';

function SimilarProducts(props) {
  return(
    <div className='similar-products'>
      <h2>Similar Products</h2>
      <ul>
        {props.similar.map(product => (
          <li key={product.id}  >
            <Link to={`/product/${product.id}`}>
              <img src={product.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimilarProducts;