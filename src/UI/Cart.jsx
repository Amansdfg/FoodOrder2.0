import Modal from "./Modal"
import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formating";
import Button from "./Button";
import {UserProgressContext} from "../store/UserProgressContext"
export default function Cart(){
    const cartCtx=useContext(CartContext);
    const userPorgressCtx=useContext(UserProgressContext);
    const cartTotalPrice=cartCtx.meals.reduce(
        (totalPrice,curr)=>totalPrice+(curr.quantity*curr.price),
        0
    );
    return(
        <Modal className="cart" isOpen={userPorgressCtx.process==="cart"}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.meals.map((meal)=>
                <li key={meal.id}>
                    {meal.name} - {meal.quantity}
                </li>
            )}
            </ul>
            <p className="cart-total">
                {currencyFormatter(cartTotalPrice)}
            </p>
            <p className="modal-actions">
                <Button textOnly>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    )
}