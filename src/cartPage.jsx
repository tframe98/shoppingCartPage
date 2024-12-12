import './style.css';
import aeroStrides from './img/aeroStrides.png';
import cyberSouls from './img/cyberSouls.png';
import fluxGuide from './img/fluxGuide.png';
import nanoSprinters from './img/nanoSprinters.png';
import quantumKicks from './img/quantumKicks.png';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Aero Strides", size: 9, price: 200, originalPrice: 250, img: aeroStrides },
    { id: 2, name: "Quantum Kicks", size: 9, price: 200, originalPrice: 250, img: quantumKicks },
    { id: 3, name: "Nano Sprinters", size: 9, price: 200, originalPrice: 250, img: nanoSprinters },
    { id: 4, name: "Cyber Souls", size: 9, price: 200, originalPrice: 250, img: cyberSouls },
    { id: 5, name: "Flux Guide", size: 9, price: 200, originalPrice: 250, img: fluxGuide },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);


  return (
    <div>
      <header>
        <h1 className='cart-title'>Cart</h1>
        <span className='cart-number'>{cartItems.length}</span>
        <button className='ship'>Ship To 1234 West St.</button>
      </header>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className='cart-item' key={item.id}>
          <img src={item.img} alt={item.name} />
          <div className="details">
            <h3>{item.name}</h3>
            <p>Size: {item.size}</p>
            <div className="price">
              <span>${item.price}</span>
              <del>${item.originalPrice}</del>
              </div>
              <button className="estimate-button">Estimated price</button>
              </div>
              </div>
        )
      )}
      </div>
      <footer>
        <span className="total">Total: ${total}</span>
        <button className="order-button">Order Details</button>
      </footer>
    </div>
  );
};

export default CartPage;

