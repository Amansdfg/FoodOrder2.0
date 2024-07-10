import Button from "../UI/Button";
import { currencyFormatter } from "../util/formating";
export default function CartItem({name,quantity,price,onIncrease,onDecrease}){
    return(
        <li className="cart-item">
            <p>
                {name} - {quantity} X {price}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )   
}