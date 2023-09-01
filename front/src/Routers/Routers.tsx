import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { About} from '../pages/About';
import { Loading } from '../pages/Loading';





const Routers = () => {
  return (
    <div>
         <Router>
        <Routes>
          
          <Route path="/about" element={<About />} />
           <Route path="/" element={<Loading />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;