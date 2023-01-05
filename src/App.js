import "./App.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import AddNew from "./Pages/AddNew";
import RetrieveInfo from "./Pages/Retrieve_Data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <Routes>
        <Route path="/" element={<AddNew />} />
        <Route path="/retrieve" element={<RetrieveInfo />} />
      </Routes>
    </div>
  );
}

export default App;
