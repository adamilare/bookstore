import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Books from './routes/BookList';
import Categories from './routes/Categories';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
