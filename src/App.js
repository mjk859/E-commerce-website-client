import styled, { ThemeProvider } from 'styled-components';
import {lightTheme} from './utils/Themes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useState } from 'react';
import Authentication from './pages/Authentication';
import ShopListing from './pages/ShopListing';
import Favourite from './pages/Favourite';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth} />
            <Routes>
              <Route path='/' exact element={<Home />}></Route>
              <Route path='/shop' exact element={<ShopListing />}></Route>
              <Route path='/favourite' exact element={<Favourite />}></Route>
              <Route path='/cart' exact element={<Cart />}></Route>
              <Route path='/shop/:id' exact element={<ProductDetails />}></Route>

            </Routes>
            {openAuth && (<Authentication openAuth={openAuth} setOpenAuth={setOpenAuth}/>)}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
