// import { Link } from 'react-router-dom';

function SimilarProducts(props) {
  return(
    <div className='similar-products'>
      <h2>Similar Products</h2>
      <ul>
        {props.similar.map(product => (
          <li key={product.id}  >
            <a onClick={e => {
                e.preventDefault();       // prevent page jump
                props.setProductId(product.id); // set the ID on click
              }}>
              <img src={product.image} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SimilarProducts;