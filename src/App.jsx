import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComicsPage from './components/ComicsPage';
import MainPage from './components/MainPage';
import Page from './components/Page';
import NotFound from './components/NotFound';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />}>
            <Route index element={<MainPage />} />
            <Route path='comics' element={<ComicsPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
