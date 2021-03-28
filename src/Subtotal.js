import React from 'react';
import NumberFormat from 'react-number-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
