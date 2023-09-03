import { SignUp } from '../pages/login/signUp';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { About} from '../pages/About';
import { Loading } from '../pages/Loading';
import { SignIn } from '../pages/login/signIn';





const Routers = () => {
  return (
    <div>
         <Router>
        <Routes>
          
          <Route path="/about" element={<About />} />
           <Route path="/" element={<Loading />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/signUp"  element={<SignUp />}/>
          <Route path="/signIn"  element={<SignIn />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;