import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <>
      <BrowserRouter>
          <Product />
      </BrowserRouter>
    </>
  );
}

export default App;