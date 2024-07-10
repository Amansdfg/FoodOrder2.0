
import { useContext } from "react"
import Modal from "../UI/Modal"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formating";
import Input from "./Input";
import Button from "../UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
export default function Checkout(){
    const cartCtx=useContext(CartContext);
    const userPogressCtx=useContext(UserProgressContext);
    const cartTotalPrice=cartCtx.meals.reduce(
        (totalPrice,curr)=>totalPrice+(curr.quantity*curr.price),
        0
    );
    function onClose(){
        userPogressCtx.hideCheckout();
    }
    function handleSubmit(event){
        event.preventDefault();
        const fd=new FormData(event.target);
        const costumerData=Object.fromEntries(fd.entries());
        fetch("http://localhost:3000/orders",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:  JSON.stringify({
                order:{
                    items:cartCtx.meals,
                    customer:costumerData
                }
            })
        })
    }
    return(
        <Modal isOpen={userPogressCtx.process==="checkout"} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total amount : {currencyFormatter.format(cartTotalPrice)}</p>
                <Input label="Full Name" type="text" id="name"/>
                <Input label="E-mail Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street"/>
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={onClose}>Close</Button>
                    <Button >Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}