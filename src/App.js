
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (

    //BEM
    <div className="app">
      <Router>
        <Header />
        
        <Routes>

          <Route path="/search" element= {<SearchPage />}>
          </Route>

          <Route path='/' element={<Home />}>
            
          </Route>
    
        </Routes>
        
        <Footer />
      </Router>

      
      {/*Home */}
          {/*Header  */}
          {/*Banner */ }
            {/*Search */}
          {/*Cards */}
          {/*Footer */}
        {/* SearchPage */}
          {/*Header */}
          {/*... */}
    </div>

  
  );
}

export default App;
