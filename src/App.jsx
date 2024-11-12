import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComicsMainPage from './components/ComicsMainPage';
import MainPage from './components/MainPage';
import Page from './components/Page';
import NotFound from './components/NotFound';
import SingleComics from './components/SingleComics';
import ComicsPage from './components/ComicsPage';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />}>
            <Route index element={<MainPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='comics' element={<ComicsMainPage />}>
              <Route index element={<ComicsPage />}></Route>
              <Route path=':id' element={<SingleComics />}></Route>
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
