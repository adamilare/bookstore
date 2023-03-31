import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Books from './routes/Books';
import Categories from './routes/Categories';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/calculator" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
