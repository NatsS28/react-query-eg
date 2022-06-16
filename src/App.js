
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route, Link, Navigate } from 'react-router-dom'
import Traditionalfetch from './Traditionalfetch';
import RqPage from './RqPage';
import HomePage from './HomePage';
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/super-heroes'>Traditional Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/super-heroes' element={<Traditionalfetch/>}>
                        
                    </Route>
                    <Route path='/rq-super-heroes' element={<RqPage />}>
                        
                    </Route>
                    <Route path='/' element={<HomePage />}>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
