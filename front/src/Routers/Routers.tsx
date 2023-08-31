import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { About} from '../pages/About';

const Routers = () => {
  return (
    <div>
         <Router>
        <Routes>
          
            <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;