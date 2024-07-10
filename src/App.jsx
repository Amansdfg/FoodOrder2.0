import Header from "./components/Header";
import Meals from "./components/Meals";
import Checkout from "./components/Checkout.jsx";
import {ContextProvider} from "./store/CartContext.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx"
import Cart from "./UI/Cart.jsx";
function App(){
  return(
    <UserProgressContextProvider>
      <ContextProvider>
        <Header/>
        <Meals/>
        <Cart/>
        <Checkout/>
      </ContextProvider>
    </UserProgressContextProvider>
  )
}
export default App;