import logo from "../assets/logo.jpg"
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import {UserProgressContext} from "../store/UserProgressContext";
export default function Header(){
    const cartctx=useContext(CartContext);
    const userProgressctx=useContext(UserProgressContext);
    const totalCartMeal=cartctx.meals.reduce((total,curr)=>total+curr.quantity,0);

    function handleShowCart(){
    }
    return(
        <header id="main-header">
            <div id="title"> 
                <img src={logo} alt="logo"/>
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartMeal})</Button>
            </nav>
        </header>
    )
}