import { SignUp } from "../pages/login/signUp";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { About } from "../pages/About";
import { Loading } from "../pages/Loading";
import { SignIn } from "../pages/login/signIn";
import { Header } from "../dashboard-Employee/header";
import { Sidebare } from "../dashboard-Employee/sidebare";
import { ContentPage } from "../dashboard-Employee/content-page";
import { DemandeConge } from "../dashboard-Employee/demande-Conge";
import { ListConge } from "../dashboard-Employee/listConge";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Loading />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          
          // dashboard of Employee
          <Route path="/" element={<ContentPage />}>
            <Route path="demandeConge" element={<DemandeConge />} />
            <Route path="listConge" element={<ListConge />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
