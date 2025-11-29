import { Header } from "./component/Header";
import { Meal } from "./component/Meal";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meal />
    </CartContextProvider>
  );
}

export default App;
