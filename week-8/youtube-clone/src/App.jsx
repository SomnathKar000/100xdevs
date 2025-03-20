import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import VideoPage from "./pages/VideoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<VideoPage />} path="/video/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
