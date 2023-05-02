import React from 'react';
import data from './data';


function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
           <a href="index.html" className="brand">amazona</a> 
        </div>
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    
    </header>
    <main>
        <div className="row center">
          {
            data.products.map(products=>(
              <div classNameName="card" key={products._id}>
                <a href={`/product/${products._id}`}>
                    <img src={products.image} alt={products.name} className="medium"/>
                </a>
                <div className="card-body">
                    <a href={`/product/${products._id}`}>
                        <h2>{products.name}</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i> {products.rating}</span>
                        <span><i className="fa fa-star"></i> </span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">${products.price}</div>
                </div>
           
            
           
            </div>
            ))
          }
            
        </div>
    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
  );
}

export default App;
