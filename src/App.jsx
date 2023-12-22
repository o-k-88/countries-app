import { Routes, Route } from "react-router-dom";
import {} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";

import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
