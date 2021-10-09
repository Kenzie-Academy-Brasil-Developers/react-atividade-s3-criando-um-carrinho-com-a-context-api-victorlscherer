import './App.css';
import ProductList from './components/product-list';
import { CatalogueProvider } from './providers/catalogue';
import { CartProvider } from './providers/cart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <ProductList type="catalogue" />
            <ProductList type="cart" />
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
