import { useState ,createContext} from "react";
export const UserProgressContext=createContext({
    process:"",
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{},
})
export  function UserProgressContextProvider({children}){
    const [userProgress,setUserProgress] = useState();
    function showCart(){
        setUserProgress("cart");
    }
    function hideCart(){
        setUserProgress("");
    }
    function showCheckout(){
        setUserProgress("checkout");
    }
    function hideCheckout(){
        setUserProgress("");
    }
    const userProgressCtx={
        process:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    }
    return(
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    )
}