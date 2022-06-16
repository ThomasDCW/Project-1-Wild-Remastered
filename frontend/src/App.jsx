import Footer from "@components/Footer";
import Header from "@components/Header";
import HomePage from "@pages/Home";
import Pages from "@pages/Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Pages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
