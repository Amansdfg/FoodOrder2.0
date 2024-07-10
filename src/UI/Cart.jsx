import Modal from "./Modal"
import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formating";
import Button from "./Button";
import {UserProgressContext} from "../store/UserProgressContext"
import CartItem from "../components/CartItem";
export default function Cart(){
    const cartCtx=useContext(CartContext);
    const userPorgressCtx=useContext(UserProgressContext);
    const cartTotalPrice=cartCtx.meals.reduce(
        (totalPrice,curr)=>totalPrice+(curr.quantity*curr.price),
        0
    );
    function handelCloseCart(){
        userPorgressCtx.hideCart();
    }
    function handleGoToCheckout(){
        userPorgressCtx.showCheckout();
    }
    return(
        <Modal className="cart" isOpen={userPorgressCtx.process==="cart"} onClose={userPorgressCtx.process==="cart"?handelCloseCart:null}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.meals.map((meal)=>
               <CartItem 
                key={meal.id} 
                {...meal} 
                onDecrease={()=>cartCtx.removeMeal(meal.id)} 
                onIncrease={()=>cartCtx.addMeal(meal)}/>
            )}
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotalPrice)}
            </p>
            <p className="modal-actions">
                <Button textOnly onClick={handelCloseCart}>Close</Button>
                {cartCtx.meals.length>0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
            </p>
        </Modal>
    )
}