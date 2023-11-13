import { Route, Routes } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import Home from "./pages/Home";

const App = () => {
  const { currentUser } = UserAuth();
  console.log(currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
