import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import ModalA from "./components/ModalA.jsx";
import ModalB from "./components/ModalB.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="Modal_A" element={<ModalA />} />
          <Route path="Modal_B" element={<ModalB />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
