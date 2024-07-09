import { currencyFormatter } from "../util/formating"
import CartContext from "../store/CartContext";
import { useContext } from "react";
import Button from "../UI/Button";
export default function MealItem({meal}){
    const carttx=useContext(CartContext);
    function addCartMeal(){
        carttx.addMeal(meal);
    }
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                    <p className="meal-item-actions">
                        <Button onClick={()=>addCartMeal()}>Add to Cart</Button>
                    </p>
                </div>
            </article>
        </li>
    )
}