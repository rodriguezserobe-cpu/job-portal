import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplyJobPage from "./pages/ApplyJobPage";
import ApplicationPage from "./pages/ApplicationPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply-job/:id" element={<ApplyJobPage />} />
        <Route path="/application" element={<ApplicationPage />} />
      </Routes>
    </div>
  );
};

export default App;
