import { Route, Routes } from "react-router-dom";
import Homepage from "./modules/homepage/home-page";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
