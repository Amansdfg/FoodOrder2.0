import { createContext,useReducer } from "react";
const CartContext=createContext({
    meals:[],
    addMeal: (meal)=>{},
    removeMeal: (id)=>{},
});
function cartReducer(state,action){
    if(action.type==='ADD_MEAL') {
        const existingCartMealIndex=state.meals.findIndex(
            (meal)=>meal.id===action.meal.id
        );
        const updatedMeals=[...state.meals];
        if(existingCartMealIndex>-1){
            const existingMeal=state.meals[existingCartMealIndex];
            const updatedMeal={
                ...existingMeal,
                quantity: existingMeal.quantity+1
            };
            updatedMeals[existingCartMealIndex]=updatedMeal;
        }else{
            updatedMeals.push({...action.meal,quantity:  1});
        }
        return { ...state, meals:updatedMeals };
    }
    if(action.type==="REMOVE_MEAL"){
        const existingCartMealIndex = state.meals.findIndex(
            (meal)=>meal.id===action.meal.id
        );
        const existingCartMeal=state.meals[existingCartMealIndex];

        const updatedMeals=[...state.meals];
        if(existingCartMeal.quantity===1){
            const updatedMeals = [...state.meals];
            updatedMeals.splice(existingCartMealIndex,1);
        }else{
            const updatedMeal={
                ...existingCartMeal,
                quantity:existingCartMeal.quantity-1
            }
            updatedMeals[existingCartMealIndex]=updatedMeal;
        }
        return { ...state, meals:updatedMeals };
    }
    return state;

}
export function ContextProvider({children}){
    const[cart,dispatch]=useReducer(cartReducer,{meals:[]});
    function  addMeal(meal){
        dispatch({
            type:"ADD_MEAL",
            meal
        })
    }
    function removeMeal(id){
        dispatch({
            type:"REMOVE_MEAL",
            id
        })
    }
    const cartContext={
        meals:cart.meals,
        addMeal,
        removeMeal,
    };
    console.log(cartContext);
    return(
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;