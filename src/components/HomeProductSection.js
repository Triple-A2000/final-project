import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeProductSection(props) {

    const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState(''); // Default is alphabetical

  useEffect(() => {
    let sorted = [...props.products];

    if (sortBy === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sorted.sort((a, b) => a.id - b.id); 
    }

    setSortedProducts(sorted);
  }, [sortBy, props.products]);

  return(
    <section className="home-product-section">
      <h2>Explore our wide selection of products</h2>

      <div className='flex'>
        <p>Sort by</p>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>

      <ul className='gap-20'>
        {sortedProducts.map(product => (
          <li key={product.id}  >
            <Link className='no-underline' to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeProductSection;