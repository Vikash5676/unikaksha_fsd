import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={"<Blogs />"} />
        <Route path="contact" element={"<Contact />"} />
        <Route path="*" element={"<NoPage />"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
