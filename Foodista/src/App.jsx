import { Cart } from "./component/Cart";
import Checkout from "./component/Checkout";
import { Header } from "./component/Header";
import { Meal } from "./component/Meal";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContex";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meal />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
