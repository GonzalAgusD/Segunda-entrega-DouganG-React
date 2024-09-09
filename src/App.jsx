import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'; 
import { NotFound } from './components/NotFound/NotFound';
import './shared.css';
import ToggleThemeButton from './components/ToggleThemeButton/ToggleThemeButton';



export function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ToggleThemeButton />
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting="Welcome the Skin Maker" />} />
          <Route path="/category/:categoryId" element={<ItemsListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
