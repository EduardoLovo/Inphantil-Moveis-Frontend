import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import { ApliquesCreate } from './pages/ApliquesCreate';

function App() {
    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <PrivateRoute redirectTo="/login">
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="/"
                element={
                    <PrivateRoute redirectTo="/login">
                        <ApliquesCreate />
                    </PrivateRoute>
                }
            />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
