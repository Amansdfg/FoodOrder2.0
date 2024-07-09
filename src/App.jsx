import Header from "./components/Header";
import Meals from "./components/Meals";
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
      </ContextProvider>
    </UserProgressContextProvider>
  )
}
export default App;